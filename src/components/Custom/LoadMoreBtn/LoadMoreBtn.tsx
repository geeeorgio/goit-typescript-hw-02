import { RefreshCcw } from "lucide-react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load More
      <RefreshCcw size={18} />
    </button>
  );
};

export default LoadMoreBtn;
