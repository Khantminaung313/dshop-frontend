import "./App.css";
import BaseLayout from "./Layouts/BaseLayout";

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
      <BaseLayout />
    </>
  );
}

export default App;
