export const isNonNullable = <T>(x: T): x is NonNullable<T> =>
  x !== undefined && x !== null
