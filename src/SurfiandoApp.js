import Layout from "./components/Layout/Layout"
import CartProvider from "./context/CartProvider"
import SessionProvider from "./context/SessionProvider"

function SurfiandoApp() {
  return (
    <SessionProvider>
      <CartProvider>
        <Layout />
      </CartProvider>
    </SessionProvider>
  );
}

export default SurfiandoApp
