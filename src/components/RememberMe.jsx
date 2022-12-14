import { useContext } from "react";
import { AppContext } from "../context";
import { LANGUAGES } from "../constants";

const RememberMe = ({ remember, setRemember }) => {
  const { state } = useContext(AppContext);

  return (
    <div className="form-group form-check">
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        defaultChecked={remember}
        onChange={() => setRemember(!remember)}
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-500 checked:border-indigo-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
      />
      <label className="form-check-label inline-block" htmlFor="checkbox">
        {LANGUAGES[state.lang].Auth.RememberMe}
      </label>
    </div>
  );
};

export default RememberMe;
