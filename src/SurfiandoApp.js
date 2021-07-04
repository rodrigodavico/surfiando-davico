import Layout from "./components/Layout/Layout"
import CartContext from "./context/CartContext"

function SurfiandoApp() {
  return (
    <CartContext.Provider value={[]}>
      <Layout />
    </CartContext.Provider>
  );
}

export default SurfiandoApp;
