import { useContext } from "react";
import Context from "./context";
export const useSelector = (callback) => {
  const [state, _] = useContext(Context);
  return callback ? callback(state) : state;
};

export const useDispatch = () => {
  const [_, dispatch] = useContext(Context);
  return dispatch;
};

export const useContextCustom = (callback) => {
  const [state, dispatch] = useContext(Context);
  return [callback(state), dispatch];
};
