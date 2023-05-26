import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[70px] 2xl:h-[140px] flex justify-between items-center px-5 2xl:px-12">
      <Link to="https://face.resonusmd.co.jp">
        <img
          src="/assets/icons/logo.svg"
          alt=""
          className="h-[55px] w-[58px] 2xl:h-[120px] 2xl:w-[127px]"
        />
      </Link>
    </div>
  );
};
export default Header;
