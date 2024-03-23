import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Anggota from "./anggota";
import Create from "./create";
import DetailAnggota from "./detailAnggota";
import UpdateAnggota from "./updatAnggota";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Anggota/>}></Route>
          <Route exact path='/create' element={<Create />}></Route>
          <Route exact path='/update/:id' element={<UpdateAnggota />}></Route>
          <Route exact path='/anggota/:id' element={<DetailAnggota />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
