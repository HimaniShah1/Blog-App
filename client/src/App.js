import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserContextProvider from "./contexts/UserContext";
import BlogPage from "./pages/BlogPage";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <>
    <UserContextProvider>
    <Navbar />
      <Routes>
        <Route path="/" element= {<Home />} /> 
        <Route path="/addblog" element= {<AddBlog />} /> 
        <Route path="/login" element= {<Login />} />
        <Route path="/register" element= {<Register />} />
        <Route path="/post/:id" element={<BlogPage />} />
        <Route path='/edit/:id' element={<EditBlog/>} />
      </Routes>
    </UserContextProvider>
      
    </>
  );
}

export default App;
