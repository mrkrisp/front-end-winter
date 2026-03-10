export function getChangedFields<T>(
  oldData: T,
  newData: Partial<T>
): Partial<T> {
  const changedFields: Partial<T> = {}

  for (const key in newData) {
    if (Object.prototype.hasOwnProperty.call(newData, key)) {
      const oldVal = oldData[key]
      const newVal = newData[key]

      if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
        changedFields[key] = newVal
      }
    }
  }
  return changedFields
}
