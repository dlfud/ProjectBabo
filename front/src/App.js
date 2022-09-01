import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const BackData = await axios({
        url: "http://localhost:8085/",
        method: "GET",
      });
      setMessage(BackData.data);
    };

    getData();
  }, []);

  return <div className="App">{message}</div>;
}
export default App;
