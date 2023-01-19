import Admin from "./pages/Admin";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./pages/AllRoutes";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import GroceryRRB from "./Components/First_Column_rrb/Grocery-rrb";
import JewelryRRB from "./Components/Second_Column_rrb/Jewelry1";
import Slider from "./Components/First_Column_rrb/Slider";
function App() {
  return (<div>
      {/* <Admin /> */}
      {/* <Navbar /> */}
      {/* <AllRoutes/> */}
      {/* <GroceryRRB/> */}
      <Slider/>
      <JewelryRRB/>
      <div style={{height:'2000px',background:'teal'}}></div>
    </div>
  );
}

export default App;
