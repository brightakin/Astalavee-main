import {
  AppBarBtn,
  AppBarContainer,
  AppBarImage,
  AppBarList,
} from "../../styles/appBar";
import headerImage from "../../assets/logo.png";
import { Button, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function AppBarDesktop({ matches }) {
  return (
    <AppBarContainer>
      <AppBarImage>
        <img src={headerImage} className="h-8" alt="Astalavee" />
      </AppBarImage>
      <AppBarList type="row">
        <ListItemButton>
          <Link to="/">Features</Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/">Pricing</Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/">Resources</Link>
        </ListItemButton>
        <AppBarBtn>
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            color="secondary"
          >
            Login
          </Button>

          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            style={{
              borderRadius: 35,
              backgroundColor: "#9900cc",
              color: "#ffffff",
              padding: "10px 20px",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            variant="contained"
          >
            Sign Up Free
          </Button>
        </AppBarBtn>
      </AppBarList>
    </AppBarContainer>
  );
}
