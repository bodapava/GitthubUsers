import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import useUsers, {
  User,
} from "../hooks/useUsers";
import { useState, useTransition } from "react";
import RepositoryCardList from "./RepositoriesCardList";

interface Props {
  user: User;
}
const UsersCards = ({ user }: Props) => {
  const [isopen, setIsopen] = useState(false);
  console.log(isopen);
  return (
    <>
      <Card key={user.id} borderRadius={10}>
        <CardBody>
          <Image
            src={user.avatar_url}
            borderRadius={"50%"}
          />
          <Text fontFamily={"cursive"}>
            {user.login}
          </Text>

          <Text fontFamily={"cursive"}>
            Repos:{""}
            <Link onClick={() => setIsopen(true)}>
              {user.repos_url}
            </Link>
          </Text>
          <RepositoryCardList
            isopen={isopen}
            onClose={() =>
              setIsopen(false)
            }></RepositoryCardList>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default UsersCards;
