import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UsersCardContainer = ({
  children,
}: Props) => {
  return (
    <Box
      overflow={"hidden"}
      borderRadius={10}
      boxShadow={"10px 5px 5px grey"}>
      {children}
    </Box>
  );
};

export default UsersCardContainer;
