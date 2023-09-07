import {
  HStack,
  Input,
  flexbox,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  onSearchText: () => void;
}

const NavBar = () => {
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
          onChange={(event) =>
            console.log(event.target.value)
          }
        />
      </HStack>
    </>
  );
};

export default NavBar;
