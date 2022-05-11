import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./layouts/Default";
import Screen1 from "./containers/BlogList";
import BlogPost from "./containers/BlogPage";
import AlbumList from "./containers/AlbumList";
import Gallery from "./containers/AlbumPage";
import Home from "./containers/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />}/>
          <Route path="/blog-list" element={<Screen1 />}/>
          <Route path="/album-list" element={<AlbumList />}/>
          <Route path="/blog-list/:Blogid" element={<BlogPost />}/>
          <Route path="/album-list/:Albumid" element={<Gallery />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
