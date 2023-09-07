import {
  Box,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import UsersCards from "./UsersCards";
import UsersCardContainer from "./UsersCardContainer";

const UsersGrid = () => {
  const { users, isloading, error } = useUsers();
  if (error)
    return (
      <>
        <Text fontSize="6xl" color={"red"}>
          {error}
        </Text>
      </>
    );
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={4}
      padding={10}
      overflow={"hidden"}>
      {users.map((user) => (
        <UsersCardContainer key={user.id}>
          <UsersCards user={user}></UsersCards>
        </UsersCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default UsersGrid;
