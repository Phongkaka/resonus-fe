import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { isTablet, isMobile } from "react-device-detect";
import { useContextCustom } from "../../utils/store/hooks";

const CameraLayout = () => {
  const [screens, dispatch] = useContextCustom((state) => state.screens);
  useEffect(() => {
    dispatch({ type: "ROTATE_SCREENS", payload: window.innerWidth / window.outerHeight });
    const action = (event) => {
      if (event.target.screen.orientation.angle === 0) {
        dispatch({ type: "ROTATE_SCREENS", payload: 0.5 });
      } else {
        dispatch({ type: "ROTATE_SCREENS", payload: 2 });
      }
    };
    if (isTablet || isMobile) {
      window.addEventListener("orientationchange", action);
    }
    return () => {
      if (isTablet || isMobile) {
        window.removeEventListener("orientationchange", action);
      }
    };
  }, []);
  return (
    <div className="w-full h-full overflow-auto bg-black">
      <div className={`max-w-[686px] ${screens > 1 && "min-h-[800px]"} w-full h-full mx-auto`}>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default CameraLayout;
