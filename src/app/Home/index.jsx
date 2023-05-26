import { css, cx } from "@emotion/css";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/common/button";
import { typeFiles } from "../../utils/constants/typeFile";
import { useDispatch } from "../../utils/store/hooks";

const Home = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const navigate = useNavigate();
  const onChange = (e) => {
    const typeFile = e.target.value.split(".")[e.target.value.split(".").length - 1];
    if (typeFiles.includes(typeFile) && e.target.files?.length >= 1) {
      dispatch({ type: "ADD_FILE", payload: e.target.files[0] });
      const URL = window.URL || window.webkitURL;
      const fileURL = URL.createObjectURL(e.target.files[0]);
      dispatch({ type: "ADD_URL", payload: fileURL });
      navigate("/upload");
    } else {
      toast.error("The file is not in the correct format");
    }
  };
  return (
    <div className="w-full h-full my-14">
      <div className="w-full relative">
        <div className="w-[50%] bg-primaryColor h-[500px] absolute top-[62px] left-0 z-0 hidden 2xl:block" />
        <div className="w-[50%] bg-pinkColor h-[500px] absolute top-[62px] right-0 z-0 hidden 2xl:block" />
        <div className="w-[686px] h-[624px] bg-white hidden 2xl:block py-20 z-20 rounded-xl border-[10px] border-[#efefef] mx-auto relative">
          <div className="w-full h-full flex flex-col justify-center items-center rounded-xl">
            <img
              src="/assets/images/upload.png"
              alt=""
              className="w-[354px] h-[174px]"
            />
            <div
              className={cx(
                "w-[112px] h-[92px]",
                css`
                  background-image: url("/assets/icons/upload.svg");
                  background-size: 100% 100%;
                  background-repeat: no-repeat;
                `,
              )}
            >
              <input
                className={css`
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                  opacity: 0;
                `}
                ref={inputRef}
                type="file"
                onChange={onChange}
                accept="video/*"
              />
            </div>
            <div className="text-2xl mt-6 text-blackText font-bold">ドロップしてファイルを添付する</div>
            <div
              className="text-xl text-primaryColor mt-3 cursor-pointer font-bold"
              onClick={() => inputRef.current.click()}
            >
              ファイルを選択する
            </div>
          </div>
        </div>
        <Link
          to="/camera/start"
          className={cx(
            "hidden 2xl:flex max-w-[450px] w-full h-[100px] rounded-full items-center justify-center text-white mt-5 lg:mt-8 mx-auto",
            css`
              background-image: linear-gradient(to right, #97c9d5 0%, #b7d7df 50%, #d3e4e8 100%);
            `,
          )}
        >
          <img
            src="/assets/icons/camera.svg"
            alt=""
            className="mr-3 w-[29px]"
          />
          <div className="text-xl">カメラで撮る</div>
        </Link>
      </div>
      <div className="w-[90%] bg-white 2xl:hidden pt-14 z-40 rounded-xl border-[10px] border-[#efefef] mx-auto">
        <div
          className={cx(
            "w-full overflow-auto",
            css`
              max-height: ${window.screen.height * 0.9 - 60}px;
            `,
          )}
        >
          <div className="flex flex-col justify-center items-center px-5 sm:px-0 pb-5">
            <img
              src="/assets/images/upload_mobile.png"
              alt=""
              className="w-[70%] sm:w-[75%]"
            />
            <Button
              className={cx(
                "w-[88%] h-[55px] sm:h-[70px] rounded-full flex items-center justify-center text-white mt-[30px]",
                css`
                  background-image: linear-gradient(to right, #ffdddb, #f7b4b0);
                `,
              )}
              onClick={() => inputRef.current.click()}
            >
              <img
                src="/assets/icons/file.svg"
                alt=""
                className="mr-3 w-[18px]"
              />
              <div>アルバムを開く</div>
            </Button>
            <Link
              className={cx(
                "w-[88%] h-[55px] sm:h-[70px] rounded-full flex items-center justify-center text-white mt-[20px]",
                css`
                  background-image: linear-gradient(to right, #97c9d5, #d3e4e8);
                `,
              )}
              to="camera/start"
            >
              <img
                src="/assets/icons/camera.svg"
                alt=""
                className="mr-3 w-[18px]"
              />
              <div>カメラで撮る</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
