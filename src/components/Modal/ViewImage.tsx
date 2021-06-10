import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={0}>
        <ModalBody p={0}>
          <Image
            src={imgUrl}
            w="100%"
            maxW="900px"
            maxH="600px"
            borderTopRadius="md"
          />
        </ModalBody>

        <ModalFooter
          bg="pGray.800"
          borderBottomRadius="md"
          justifyContent="start"
        >
          <Link target="_blank" href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
