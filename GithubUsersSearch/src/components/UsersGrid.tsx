import {
  Box,
  HStack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import UsersCards from "./UsersCards";
import UsersCardContainer from "./UsersCardContainer";

const UsersGrid = () => {
  const { users, isloading, error } = useUsers();
  console.log("users grid", users);

  return (
    <>
      {isloading && (
        <>
          <Spinner color="red.500"></Spinner>
        </>
      )}
      {/* {users.length &&
        users.map((user) => {
          <UsersCardContainer key={user.id}>
            <UsersCards
              key={user.id}
              user={user}></UsersCards>
          </UsersCardContainer>;
        })} */}
    </>
  );
};

export default UsersGrid;
