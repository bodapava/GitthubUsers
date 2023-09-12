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

interface Props {
  navsearch: string;
}
const UsersGrid = ({ navsearch }: Props) => {
  const { users, isloading, error } = useUsers();
  let filteredUsers =
    navsearch.length > 0
      ? users.filter((user) =>
          user.login
            .toLowerCase()
            .startsWith(navsearch.toLowerCase())
        )
      : users;
  console.log(filteredUsers);
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
      {filteredUsers.map((user) => (
        <UsersCardContainer key={user.id}>
          <UsersCards user={user}></UsersCards>
        </UsersCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default UsersGrid;
