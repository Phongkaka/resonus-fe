import { css, cx } from "@emotion/css";
import { useSelector } from "../../utils/store/hooks";
import CommonUpload from "../../components/layout/commonUpload";
const Upload = () => {
  const url = useSelector((state) => state.url);
  return (
    <div
      className={cx(
        "w-full h-full bg-white overflow-auto",
        css`
          background-image: url(/assets/icons/bg_modal.svg);
          background-size: cover;
        `,
      )}
    >
      <div className="max-w-[686px] w-[95%] mx-auto h-full flex">
        <div className="w-full py-10 rounded-lg border-[10px] border-[#EFEFEF] lg:border-0 bg-white lg:bg-transparent my-auto">
          <div className="px-[3%] lg:px-0">
            <div className="px-[8%] lg:px-0">
              <video
                className={cx(
                  "w-full rounded-lg",
                  css`
                    @media (min-width: 768px) {
                       {
                        box-shadow: 0px 0px 8px 4px #00000060;
                      }
                    }
                  `,
                )}
                src={url}
                controls
              />
            </div>
            <CommonUpload />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upload;
