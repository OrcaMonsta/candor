import { Text, Button, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalFooter, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { routeToPage } from '@/utils/routeTools'
import { colors } from '@/theme/cssVariables';

export default function StakeLpModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter()
  const { t } = useTranslation()
  const { colorMode } = useColorMode()

  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent sx={{ bg: 'rgba(28, 36, 62, 1)' }}
        background={colorMode !== "dark" ? colors.backgroundTransparent11 : colors.backgroundTransparent11}
        border={colorMode !== "dark" ? colors.cardBorder02 : ""}
        backdropFilter={colorMode !== "dark" ? colors.backDropFilter : ""}
      >
        <ModalHeader textAlign="center" px="12" mb="5" fontSize="xl">
          {t('liquidity.want_to_stake_lp')}
        </ModalHeader>
        <ModalBody textAlign="center">
          <Text variant="title" fontSize="md" mb="6" fontWeight="400">
            {t('liquidity.stake_lp_desc')}
          </Text>
        </ModalBody>
        <ModalFooter flexDirection="column" gap="2" px="0" py="0" mt="4">
          <Button
            onClick={() => {
              routeToPage('increase-liquidity', {
                queryProps: {
                  mode: 'stake',
                  pool_id: router.query['pool_id'] as string
                }
              })
            }}
            w="100%"
          >
            {t('button.stake')}
          </Button>
          <Button variant="ghost" onClick={onClose} w="100%">
            {t('button.not_now')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
