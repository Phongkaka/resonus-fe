import { css, cx } from "@emotion/css";
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { isTablet, isMobile } from "react-device-detect";
import { useContextCustom } from "../../utils/store/hooks";
import { RecordRTCPromisesHandler } from "recordrtc";
import { useNavigate } from "react-router-dom";

const Camera = () => {
  const [status, setStatus] = useState(true);
  const [timeStart, setTimeStart] = useState(-1);
  const [isReady, setIsReady] = useState(false);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const intervalRef = useRef(null);
  const [screens, dispatch] = useContextCustom((state) => state.screens);
  const navigate = useNavigate();

  const handleStart = () => {
    let timer = 3;
    setTimeStart(3);
    mediaRecorderRef.current = new RecordRTCPromisesHandler(webcamRef.current.stream, {
      type: "video",
      mimeType: "video/mp4",
    });
    mediaRecorderRef.current.startRecording();
    intervalRef.current = setInterval(async () => {
      if (timer === 0) {
        setTimeStart(0);
        clearInterval(intervalRef.current);
        await mediaRecorderRef.current.stopRecording();
        const blob = await mediaRecorderRef.current.getBlob();
        const file = new File([blob], "resonus.mp4", {
          type: "video/mp4",
        });
        dispatch({ type: "ADD_FILE", payload: file });
        dispatch({ type: "ADD_URL", payload: URL.createObjectURL(file) });
        navigate("/upload");
      } else {
        setTimeStart((prev) => --prev);
        timer = --timer;
      }
    }, 1000);
  };

  return (
    <>
      <div className={`w-full relative ${screens > 1 ? "pt-[75%]" : "pt-[133.33%]"} overflow-hidden`}>
        <Webcam
          mirrored={status}
          onUserMedia={() => setIsReady(true)}
          videoConstraints={
            screens < 1
              ? {
                  facingMode: status ? "user" : "environment",
                  // frameRate: { ideal: 5, max: 15 },
                }
              : {
                  facingMode: status ? "user" : "environment",
                  // frameRate: { ideal: 5, max: 15 },
                }
          }
          ref={webcamRef}
          className="absolute top-0 w-full"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          {screens > 1 ? (
            <img
              className="w-[95%]"
              alt=""
              src={`/assets/icons/personPC.svg`}
            />
          ) : (
            <img
              className="w-full"
              alt=""
              src={`/assets/icons/person.svg`}
            />
          )}
        </div>
      </div>
      <div className="text-white w-full h-36 lg:h-[310px] flex flex-col justify-center items-center relative">
        {timeStart === -1 ? (
          <div className="text-xs lg:text-base">3秒の動画をアップロードしてください</div>
        ) : (
          <div className="text-[34px] lg:text-[50px]">撮影時間</div>
        )}
        {timeStart === -1 ? (
          <img
            src="/assets/icons/camera-action.svg"
            alt=""
            className="w-[68px] h-[68px] 2xl:w-32 2xl:h-32 my-3 lg:my-6 cursor-pointer"
            onClick={isReady ? handleStart : () => {}}
          />
        ) : (
          <div className="text-[34px] lg:text-[50px]">{timeStart}秒</div>
        )}
        <div className="text-[10px] lg:text-base font-normal">※写真は診断のみに使用されます。</div>
        <div className="text-[10px] lg:text-base font-normal">その他の目的のためには使用されません。</div>
        {(isMobile || isTablet) && timeStart === -1 && (
          <div
            className={cx(
              "w-[46px] h-[46px] rounded-full bg-[#BEDDE4] absolute flex justify-center items-center",
              css`
                top: calc(50% - 23px);
                right: 20px;
              `,
            )}
            onClick={() => setStatus((prev) => !prev)}
          >
            <img
              src="/assets/icons/toggle.svg"
              alt=""
              className="w-[27px]"
            />
          </div>
        )}
      </div>
    </>
  );
};
export default Camera;
