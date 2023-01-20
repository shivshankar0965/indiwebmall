import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./pages/AllRoutes";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import GroceryRRB from "./Components/First_Column_rrb/Grocery-rrb";
import JewelryRRB from "./Components/Second_Column_rrb/Jewelry1";
import Footer from './Components/Footer/Footer';
function App() {
  return (<div>
      <Navbar />
      <AllRoutes/>
      <GroceryRRB/>
      <JewelryRRB/>
      <Footer/>
    </div>
  );
}

export default App;
