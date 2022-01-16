export interface User {
  id: number
  name: string
}

export interface UserApiInterface {
  fetchUser: (args: { id: number }) => User
}
