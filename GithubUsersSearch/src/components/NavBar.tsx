import {
  FormControl,
  FormLabel,
  HStack,
  Text,
  Input,
  flexbox,
  Button,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { AiFillGithub } from "react-icons/ai";

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
        />
        <Button colorScheme="messenger" size="sm">
          Search
        </Button>
      </HStack>
    </>
  );
};

export default NavBar;
