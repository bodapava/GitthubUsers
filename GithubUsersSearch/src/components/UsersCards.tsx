import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import useUsers, {
  User,
} from "../hooks/useUsers";

interface Props {
  user: User;
}
const UsersCards = ({ user }: Props) => {
  return (
    <>
      <Card
        key={user.id}
        borderRadius={10}
        style={{ backgroundColor: "beige" }}>
        <CardBody>
          <Image
            src={user.avatar_url}
            borderRadius={"50%"}
          />
          <Text fontFamily={"cursive"}>
            {user.login}
          </Text>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default UsersCards;
