import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-center">Opps !!!</h1>
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default ErrorPage;
