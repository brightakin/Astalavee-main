import { ThemeProvider } from "@mui/material";
import { Fragment, useEffect } from "react";
import AppBar from "./components/appBar";
import Banner from "./components/Banner";
import Footer from "./components/footer";
import MarketingPage from "./components/MarketingPage";
import theme from "./styles/theme";
import { Switch, Route } from "react-router-dom";
import FirstTimeDashboard from "./components/Dashboard/FirstTimeDashboard";
import UserDashboard from "./components/Dashboard/UserDashboard";

function App() {
  useEffect(() => {
    document.title = "Astalavee - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Switch>
          <Route path="/" exact>
            <AppBar />
            <Banner />
            <MarketingPage />
            <Footer />
          </Route>
          <Route path="/dashboard">
            <FirstTimeDashboard />
          </Route>
          <Route path="/userdashboard">
            <UserDashboard />
          </Route>
        </Switch>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
