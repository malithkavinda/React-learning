import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div>
      <h1>NotFound</h1>
      <Link to={'/'}>Go to home page</Link>
    </div>
  );
}
export default Notfound;
