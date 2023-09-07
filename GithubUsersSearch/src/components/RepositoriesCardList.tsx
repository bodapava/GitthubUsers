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
} from "@chakra-ui/react";
import useRepos from "../hooks/useRepos";
import useUsers from "../hooks/useUsers";

const RepositoryCardList = ({
  isopen,
  onClose,
  user,
}: any) => {
  if (!isopen) return null;
  let userloginName = user.login;
  const { repos } = useRepos({ userloginName });
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
            <Text fontWeight="bold" mb="1rem">
              <OrderedList>
                {repos.slice(0, 5).map((repo) => (
                  <ListItem key={repo.id}>
                    {repo.name}
                  </ListItem>
                ))}
              </OrderedList>
            </Text>
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
