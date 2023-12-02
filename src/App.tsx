import { useEffect } from "react";
import "./App.css";
import { socket } from "./socket";
import axios from "axios";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Client Connected");
    });

    socket.on("message", (data) => {
      console.log("data", data);
    });
  }, []);

  const handleBtn = async () => {
    const headers = {
      "Content-Type": "application/json",
      "Socket-Id": `${socket.id}`,
    };
    console.log(socket.id);
    await axios.post(
      "http://localhost:5000/groupchat/user/updateSocket",
      {},
      {
        headers: headers,
      }
    );
  };
  return (
    <div className="App">
      <button onClick={handleBtn}>Update</button>
    </div>
  );
}

export default App;
