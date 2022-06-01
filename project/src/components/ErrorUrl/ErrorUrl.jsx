import { Link } from "react-router-dom";
import "./ErrorUrl.css";

const ErrorUrl = () => {
  return (
    <div id="errorUrl">
      <h1 className="title">Sorry there is nothing here!</h1>
      <Link to="/" className="home-button">
        Home
      </Link>
    </div>
  );
};

export default ErrorUrl;
