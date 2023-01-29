import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import ItemList from "./components/ItemList";
import AddUser from "./components/AddUser";
import AddItem from "./components/AddItem";
import EditUser from "./components/EditUser";
import EditItem from "./components/EditItem";
import Signup from "./components/Signup.js";
import sky from "./img/sky.jpg";
import bg from "./img/image.png";



function App() {
  return (
    <div className="App" 
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      width: "100%",
      minHeight: "100vh",
      color: "#f5f5f5",
      backgroundRepeat: 'repeat-x',
      
      
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="add" element={<AddUser />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="userlist/edit/:id" element={<EditUser />} />
        <Route path="items/dashboard" element={<ItemList />} />
        <Route path="items/additems" element={<AddItem />} />
        <Route path="items/dashboard/edit/:id" element={<EditItem/>}/>
        
      </Routes>
    </BrowserRouter>
     
     
   </div>
    
  );
}

export default App;
