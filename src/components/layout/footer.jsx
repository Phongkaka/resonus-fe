import { css, cx } from "@emotion/css";

const Footer = () => {
  return (
    <div className="w-full mt-[30px] 2xl:mt-[120px]">
      <img
        src="/assets/images/girl_footer.png"
        alt=""
        className="w-full 2xl:hidden"
      />
      <div
        className={cx(
          "2xl:hidden w-full h-[92px] flex flex-col justify-center items-center text-xl",
          css`
            background-image: linear-gradient(to right, #fff, #f7b4b0);
          `,
        )}
      >
        <div className="flex w-[270px] items-center">
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#FFCBC7]">
            <img
              src="/assets/icons/pink_mail.svg"
              alt=""
              className="w-[16px]"
            />
          </div>
          <div className="ml-3 text-white leading-[30px] ryumin">info@resonus.com</div>
        </div>
        <div className="flex w-[270px] items-center mt-3">
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#FFCBC7]">
            <img
              src="/assets/icons/pink_phone.svg"
              alt=""
              className="w-[16px]"
            />
          </div>
          <div className="ml-3 text-white leading-[30px] ryumin">03-0000-0000</div>
        </div>
      </div>
      <div className="w-full font-bold">
        <img
          src="/assets/icons/logo.svg"
          alt=""
          className={cx(
            "w-[150px] mx-auto mt-5 2xl:hidden",
            css`
              svg {
                width: 100%;
              }
            `,
          )}
        />
        <div className="w-full text-center hidden 2xl:block text-xl tracking-[4px]">ResonusMD株式会社</div>
        <div className="mt-4 w-full text-center text-sm font-normal tracking-[.3em]">〒105-0004</div>
        <div className="mt-2 w-full text-center text-sm font-normal tracking-[.3em]">東京都新橋区住吉町15番12号</div>
        <div className="mt-4 hidden 2xl:flex justify-center items-center">
          <div className="flex items-center">
            <img
              src="/assets/icons/phone.svg"
              alt=""
              className={cx(
                "w-[30px]",
                css`
                  svg {
                    width: 100%;
                  }
                `,
              )}
            />
            <div className="tracking-[4px] ml-3 text-lg">03-0000-0000</div>
          </div>
          <div className="flex items-center ml-7">
            <img
              src="/assets/icons/mail.svg"
              alt=""
              className={cx(
                "w-[30px]",
                css`
                  svg {
                    width: 100%;
                  }
                `,
              )}
            />
            <div className="tracking-[4px] ml-3 text-lg">info@resonus.com</div>
          </div>
        </div>
        <div className="w-[650px] h-16 hidden 2xl:flex justify-between items-center border-t-[1px] border-primaryColor mx-auto mt-12 text-lg font-normal">
          <div>TOP</div>
          <div>NEWS</div>
          <div>ABOUT</div>
          <div>SERVICE</div>
          <div>CONTACT</div>
          <div>PRIVACY POLICY</div>
        </div>
        <div className="px-5 mt-[30px] 2xl:hidden">
          <div className="w-full h-[70px] rounded-full bg-[#97C9D5] text-white flex justify-center items-center">
            <div className="tracking-[0.15em]">公式サイトはこちら</div>
            <img
              src="/assets/icons/arrow.svg"
              alt=""
              className="ml-3 w-[11px] h-[11px]"
            />
          </div>
        </div>
        <div className="mt-[30px] h-14 bg-blackText text-xs flex justify-center items-center georgia">
          Copyright © 2023 ResonusMD Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
