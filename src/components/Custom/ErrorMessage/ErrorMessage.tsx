import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <div className={css.errMsg}>
      Oups!
      <br />
      <strong>{errorMessage}</strong>
    </div>
  );
};

export default ErrorMessage;
