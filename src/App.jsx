import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaseLayout from "./Layouts/BaseLayout";
import Contact from "./Pages/users/Contact";
import Home from "./Pages/users/Home";
function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products/category-list')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setData(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
