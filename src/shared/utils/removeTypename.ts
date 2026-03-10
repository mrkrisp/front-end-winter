export function removeTypename<T>(data: T) {
  const cleanedData = {
    data: data
      ? Object.fromEntries(
          Object.entries(data).filter(([key]) => key !== '__typename')
        )
      : {}
  }
  return cleanedData.data
}
