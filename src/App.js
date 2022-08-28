import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Daftar from "./pages/Daftar";
import { useDispatch, useSelector } from "react-redux";
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });
const App = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      console.log("currentUser:", currentUser);
    } else {
      history.push("/login");
    }
  }, [currentUser]);
  return (
    <React.Fragment>
      {/* <HistoryRouter history={history}></HistoryRouter> */}
      <BrowserRouter>
        <Routes>
          {currentUser && <Route path="/" element={<Home />} />}
          {currentUser && <Route path="/product" element={<Produk />} />}

          {!currentUser && <Route path="/login" element={<SignIn />} />}
          <Route path="/signup" element={<Daftar />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
//email: "asdasd@yahoo.com", username: "asdasd", password: "asdasd", phone: "123123123"
//email: "asdasd@yahoo.com", username: "asdasd@yahoo.com", password: "asdasd", phone: "123123123"
