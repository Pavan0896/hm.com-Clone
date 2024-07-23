import "./App.css";
import AllRoutes from "./AllRoutes";
import Navbar from "./Components/Navbar";
import ProdNavigation from "./Components/ProdNavigation";

function App() {
  return (
    <>
      <Navbar />
      <ProdNavigation/>
      <AllRoutes />
    </>
  );
}

export default App;
