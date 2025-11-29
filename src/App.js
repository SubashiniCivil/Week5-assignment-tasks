import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import PropsExplanation from "./components/PropsExplanation";
import UpdateUser from "./components/UpdateUser";
import ThemeToggler from "./components/ThemeToggler";
import PropsDrillExample from "./PropsDrillExample";

function App() {
  return (
    <div className="App">

      <Header />

      <div className="section">
     
        {/* 🔥 Props Drilling Explanation */}
        <PropsExplanation />
         <h2>1. Props Drilling Example</h2>
        {/* Existing props drill example */}
        <PropsDrillExample />
      </div>

      <div className="section">
        <h2>2. Context + useContext Example</h2>
        <Profile />
        <UpdateUser />
      </div>

      <div className="section">
        <h2>3. Global Theme Toggle</h2>
        <ThemeToggler />
      </div>

    </div>
  );
}

export default App;
