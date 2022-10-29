import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginDesktop from "./loginDesktop";
import LoginMobile from "./loginMobile";

const LoginPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <LoginMobile /> : <LoginDesktop />}</>;
};

export default LoginPage;
