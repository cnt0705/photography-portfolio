// Max width of each
const breakPoints = {
  mobile: 560,
  tablet: 960,
}

const mediaQueries = (bp: number) => `@media (min-width: ${bp + 1}px)`

export const mq = {
  tablet: mediaQueries(breakPoints.mobile),
  desktop: mediaQueries(breakPoints.tablet),
}
