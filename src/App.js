import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./assets/Theme/theme";
import ListRequest from "./components/ListRequest";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import PrivateRoute from "./routers/PrivateRoute";
import dotenv from "dotenv";
import DetailRequestPage from "./pages/DetailRequest/DetailRequestPage";
import Loading from "./components/Loading";
import Notification from "./components/Notification";
import CreateRequest from "./components/CreateRequest"

dotenv.config();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/detail-request">
            <DetailRequestPage />
          </Route>
          <Route path="/test">
            <Notification />
          </Route>
          <Route path="/create-request">
            <CreateRequest/>
          </Route>

          <PrivateRoute>
            <HomePage />
          </PrivateRoute>

        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
