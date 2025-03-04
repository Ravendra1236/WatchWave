import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <Typography
      variant="h4"
      sx={{
        color: "red",
        fontWeight: "bold",
        letterSpacing: "1px",
        fontFamily: "'Open Sans', 'Roboto', sans-serif",
        textTransform: "none",
      }}
    >
      WatchWave🎭
    </Typography>
    <SearchBar />
  </Stack>
);

export default Navbar;
