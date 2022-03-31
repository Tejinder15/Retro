import {Home,Login,Signup,Videos,Liked,Playlist, Watch,WatchLater,History} from "./Pages";
import { ProtectedRoute } from "./Routes/protected-route";
import {Routes,Route} from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock" element={<Mockman/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
