import { useEffect, useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error : ${response.statusText}`);
        }
        return response.json();
      })
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const eventHandler = (recode) => {
    navigate(`/users/user/${recode.id}`);
    console.log(recode);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "More details",
      key: "id",
      render: (_, recode) => (
        <button onClick={() => eventHandler(recode)}>Click me</button>
      ),
    },
  ];

  return (
    <div>
      <h1>User page</h1>
      <Table dataSource={users} columns={columns} />;
    </div>
  );
}
export default Users;
