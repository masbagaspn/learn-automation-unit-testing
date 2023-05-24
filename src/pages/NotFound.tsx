import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to="/" className="hidden">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
