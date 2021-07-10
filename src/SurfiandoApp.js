import Layout from "./components/Layout/Layout"
import CartProvider from "./context/CartProvider"

function SurfiandoApp() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

export default SurfiandoApp
