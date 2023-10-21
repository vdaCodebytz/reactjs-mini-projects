import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <>
      <Navbar />
      <Cart />
      {isOpen ? <Modal /> : ""}
    </>
  );
}
export default App;
