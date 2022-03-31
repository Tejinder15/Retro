import {Home,Login,Signup,Videos,Liked,Playlist, Watch,WatchLater,History} from "./Pages";
import {Routes,Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
      </Routes>
    </div>
  );
}

export default App;
