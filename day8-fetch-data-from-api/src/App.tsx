import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const PRODUCTS_URL = "https://dummyjson.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  console.log(products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await axios.get(PRODUCTS_URL);
        setProducts(data.data.products);
      } catch (err) {
        
        setError("Whoops!! Something Went Wrong Please Try Again Later");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading && <p> Loading</p>}
      {error && <p> {error} </p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
