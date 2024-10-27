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
    <div className="px-6 py-4 bg-gray-400">
      {product && (
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 sm:gap-6 md:gap-10  mx-auto gap-2">
          {product.map((e, i) => {
            return (
              <Card
                key={i}
                title={e.title}
                image={e.thumbnail}
                desc={e.description}
                price={Math.round(e.price * 100)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
