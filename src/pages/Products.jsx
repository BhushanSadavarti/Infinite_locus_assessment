import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Footer, Navbar } from "../components";

export const Products = () => {
  const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  // const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.json());
        // setFilter(await response.json());
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container py-10 mx-auto flex flex-col items-center justify-center rounded-md">
      <section className="flex flex-col text-center">
        <h1 className="max-w-xl text-6xl font-bold text-white">
          Products
        </h1>
      </section>
      <div className="p-10">
        <div className="mt-10">
          <div className="grid grid-flow-col grid-rows-4 gap-4 mt-10">
            {/* {loading ? <Loading /> : <ShowProducts />} */}
            {data.map((item) => (
              <Card title={item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title} price={item.price} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
