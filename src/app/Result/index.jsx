import { css, cx } from "@emotion/css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/button";
import { result, summary } from "../../utils/constants/result";
import env from "../../utils/helper/env";
import { useSelector } from "../../utils/store/hooks";

const Results = () => {
  const [page, setPage] = useState("analysis");
  const response = useSelector((state) => state.response);
  const navigate = useNavigate();
  useEffect(() => {
    response.eyeSize_4ypes || navigate("/");
  }, []);
  console.log(response);
  return (
    <div className="mt-[30px] 2xl:mt-[92px]">
      <img
        src="/assets/icons/result.svg"
        alt=""
        className="w-[200px] 2xl:w-[288px] mx-auto"
      />
      <div className="w-full mt-1 2xl:mt-2 text-center text-blackText text-xs 2xl:text-base">顔診断結果</div>
      <div className="mt-[30px] 2xl:mt-[92px] w-full flex justify-center h-[61px] 2xl:h-[98px] px-5 2xl:px-0">
        <Button
          className={cx(
            `rounded-full mr-[15px] h-full w-[492px] 2xl:rounded-lg ${
              page === "analysis" ? "bg-primaryColor text-white" : " border-[3px] border-primaryColor"
            } 2xl:text-[26px]`,
            css`
              box-shadow: 0px 1px 3px 2px #07070722;
            `,
          )}
          onClick={() => setPage("analysis")}
        >
          分析タイプ
        </Button>
        <Button
          className={cx(
            `rounded-full mr-[15px] h-full w-[492px] 2xl:rounded-lg ${
              page === "details" ? "bg-primaryColor text-white" : " border-[3px] border-primaryColor"
            } 2xl:text-[26px]`,
            css`
              box-shadow: 0px 1px 3px 2px #07070722;
            `,
          )}
          onClick={() => setPage("details")}
        >
          詳細
        </Button>
      </div>
      <div className="mt-[30px] 2xl:mt-[80px] w-full flex flex-col 2xl:flex-row items-center 2xl:items-start justify-between relative px-0 xl:px-[10%] text-sm 2xl:text-[20px]">
        <div className="w-[50%] bg-primaryColor h-[500px] absolute top-[100px] left-0 z-0 hidden 2xl:block" />
        <div className="w-[50%] bg-pinkColor h-[500px] absolute top-[100px] right-0 z-0 hidden 2xl:block" />
        <div className="w-[100%] px-[60px] 2xl:w-[33%] 2xl:px-0 z-20 mb-14">
          <div
            className={cx(
              "w-full p-2 flex justify-center items-center bg-white rounded-lg",
              css`
                box-shadow: 0px 0px 2px 1px #07070740;
                @media (min-width: 1280px) {
                  box-shadow: 0px 0px 4px 2px #07070740;
                }
              `,
            )}
          >
            <div
              className={`${
                page === "analysis" ? "bg-bgPink px-[10%] py-[16%]" : "bg-white px-[3%] py-[5%]"
              } w-full flex justify-center items-center relative`}
            >
              <img
                src={
                  page === "analysis"
                    ? `/assets/images/illustrators/${response.eyeSize_4ypes}-${response.eyeDegree_3type}-${response.irisBalance_3type}-${response.faceShape_5type}.png`
                    : `${env.resultFolder}${response.imagePath}`
                }
                alt=""
                className={`${page === "analysis" ? "w-[80%]" : "bg-white"}`}
              />
              {page === "analysis" && (
                <>
                  <img
                    src="/assets/icons/net.svg"
                    alt=""
                    className="absolute w-[90%] left-[5%] top-[5%]"
                  />
                  {response.faceBalace_2type === 2 && (
                    <div className="absolute top-0 bottom-0 left-[50%] right-0 bg-black opacity-[8%]" />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        {page === "analysis" ? (
          <div
            className={cx(
              "w-[100%] px-5 2xl:w-[64%] 2xl:p-2 flex justify-center items-center z-10 bg-white rounded-lg",
              css`
                @media (min-width: 1280px) {
                  box-shadow: 0px 0px 4px 2px #07070740;
                }
              `,
            )}
          >
            <div className="2xl:bg-bgBlue w-full items-center pl-5 2xl:p-[8%]">
              <div className="w-full relative px-[18px] py-7 border-2 border-primaryColor rounded-lg">
                <div className="border-2 bg-white border-primaryColor rounded- rounded-full absolute top-[-24px] left-[-24px] p-1">
                  <img
                    src="/assets/icons/eye.svg"
                    alt=""
                    className="w-[78px] h-[78px] 2xl:w-[82px] 2xl:h-[82px]"
                  />
                </div>
                <div className="ml-14 2xl:ml-20 text-[19px] 2xl:text-[22px]">
                  <span className="text-[26px] 2xl:text-[30px]">目</span>の分析結果
                </div>
                <div className="mt-[35px] w-full flex">
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] ${
                      response.eyeSize_4ypes === 1
                        ? "bg-primaryColor text-white"
                        : "border-l-2 border-r-[1px] border-y-2 border-primaryColor"
                    } rounded-l-[46px] flex justify-center items-center p-1 2xl:p-2`}
                  >
                    デカ目
                  </div>
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] flex justify-center items-center ${
                      response.eyeSize_4ypes === 2
                        ? "bg-primaryColor text-white"
                        : "border-y-2 border-x-[1px] border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    普通目
                  </div>
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] flex justify-center items-center ${
                      response.eyeSize_4ypes === 3
                        ? "bg-primaryColor text-white"
                        : "border-y-2 border-x-[1px] border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    ネム目
                  </div>
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex justify-center ${
                      response.eyeSize_4ypes === 4
                        ? "bg-primaryColor text-white"
                        : "border-l-[1px] border-r-2 border-y-2 border-primaryColor"
                    } items-center p-1 2xl:p-2`}
                  >
                    高度眼瞼下垂
                  </div>
                </div>
                <div className="mt-[25px] w-[85%] 2xl:w-3/4 flex">
                  <div
                    className={`w-1/3 min-h-[72px] 2xl:min-h-[92px] ${
                      response.eyeDegree_3type === 1
                        ? "bg-primaryColor text-white"
                        : "border-l-2 border-r-[1px] border-y-2 border-primaryColor"
                    } rounded-l-[46px] flex justify-center items-center p-1 2xl:p-2`}
                  >
                    つり目
                  </div>
                  <div
                    className={`w-1/3 min-h-[72px] 2xl:min-h-[92px] flex justify-center items-center ${
                      response.eyeDegree_3type === 2
                        ? "bg-primaryColor text-white"
                        : "border-y-2 border-x-[1px] border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    普通目
                  </div>
                  <div
                    className={`w-1/3 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex justify-center items-center ${
                      response.eyeDegree_3type === 3
                        ? "bg-primaryColor text-white"
                        : "border-l-[1px] border-r-2 border-y-2 border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    たれ目
                  </div>
                </div>
                <div className="mt-[25px] w-[85%] 2xl:w-3/4 flex">
                  <div
                    className={`w-1/3 min-h-[72px] 2xl:min-h-[92px] ${
                      response.irisBalance_3type === 1
                        ? "bg-primaryColor text-white"
                        : "border-l-2 border-r-[1px] border-y-2 border-primaryColor"
                    } rounded-l-[46px] flex justify-center items-center border-l-2 border-r-[1px] border-y-2 border-primaryColor p-1 2xl:p-2`}
                  >
                    寄り目
                  </div>
                  <div
                    className={`w-1/3 min-h-[72px] 2xl:min-h-[92px] flex justify-center items-center ${
                      response.irisBalance_3type === 2
                        ? "bg-primaryColor text-white"
                        : "border-y-2 border-x-[1px] border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    普通目
                  </div>
                  <div
                    className={`w-1/3 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex justify-center items-center ${
                      response.irisBalance_3type === 3
                        ? "bg-primaryColor text-white"
                        : "border-l-[1px] border-r-2 border-y-2 border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    はなれ目
                  </div>
                </div>
              </div>
              <div className="w-full relative mt-[60px] px-5 py-7 border-2 border-primaryColor">
                <div className="w-[90px] h-[90px] 2xl:w-[96px] 2xl:h-[96px] border-2 bg-white border-primaryColor rounded-full absolute top-[-24px] left-[-24px] p-1 flex justify-center items-center">
                  <img
                    src="/assets/images/girl_icon.png"
                    alt=""
                    className="w-[43px]"
                  />
                </div>
                <div className="ml-20 text-[22px]">
                  <span className="text-[30px]">輪郭</span>の詳細結果
                </div>
                <div className="mt-[35px] w-full flex">
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] ${
                      response.faceShape_5type === 1
                        ? "bg-primaryColor text-white"
                        : "border-l-2 border-r-[1px] border-y-2 border-primaryColor"
                    } rounded-l-[46px] flex justify-center items-center p-1 2xl:p-2`}
                  >
                    四角顔
                  </div>
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] flex justify-center items-center ${
                      response.faceShape_5type === 2
                        ? "bg-primaryColor text-white"
                        : "border-l-[1px] border-r-2 border-y-2 border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    三角顔
                  </div>
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] flex justify-center items-center ${
                      response.faceShape_5type === 3
                        ? "bg-primaryColor text-white"
                        : "border-l-[1px] border-r-2 border-y-2 border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    丸顔
                  </div>
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] flex justify-center items-center ${
                      response.faceShape_5type === 4
                        ? "bg-primaryColor text-white"
                        : "border-l-[1px] border-r-2 border-y-2 border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    縦長顔
                  </div>
                  <div
                    className={`w-1/4 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex justify-center items-center ${
                      response.faceShape_5type === 5
                        ? "bg-primaryColor text-white"
                        : "border-l-[1px] border-r-2 border-y-2 border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    卵顔
                  </div>
                </div>
                <div className="mt-[25px] w-full 2xl:w-1/2 flex">
                  <div
                    className={`w-1/2 ${
                      response.faceBalace_2type === 1
                        ? "bg-primaryColor text-white"
                        : "border-l-2 border-r-[1px] border-y-2 border-primaryColor"
                    } min-h-[72px] 2xl:min-h-[92px] rounded-l-[46px] flex justify-center items-center`}
                  >
                    左右差のない
                  </div>
                  <div
                    className={`w-1/2 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex justify-center items-center ${
                      response.faceBalace_2type === 2
                        ? "bg-primaryColor text-white"
                        : "border-l-2 border-r-[1px] border-y-2 border-primaryColor"
                    } p-1 2xl:p-2`}
                  >
                    左右差のある
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={cx(
              "w-[100%] px-5 2xl:w-[64%] 2xl:p-2 flex justify-center items-center z-10 bg-white rounded-lg",
              css`
                @media (min-width: 1280px) {
                  box-shadow: 0px 0px 4px 2px #07070740;
                }
              `,
            )}
          >
            <div className="2xl:bg-bgBlue w-full items-center pl-5 2xl:p-[8%]">
              <div className="w-full relative px-[18px] py-7 border-2 border-primaryColor rounded-lg">
                <div className="border-2 bg-white border-primaryColor rounded- rounded-full absolute top-[-24px] left-[-24px] p-1">
                  <img
                    src="/assets/icons/eye.svg"
                    alt=""
                    className="w-[78px] h-[78px] 2xl:w-[82px] 2xl:h-[82px]"
                  />
                </div>
                <div className="ml-14 2xl:ml-20 text-[22px]">
                  <span className="text-[30px]">目</span>の分析結果
                </div>
                <div className="mt-[35px] w-full 2xl:w-3/4 flex">
                  <div className="w-1/4 2xl:w-1/3 min-h-[72px] 2xl:min-h-[92px] bg-primaryColor text-white rounded-l-[46px] flex justify-center items-center border-l-2 border-r-[1px] border-y-2 border-primaryColor">
                  {summary[1][response.eyeSize_4ypes]}
                  </div>
                  <div className="w-3/4 2xl:w-2/3 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex items-center border-l-[1px] border-r-2 border-y-2 border-primaryColor px-[15px] 2xl:px-[50px]">
                    {result[1][response.eyeSize_4ypes]}
                  </div>
                </div>
                <div className="mt-[35px] w-full flex">
                  <div className="w-1/4 min-h-[72px] 2xl:min-h-[92px] bg-primaryColor text-white rounded-l-[46px] flex flex-col justify-center items-center border-l-2 border-r-[1px] border-y-2 border-primaryColor">
                  {summary[2][response.eyeDegree_3type]}
                  </div>
                  <div className="w-3/4 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex flex-col justify-center border-l-[1px] border-r-2 border-y-2 border-primaryColor px-[15px] 2xl:px-[50px]">
                    <div>両内眼角点を結んだ延長戦より</div>
                    <div>内眼角点と外眼角点を結んだ線が{result[2][response.eyeDegree_3type]}度以</div>
                  </div>
                </div>
                <div className="mt-[35px] w-full flex">
                  <div className="w-1/4 min-h-[72px] 2xl:min-h-[92px] bg-primaryColor text-white rounded-l-[46px] flex flex-col justify-center items-center border-l-2 border-r-[1px] border-y-2 border-primaryColor">
                    {summary[3][response.irisBalance_3type]}
                  </div>
                  <div className="w-3/4 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex flex-col justify-center border-l-[1px] border-r-2 border-y-2 border-primaryColor px-[15px] 2xl:px-[50px]">
                    {result[3][response.irisBalance_3type]}
                  </div>
                </div>
              </div>
              <div className="w-full relative mt-[60px] px-5 py-7 border-2 border-primaryColor">
                <div className="w-[90px] h-[90px] 2xl:w-[96px] 2xl:h-[96px] border-2 bg-white border-primaryColor rounded-full absolute top-[-24px] left-[-24px] p-1 flex justify-center items-center">
                  <img
                    src="/assets/images/girl_icon.png"
                    alt=""
                    className="w-[43px]"
                  />
                </div>
                <div className="ml-20 text-[19px] 2xl:text-[22px]">
                  <span className="text-[26px] 2xl:text-[30px]">輪郭</span>の詳細結果
                </div>
                <div className="mt-[35px] min-w-[160px] w-1/3 2xl:w-1/5 flex">
                  <div className="w-full bg-primaryColor text-white min-h-[72px] 2xl:min-h-[92px] rounded-[46px] flex justify-center items-center">
                    {result[4][response.faceShape_5type]}
                  </div>
                </div>
                <div className="mt-[35px] w-full min-h-[72px] 2xl:min-h-[92px] flex">
                  <div className="w-1/4 min-h-[72px] 2xl:min-h-[92px] bg-primaryColor text-white rounded-l-[46px] flex justify-center items-center border-l-2 border-r-[1px] border-y-2 border-primaryColor p-1 2xl:p-2">
                  {summary[5][response.faceBalace_2type]}
                  </div>
                  <div className="w-3/4 min-h-[72px] 2xl:min-h-[92px] rounded-r-[46px] flex flex-col justify-center border-l-[1px] border-r-2 border-y-2 border-primaryColor px-[15px] 2xl:px-[50px]">
                    {result[5][response.faceBalace_2type]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Results;
