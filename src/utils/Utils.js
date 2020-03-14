export const getHostFromURL = url => {
  let domain = undefined
  if (url) {
    const urlMatches = url.match(/^https:\/\/([^/?#]+)(?:[/?#]|$)/i)
    domain = urlMatches && urlMatches[1] // domain will be null if no match is found
  }

  return domain
}
