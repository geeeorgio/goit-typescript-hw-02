import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <BeatLoader color="#666161" size={30} />
    </div>
  );
};

export default Loader;
