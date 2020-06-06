export const randomPick = <T>(arr: T[]) =>
  arr[Math.floor(Math.random() * arr.length)]
