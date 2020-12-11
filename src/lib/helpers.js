export const windowMatches = mediaQuery => {
  return window.matchMedia(`(${mediaQuery})`).matches
}
