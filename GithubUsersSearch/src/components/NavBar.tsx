import {
  HStack,
  Input,
  flexbox,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  setSearch: any;
}

const NavBar = ({ setSearch }: Props) => {
  const [searchText, isSearchText] = useState("");
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        margin={"5px"}>
        <span>
          <AiFillGithub
            size={"50px"}
            color="black"
          />{" "}
        </span>
        <Input
          placeholder="Search for a user"
          size="sm"
          borderRadius={8}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <Button>Search</Button>
      </HStack>
    </>
  );
};

export default NavBar;
