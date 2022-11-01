import {
  AppBarBtn,
  AppBarContainer,
  AppBarImage,
  AppBarListMobile,
} from "../../styles/appBar";
import headerImage from "../../assets/logo.png";
import { Button } from "@mui/material";

export default function AppBarMobile({ matches }) {
  return (
    <AppBarContainer>
      <AppBarImage>
        <img
          src={headerImage}
          className="h-[100px] absolute left-[64px] sm:h-6"
          alt="Astalavee"
        />
      </AppBarImage>
      <AppBarListMobile type="row">
        {/* <ListItemText primary="Features" />
        <ListItemText primary="Pricing" />
        <ListItemText primary="Resources" /> */}

        <AppBarBtn></AppBarBtn>
      </AppBarListMobile>
    </AppBarContainer>
  );
}
