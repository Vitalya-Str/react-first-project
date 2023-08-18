export const required = value => {
   return value ? undefined : 'Required Message'
}

export const maxLengthCreator = (maxLength) => (value) => {
   return value && value.length > maxLength ? `Must be ${maxLength} symbols` : undefined
}