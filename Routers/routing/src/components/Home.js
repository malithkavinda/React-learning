import { useNavigate } from "react-router-dom";

function Home() {

const navigate = useNavigate();

  const handler = () => {
     navigate('/users')
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handler}>Click</button>
    </div>
  );
}
export default Home;
