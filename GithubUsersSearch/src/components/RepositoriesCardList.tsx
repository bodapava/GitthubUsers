import { Button, Text } from "@chakra-ui/react";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

const REPOCARDS_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
  padding: "100px",
};

const RepositoryCardList = ({
  isopen,
  onClose,
}: any) => {
  console.log("child", isopen);
  if (!isopen) return null;
  return (
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={REPOCARDS_STYLE}>
        <Button onClick={onClose}>Close</Button>
        <Text>Repos Card List</Text>
      </div>
    </>
  );
};

export default RepositoryCardList;
