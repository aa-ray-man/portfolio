export default function DoodleFilter() {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true">
      <defs>
        <filter id="wobble">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="wobble-strong">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="4" result="noise" seed="5" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  )
}
