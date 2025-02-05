import { useEffect, useState } from "react";

const useApi  = () =>{

  const [response , setResponse] = useState({data : null , isLoading : false});

  const api = {
    post : (data) =>{
      console.log('Hook data' + {data});
      setResponse({data : null , isLoading: true})
      setTimeout(() => {
        setResponse({data : {message : 'OK' , code : 200}, isLoading : false  })
      }, 5000);
    }
  }
  return[response , api]
}

function App() {
  const [response , api] = useApi();

  useEffect(() =>{
    if(!response.isLoading)
    {
      console.log(response.data)
    }
  },[response])

  const handler = (event) =>{
    // event.priventDefauult();
    api.post({name : 'Malith'});
  }

  return (
    <div>
      <button onClick={handler}>Click</button>
    </div>
  );
}

export default App;
