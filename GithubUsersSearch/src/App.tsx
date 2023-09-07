import { SetStateAction, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import UsersCards from "./components/UsersCards";
import UsersGrid from "./components/UsersGrid";
import useUsers from "./hooks/useUsers";
import SideBar from "./components/SideBar";

function App() {
  const [isSearch, setSearch] = useState(false);
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      gap="1"
      fontWeight="bold">
      <GridItem pl="2" area={"header"}>
        <NavBar></NavBar>
      </GridItem>
      <GridItem pl="2" bg="beige" area={"nav"}>
        <SideBar></SideBar>
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <UsersGrid></UsersGrid>
      </GridItem>
      {/* <GridItem
        pl="2"
        bg="blue.300"
        area={"footer"}>
        Footer
      </GridItem> */}
    </Grid>
  );
}

export default App;
