import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import CardProduct from "./components/CardProduct";

const urlBase = "https://fakestoreapi.com/products";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(urlBase);
    const datos = await response.json();
    setData(datos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />

      <h1 className="text-center mt-5">Lista de Productos</h1>

      <div className="container my-5">
        <div className="gap-3 p-0 p-sm-2 d-flex flex-wrap justify-content-center">
          {data.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
