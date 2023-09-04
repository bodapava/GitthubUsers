import { Box, HStack } from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import UsersCards from "./UsersCards";

const UsersGrid = () => {
  const { users } = useUsers();
  return (
    <>
      {users.map((user) => {
        <HStack spacing="24px" key={user.id}>
          <Box w="40px" h="40px">
            <UsersCards
              user={user}
              key={user.id}></UsersCards>
          </Box>
        </HStack>;
      })}
    </>
  );
};

export default UsersGrid;
