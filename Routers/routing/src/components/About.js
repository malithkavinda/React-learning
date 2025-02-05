import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function About() {

  useEffect(() => {
    fetchUser();
  },[]);

  const [user, setUser] = useState({});
  const { id } = useParams(); // 'id' is extracted from the URL


  const fetchUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error : ${response.statusText}`);
        }
        return response.json();
      })
      .then((json) => setUser(json))
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1>About page</h1>
      <div>
        {user.id}
        {user.name}
      </div>
    </div>
  );
}

export default About;
