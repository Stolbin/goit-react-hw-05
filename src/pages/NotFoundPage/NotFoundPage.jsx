import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Oooops the page was not found</p>

      <Link to={`/`}>Back to home page</Link>
    </div>
  );
};

export default NotFound;
