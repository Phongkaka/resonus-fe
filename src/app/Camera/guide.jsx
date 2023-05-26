import { Link } from "react-router-dom";
import { useSelector } from "../../utils/store/hooks";

const Guide = () => {
  const screens = useSelector((state) => state.screens);
  return (
    <>
      <div className={`w-full relative ${screens > 1 ? "pt-[75%]" : "pt-[133.33%]"} overflow-hidden bg-[#efefef]`}>
        {screens > 1 ? (
          <img
            className="w-[95%] absolute top-0 left-[2.5%]"
            alt=""
            src={`/assets/icons/personPC.svg`}
          />
        ) : (
          <img
            className="w-full absolute top-0"
            alt=""
            src={`/assets/icons/person.svg`}
          />
        )}
      </div>
      <div className="w-full h-36 lg:h-[310px] bg-primaryColor flex flex-col justify-center items-center">
        <div className="text-white text-xl">正面を向いて撮影してください</div>
        <Link
          to="/camera"
          className="h-16 w-16 2xl:w-32 2xl:h-32 rounded-full bg-white text-primaryColor flex justify-center items-center mt-3 2xl:mt-8 cursor-pointer text-2xl"
        >
          次へ
        </Link>
      </div>
    </>
  );
};
export default Guide;
