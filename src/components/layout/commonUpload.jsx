import { css, cx } from "@emotion/css";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/button";
import { postAPI } from "../../utils/helper/axios";
import { useContextCustom } from "../../utils/store/hooks";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const CommonUpload = () => {
  const [isLoading, setIsLoading] = useState();
  const [file, dispatch] = useContextCustom((state) => state.file);
  const controller = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!file) {
      navigate("/");
    }
  }, [file]);
  const submit = (cb) => {
    cb(true);
    controller.current = new AbortController();
    const formData = new FormData();
    formData.append("file", file, `${v4()}.mp4`);
    postAPI("ai-response/upload-file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      signal: controller.current.signal,
    })
      .then((res) => {
        cb(false);
        dispatch({ type: "ADD_RESPONSIVE", payload: res.data });
        toast.success("アップロード成功しました");
        navigate("/result");
      })
      .catch((error) => {
        toast.error(error.data?.message ? error.data?.message : "AI分析途中エラーがありました。");
        cb(false);
      });
  };
  return (
    <div className="w-full lg:w-[85%] mx-auto">
      <Button
        className={cx(
          "max-w-[400px] w-full h-[55px] sm:h-[70px] rounded-full flex items-center justify-center text-white mt-5 lg:mt-8 mx-auto",
          css`
            background-image: linear-gradient(to right, #93ddef 0%, #9bd7e5 35%, #fa9dc2 100%);
          `,
        )}
        onClick={() => {
          submit(setIsLoading);
        }}
      >
        <img
          src="/assets/icons/search.svg"
          alt=""
          className="mr-3 w-[22px]"
        />
        <div>診断する</div>
      </Button>
      <Link
        className="max-w-[400px] w-full h-[55px] sm:h-[70px] rounded-full flex items-center justify-center text-white mt-3 bg-bgGray mx-auto"
        to="/camera/start"
      >
        <img
          src="/assets/icons/camera.svg"
          alt=""
          className="mr-3 w-[22px]"
        />
        <div>撮り直す</div>
      </Link>
      <Link
        className="max-w-[400px] w-full h-[55px] sm:h-[70px] rounded-full flex items-center justify-center text-white mt-3 bg-bgGray mx-auto"
        to="/"
      >
        <img
          src="/assets/icons/re_upload_file.svg"
          alt=""
          className="mr-3 w-[30px]"
        />
        <div>ファイルを選び直す</div>
      </Link>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#33333374]">
          <div className="max-w-[350px] 3xl:max-w-[475px] w-[75%] h-full mx-auto flex flex-col justify-evenly">
            <div className="relative w-full">
              <img
                src="/assets/icons/spin.svg"
                alt=""
                className="w-full animate-spin-slow"
              />
              <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] flex flex-col justify-center items-center">
                <div className="text-white text-xs lg:text-[16px] 3xl:text-[19px]">アップロード中</div>
                <img
                  src="/assets/icons/upload_loading.svg"
                  alt=""
                  className="w-[25%] h-[25%] mt-[7%]"
                />
              </div>
            </div>
            <div className="w-full text-center">
              <div className="text-white">アップロード中</div>
              <div
                className="w-[70px] h-[70px] lg:w-[104px] lg:h-[104px] rounded-full flex justify-center items-center bg-white font-normal mx-auto mt-4 lg:mt-6"
                onClick={() => {
                  controller.current.abort();
                  controller.current = null;
                  setIsLoading(false);
                }}
              >
                中止
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonUpload;
