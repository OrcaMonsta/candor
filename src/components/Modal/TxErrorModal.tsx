import CircleError from '@/icons/misc/CircleError'
import { colors } from '@/theme/cssVariables'
import { Button, HStack, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, VStack, useColorMode } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function TxErrorModal(props: { isOpen: boolean; onClose: () => void; title?: ReactNode; description?: ReactNode }) {
  const { colorMode } = useColorMode()
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={'sm'}>
      <ModalOverlay />
      <ModalContent minW={['auto', '400px']}
        background={colorMode !== "dark" ? colors.backgroundTransparent11 : colors.backgroundTransparent11}
        border={colorMode !== "dark" ? colors.cardBorder02 : ""}
        backdropFilter={colorMode !== "dark" ? colors.backDropFilter : ""}
      >
        <ModalHeader display="none">Create Farm TX error!!</ModalHeader>
        <ModalBody>
          <VStack pt={3} spacing={3}>
            <CircleError width={32} height={32} color={colors.semanticError} />
            <Text variant="dialogTitle" textAlign="center">
              {props.title || 'Oops...Something went wrong!'}
            </Text>
            <HStack p={4} w={'full'}>
              <Text textAlign={'center'} fontSize="md" color={colors.textSecondary}>
                {props.description || 'Please try again later.'}
              </Text>
            </HStack>
          </VStack>
        </ModalBody>
        <ModalFooter mt={6} mb={2} flexDirection="column" gap="1">
          <Button
            w="full"
            onClick={() => {
              props.onClose()
            }}
          >
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
