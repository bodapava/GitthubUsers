import {
  HStack,
  Switch,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } =
    useColorMode();
  return (
    <>
      <HStack>
        <span>
          <Text
            color={"black"}
            fontFamily={"cursive"}>
            Switch Mode
          </Text>
        </span>
        <Switch
          isChecked={colorMode == "light"}
          onChange={toggleColorMode}></Switch>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
