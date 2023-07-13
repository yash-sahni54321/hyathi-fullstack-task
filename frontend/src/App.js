import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home.js";
import Navbar from "./component/layout/Navbar.js";
import Login from "./component/User/Login.js";
import Register from "./component/User/Register.js";
import Profile from "./component/User/Profile.js";
import PokemonDetails from "./component/Pokemon/PokemonDetails.js";
import Dashboard from "./component/User/Dashboard.js";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/userAction.js";
import store from "./store.js";
import PageNotFound from "./component/layout/PageNotFound.js";

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route exact path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
          {/* <Routes>
            <Route path="*" element={<PageNotFound />} />
          </Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
