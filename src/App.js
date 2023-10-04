import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leadership from "./pages/Leadership";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter className='w-11/12 mx-auto container'>
      <div className="w-11/12 mx-auto container">
        <NavBar></NavBar>
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path='/leadership' element={<Leadership/>}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
