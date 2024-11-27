import { Box, Grid, GridItem, HStack, VStack, useClipboard, useColorMode } from '@chakra-ui/react'
import { RAYMint, SOLMint } from '@raydium-io/raydium-sdk-v2'
import { PublicKey } from '@solana/web3.js'
import { useMemo, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import PanelCard from '@/components/PanelCard'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import SwapChatEmptyIcon from '@/icons/misc/SwapChatEmptyIcon'
import SwapChatIcon from '@/icons/misc/SwapChatIcon'
import SwapExchangeIcon from '@/icons/misc/SwapExchangeIcon'
import LinkIcon from '@/icons/misc/LinkIcon'
import DollarIcon from '@/icons/misc/DollarIcon'
import { useAppStore, useTokenStore } from '@/store'
import { colors } from '@/theme/cssVariables'
import { getVHExpression } from '../../theme/cssValue/getViewportExpression'
import { getSwapPairCache, setSwapPairCache } from './util'
import { SwapKlinePanel } from './components/SwapKlinePanel'
import { SwapKlinePanelMobileDrawer } from './components/SwapKlinePanelMobileDrawer'
import { SwapKlinePanelMobileThumbnail } from './components/SwapKlinePanelMobileThumbnail'
import { SwapPanel } from './components/SwapPanel'
import { TimeType } from '@/hooks/pool/useFetchPoolKLine'
import { SlippageAdjuster } from '@/components/SlippageAdjuster'
import { getMintPriority } from '@/utils/token'
import Tooltip from '@/components/Tooltip'
import { MoonpayBuy } from '@/components/Moonpay'
import { toastSubject } from '@/hooks/toast/useGlobalToast'
import DollarEmptyIcon from '@/icons/misc/DollarEmptyIcon'
import Button from '@/components/Button'
import LinkEmptyIcon from '@/icons/misc/LinkEmptyIcon'
import SwapExchangeEmptyIcon from '@/icons/misc/SwapExchangeEmptyIcon'


export default function Swap() {
  // const { inputMint: cacheInput, outputMint: cacheOutput } = getSwapPairCache()
  const { colorMode } = useColorMode();
  const [inputMint, setInputMint] = useState<string>(PublicKey.default.toBase58())
  const [outputMint, setOutputMint] = useState<string>(RAYMint.toBase58())
  const [isPCChartShown, setIsPCChartShown] = useState<boolean>(false)
  const [isMobileChartShown, setIsMobileChartShown] = useState<boolean>(false)
  const [isChartLeft, setIsChartLeft] = useState<boolean>(true)
  const isMobile = useAppStore((s) => s.isMobile)
  const publicKey = useAppStore((s) => s.publicKey)
  const connected = useAppStore((s) => s.connected)
  const [directionReverse, setDirectionReverse] = useState<boolean>(false)
  const [selectedTimeType, setSelectedTimeType] = useState<TimeType>('15m')
  const [cacheLoaded, setCacheLoaded] = useState(false)
  const untilDate = useRef(Math.floor(Date.now() / 1000))
  const swapPanelRef = useRef<HTMLDivElement>(null)
  const klineRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { onCopy, setValue } = useClipboard('')
  const [isBlinkReferralActive, setIsBlinkReferralActive] = useState(false)
  const solMintAddress = SOLMint.toBase58()

  const baseMint = directionReverse ? outputMint : inputMint
  const quoteMint = directionReverse ? inputMint : outputMint
  const tokenMap = useTokenStore((s) => s.tokenMap)
  const baseToken = useMemo(() => tokenMap.get(baseMint), [tokenMap, baseMint])
  const quoteToken = useMemo(() => tokenMap.get(quoteMint), [tokenMap, quoteMint])
  const [isDirectionNeedReverse, setIsDirectionNeedReverse] = useState<boolean>(false)

  useEffect(() => {
    const { inputMint: cacheInput, outputMint: cacheOutput } = getSwapPairCache()
    if (cacheInput) setInputMint(cacheInput)
    if (cacheOutput && cacheOutput !== cacheInput) setOutputMint(cacheOutput)
    setCacheLoaded(true)
  }, [])
  useEffect(() => {
    // preserve swap chart default direction on page refresh by mint priority
    if (cacheLoaded) {
      if (getMintPriority(baseMint) > getMintPriority(quoteMint)) {
        setDirectionReverse(true)
      }
    }
  }, [cacheLoaded])

  // reset directionReverse when inputMint or outputMint changed

  useIsomorphicLayoutEffect(() => {
    if (!cacheLoaded) return
    if (isDirectionNeedReverse) {
      setDirectionReverse(true)
      setIsDirectionNeedReverse(false)
    } else {
      setDirectionReverse(false)
    }

    setSwapPairCache({
      inputMint,
      outputMint
    })
  }, [inputMint, outputMint, cacheLoaded])

  useIsomorphicLayoutEffect(() => {
    if (klineRef.current) {
      const swapPanelHeight = swapPanelRef.current?.getBoundingClientRect().height
      const height = Number(swapPanelHeight) > 500 ? `${swapPanelHeight}px` : '522px'
      klineRef.current.style.height = height
    }
  }, [])

  useEffect(() => {
    // inputMint === solMintAddress || outputMint === solMintAddress ? setIsBlinkReferralActive(true) : setIsBlinkReferralActive(false)
    setIsBlinkReferralActive(true)
    const def = PublicKey.default.toString()
    const _inputMint = inputMint === def ? 'sol' : inputMint
    const _outputMint = outputMint === def ? 'sol' : outputMint
    const href = `https://raydium.io/swap/?inputMint=${_inputMint}&outputMint=${_outputMint}`
    const walletAddress = publicKey?.toBase58()
    const copyUrl = connected ? href + `&referrer=${walletAddress}` : href
    setValue(copyUrl)
  }, [inputMint, outputMint, connected, publicKey])

  return (
    <VStack
      mx={['unset', 'auto']}
      mt={[0, getVHExpression([0, 800], [32, 1300])]}
      width={!isMobile && isPCChartShown ? 'min(100%, 1300px)' : undefined}
    >
      <HStack alignSelf={isMobile || isPCChartShown ? `flex-end` : `flex-center`} my={[1, 0]}>
        {/* <MoonpayBuy>
          {colorMode == "dark" ?
            <DollarIcon />
            :
            <Button
              size="xs"
              height="fit-content"
              py={2}
              px={2}
              borderRadius="full"
              bg={colors.buttonBg01}
              color={colors.textSecondary}
              fontSize={'sm'}
              fontWeight="normal"
              border={'1px solid transparent'}
              _hover={{
                borderColor: colors.secondary,
                color: colors.secondary,
                bg: colors.buttonBg01,
                '.chakra-icon-hover': {
                  fill: colors.secondary
                }
              }}
              _focus={{ boxShadow: 'outline' }}
              iconSpacing={1}
              variant={'ghost'}
            >
              <DollarEmptyIcon />
            </Button>
          }
        </MoonpayBuy> */}
        <SlippageAdjuster />
        <Tooltip
          label={t('swap.blink_referral_desc', {
            symbol: outputMint === solMintAddress ? tokenMap.get(inputMint)?.symbol : tokenMap.get(outputMint)?.symbol
          })}
        >
          <Box
            cursor="pointer"
            opacity={isBlinkReferralActive ? 1 : 0.6}
            onClick={() => {
              if (isBlinkReferralActive) {
                onCopy()
                toastSubject.next({
                  status: 'success',
                  title: t('common.copy_success')
                })
              }
            }}
          >
            {colorMode == "dark" ?
              <LinkIcon />
              :
              <Button
                size="xs"
                height="fit-content"
                py={2}
                px={2}
                borderRadius="full"
                bg={colors.buttonBg01}
                color={colors.textSecondary}
                fontSize={'sm'}
                fontWeight="normal"
                border={'1px solid transparent'}
                _hover={{
                  borderColor: colors.secondary,
                  color: colors.secondary,
                  bg: colors.buttonBg01,
                  '.chakra-icon-hover': {
                    fill: colors.secondary
                  }
                }}
                _focus={{ boxShadow: 'outline' }}
                iconSpacing={1}
                variant={'ghost'}
              >
                <LinkEmptyIcon />
              </Button>
            }
          </Box>
        </Tooltip>


        {!isMobile && isPCChartShown && (
          <Box
            cursor="pointer"
            onClick={() => {
              setIsChartLeft((b) => !b)
            }}
          >
            {colorMode == "dark" ? (
              <SwapExchangeIcon />
            ) : (
              <SwapExchangeEmptyIcon />
            )}
          </Box>
        )}
        {/* <Box
          cursor="pointer"
          onClick={() => {
            if (!isMobile) {
              setIsPCChartShown((b) => !b)
            } else {
              setIsMobileChartShown(true)
            }
          }}
        >
          {colorMode == "dark" ? (
            <SwapChatIcon />
          ) : (
            <Box color={colors.textSecondary}>
              <SwapChatEmptyIcon />
            </Box>
          )}
        </Box> */}
      </HStack>
      <Grid
        width="full"
        gridTemplate={[
          ` 
            "panel" auto
            "kline" auto / auto
          `,
          isPCChartShown ? (isChartLeft ? `"kline  panel" auto / 1.5fr 1fr` : `"panel kline" auto / 1fr 1.5fr`) : `"panel" auto / auto`
        ]}
        gap={[3, isPCChartShown ? 4 : 0]}
      >
        <GridItem ref={swapPanelRef} gridArea="panel">
          <PanelCard p={[3, 6]}
            flexGrow={['1', 'unset']}
            background={colorMode !== "dark" ? colors.backgroundSwapCardsTransparent13 : colors.backgroundSwapCardsTransparent13}
            border={colorMode !== "dark" ? colors.cardBorder02 : colors.cardBorder02}
            backdropFilter={colorMode !== "dark" ? "blur(5px)" : ""}
          >
            <SwapPanel
              onInputMintChange={setInputMint}
              onOutputMintChange={setOutputMint}
              onDirectionNeedReverse={() => setIsDirectionNeedReverse((b) => !b)}
            />
          </PanelCard>
        </GridItem>

        {/* <GridItem gridArea="kline" {...(isMobile ? { mb: 3 } : {})}>
          <PanelCard ref={klineRef} p={[3, 3]} gap={4} height="100%" {...(isMobile || !isPCChartShown ? { display: 'none' } : {})}
            background={colorMode !== "dark" ? colors.backgroundLight : ""}
            border={colorMode !== "dark" ? colors.cardBorder02 : ""}
            backdropFilter={colorMode !== "dark" ? "blur(5px)" : ""}
          >
            <SwapKlinePanel
              untilDate={untilDate.current}
              baseToken={baseToken}
              quoteToken={quoteToken}
              timeType={selectedTimeType}
              onDirectionToggle={() => setDirectionReverse((b) => !b)}
              onTimeTypeChange={setSelectedTimeType}
            />
          </PanelCard>
          {isMobile && (
            <PanelCard
              p={[3, 6]}
              gap={0}
              onClick={() => {
                setIsMobileChartShown(true)
              }}
              height="100%"
            >
              <SwapKlinePanelMobileThumbnail
                untilDate={untilDate.current}
                baseToken={baseToken}
                quoteToken={quoteToken}
              // onDirectionToggle={() => setDirectionReverse((b) => !b)}
              // onTimeTypeChange={setSelectedTimeType}
              />
              <SwapKlinePanelMobileDrawer
                untilDate={untilDate.current}
                isOpen={isMobileChartShown}
                onClose={() => setIsMobileChartShown(false)}
                baseToken={baseToken}
                quoteToken={quoteToken}
                timeType={selectedTimeType}
                onDirectionToggle={() => setDirectionReverse((b) => !b)}
                onTimeTypeChange={setSelectedTimeType}
              />
            </PanelCard>
          )}
        </GridItem> */}
      </Grid>
    </VStack>
  )
}
