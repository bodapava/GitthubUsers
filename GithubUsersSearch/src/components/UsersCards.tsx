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
  const [url, setUrl] = useState("");
  return (
    <>
      <Card key={user.id} borderRadius={10}>
        <CardBody margin={0}>
          <Image
            src={user.avatar_url}
            borderRadius={"50%"}
            boxSize="200px"
          />
          <Text as="em">{user.login}</Text>
          <Text fontFamily={"cursive"}>
            Repos:{""}
            <Link
              onClick={() => {
                setIsopen(true);
                setUrl(user.login);
              }}>
              {user.repos_url}
            </Link>
          </Text>
          <RepositoryCardList
            isopen={isopen}
            onClose={() => setIsopen(false)}
            user={user}></RepositoryCardList>
        </CardBody>
      </Card>
    </>
  );
};

export default UsersCards;
