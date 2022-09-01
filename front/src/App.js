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

  return (
    <div className="App">
      <div className="text-center mt-10 text-4xl font-bold">{message}</div>
      <div className="text-center mt-5">
        <button className="btn">바보면 누르세요!</button>
      </div>
    </div>
  );
}
export default App;
