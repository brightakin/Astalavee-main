import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { List } from "@mui/material";
import { Colors } from "../theme";

//container
export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px, 8px",
  background: Colors.primary,
}));

//header
export const AppBarImage = styled(Box)(() => ({
  padding: "20px",
  flexGrow: 1,
}));

export const AppBarList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const AppBarBtn = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px, 8px",
}));

export const AppBarListMobile = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 2,
  justifyContent: "center",
  alignItems: "center",
}));
