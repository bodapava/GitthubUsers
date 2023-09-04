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
  PropsOf,
} from "@chakra-ui/react";
import useUsers, {
  User,
} from "../hooks/useUsers";

interface Props {
  user: User;
}
const UsersCards = ({ user }: Props) => {
  // const { users } = useUsers();
  return (
    <>
      <Card key={user.id}>
        <CardBody>
          <Image src={user.avatar_url} />
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default UsersCards;
