import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import UserBeranda from "./pages/UserBeranda";
import SenderQuestion from "./pages/SenderPengisianData";
import Sidebar from "./components/Beranda-1/Sidebar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserBeranda  />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/sender" element={<SenderQuestion />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;