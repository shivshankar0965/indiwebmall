import Admin from "./pages/Admin";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./pages/AllRoutes";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
function App() {
  return (<div>
    <Admin />
      <Navbar />
      <AllRoutes/>
      <div style={{height:'2000px',background:'teal'}}></div>
    </div>
  );
}

export default App;
