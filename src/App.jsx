import "preline";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaseLayout from "./Layouts/BaseLayout";
import Contact from "./Pages/users/Contact";
import Home from "./Pages/users/Home";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading content
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
    {
      isLoading ? (
        <div className="loading-screen w-full h-full place-content-center text-center text-4xl">
          <h1>Loading...</h1>
        </div>
      ) : (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      )
    }
    </>
  );
}

export default App;
