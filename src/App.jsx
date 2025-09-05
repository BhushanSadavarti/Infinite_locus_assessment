import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Products, AddToCart, Product } from "./pages";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/addtocart" element={<AddToCart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
