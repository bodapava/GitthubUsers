import { Box, HStack } from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import UsersCards from "./UsersCards";

const UsersGrid = () => {
  const { users } = useUsers();
  console.log("users grid");
  return (
    <>
      {users.map((user) => {
        <HStack key={user.id}>
          <Box>
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
