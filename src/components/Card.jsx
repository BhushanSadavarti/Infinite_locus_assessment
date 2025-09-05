// import Image from "next/image";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";


export const Card = ({ title, price, image, id }) => {

  const dispatch = useDispatch();

  const addProduct = (product)=>{
    dispatch(addCart(product));
  }
  return (
    <div className="md:max-w-sm w-full h-[550px] p-6 rounded-xl shadow-xl bg-white border border-zinc-800 hover:border-white transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="relative overflow-hidden rounded-lg mb-6 w-[400] h-[400]">
        <img
          src={image}
          alt="Featured content"
          width={400}
          height={400}
          className="object-cover object-center w-full h-70 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold text-black mb-2 transition-colors duration-200">
          {title}
        </h2>
      </div>

      <p className="text-balck font-bold text-sm leading-relaxed mb-6">
        ${price}
      </p>

      <div className="flex items-center justify-between">
        <button onClick={()=>addProduct(id)} className="px-4 py-2 bg-yellow-500 hover:bg-orange-500 text-black text-sm rounded-lg transition-colors duration-200 cursor-pointer font-bold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
