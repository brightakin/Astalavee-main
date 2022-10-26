import { ThemeProvider } from "@mui/material";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import AppBar from "./components/appBar";
import Banner from "./components/Banner";
import Footer from "./components/footer";
import MarketingPage from "./components/MarketingPage";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "Astalavee - Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <AppBar />
        <Banner />
        <MarketingPage />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
