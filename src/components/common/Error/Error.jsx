import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p>We are sorry, but the page you were looking for doesnt exist.</p>
      <p>Please check the URL or return to the <Link to="/">homepage</Link>.</p>
    </div>
  )
}

export default Error