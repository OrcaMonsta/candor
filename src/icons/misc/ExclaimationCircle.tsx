import { SvgIcon } from '../type'

export default function ExclaimationCircle(props: SvgIcon) {
  const { width = 20, height = 20 } = props

  return (
    <svg width={width} height={height} viewBox="0 0 20 20" className="chakra-icon" {...props}>
      <g clipPath="url(#clip0_13019_22118)">
        <path
          d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0 10 0ZM10 18.3036C5.41518 18.3036 1.69643 14.5848 1.69643 10C1.69643 5.41518 5.41518 1.69643 10 1.69643C14.5848 1.69643 18.3036 5.41518 18.3036 10C18.3036 14.5848 14.5848 18.3036 10 18.3036Z"
          fill="currentColor"
        />
        <path
          d="M8.92822 13.9286C8.92822 14.2127 9.04111 14.4853 9.24204 14.6862C9.44297 14.8871 9.71549 15 9.99965 15C10.2838 15 10.5563 14.8871 10.7573 14.6862C10.9582 14.4853 11.0711 14.2127 11.0711 13.9286C11.0711 13.6444 10.9582 13.3719 10.7573 13.171C10.5563 12.97 10.2838 12.8571 9.99965 12.8571C9.71549 12.8571 9.44297 12.97 9.24204 13.171C9.04111 13.3719 8.92822 13.6444 8.92822 13.9286ZM9.46394 11.4286H10.5354C10.6336 11.4286 10.7139 11.3482 10.7139 11.25V5.17857C10.7139 5.08036 10.6336 5 10.5354 5H9.46394C9.36572 5 9.28537 5.08036 9.28537 5.17857V11.25C9.28537 11.3482 9.36572 11.4286 9.46394 11.4286Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_13019_22118">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}