import { User, UserApiInterface } from "./apiInterface"

export class UserApiImpl implements UserApiInterface {
  fetchUser({ id }: { id: number }): User {
    return {
      id,
      name: `This is fetchUse of UserApi: ${id}`
    }
  }
}
