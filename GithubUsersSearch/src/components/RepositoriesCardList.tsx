import {
  Button,
  Text,
  CloseButton,
  OrderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Wrap,
  WrapItem,
  Avatar,
  Spinner,
} from "@chakra-ui/react";
import useRepos from "../hooks/useRepos";
import useUsers from "../hooks/useUsers";

const RepositoryCardList = ({
  isopen,
  onClose,
  user,
}: any) => {
  let userloginName = user.login;
  const { repos, loading, error } = useRepos({
    userloginName,
  });
  if (error)
    return (
      <>
        <Text fontSize="6xl" color={"red"}>
          {error}
        </Text>
      </>
    );
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isopen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Wrap>
              <WrapItem>
                <Avatar
                  name={user.login}
                  src={user.avatar_url}
                />
                <Text>
                  The 5 repos of {user.login} are
                </Text>
              </WrapItem>
            </Wrap>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading && <Spinner />}
            <OrderedList>
              {repos.slice(0, 5).map((repo) => (
                <ListItem key={repo.id}>
                  <Text
                    fontWeight="bold"
                    mb="1rem">
                    {repo.name}
                  </Text>
                </ListItem>
              ))}
            </OrderedList>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
{
  /* <div style={OVERLAY_STYLES}></div>

      <div style={REPOCARDS_STYLE}>
        <CloseButton onClick={onClose} />
        <OrderedList>
          {repos.slice(0, 5).map((repo) => (
            <ListItem key={repo.id}>
              {repo.description}
            </ListItem>
          ))}
        </OrderedList>
      </div> */
}

export default RepositoryCardList;
