import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Videos from "./Pages/Videos/Videos";
import Playlist from "./Pages/Playlist/Playlist";
import Liked from "./Pages/Liked/Liked";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Videos /> */}
      <Playlist />
      {/* <Liked/> */}
    </div>
  );
}

export default App;
