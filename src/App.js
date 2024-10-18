import './index.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Home from './components/home';
import { useState } from 'react';
import Post from './components/post';
import Createpost from './components/createPost'

function App() {
  const [user, setUser] = useState(null);
  return (
<>

<BrowserRouter>
<Navbar user={user}/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/post" element={<Post/>}/>
  {/* <Route path="/create-post" element={<CreatePost/>}/>/\ */}
  <Route path="/createpost" element={<Createpost/>}/>
  <Route path="/login" element={<Login setUser={setUser}/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
