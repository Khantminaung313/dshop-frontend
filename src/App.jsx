import "preline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./Layouts/AdminLayout";
import BaseLayout from "./Layouts/BaseLayout";
import Dashboard from "./Pages/admin/Dashboard";
import Roles from "./Pages/admin/Roles";
import Contact from "./Pages/users/Contact";
import Home from "./Pages/users/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Base Layout */}
          <Route path="/admin" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="roles" element={<Roles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
