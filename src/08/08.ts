export type UserType = {
  name: string
  age: number
  address: {
    title: string
  }
}


export const incrAge = (user: UserType) => {
  user.age++
}
