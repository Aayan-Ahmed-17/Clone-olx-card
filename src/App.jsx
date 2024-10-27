import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        console.log(data.products);
        setProduct(data.products);
      } catch {
        console.error("error");
      }
    }
    getData();
  }, []);

  return (
    <div>
      {product &&
        product.map((e, i) => {
          return <Card key={i} title={e.title} image={e.thumbnail} desc={e.description}/>;
        })}
    </div>
  );
};

export default App;
