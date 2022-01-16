import { inject, injectable } from "tsyringe"
import { UserApiInterface } from "./apiInterface"

@injectable()
export class UserApi { // constructorで渡されたオブジェクトに応じて挙動を変えられる
  constructor(
    @inject("UserApiInterface") // DIライブラリー側にインターフェースのメタデータを渡している
    private api: UserApiInterface // UserApiInterface型のオブジェクトapiをプライベートなメンバーとして保持
  ) {}
  fetchUser(args: { id: number }) {
    return this.api.fetchUser(args) // apiに実装されているapi.fetchUser()を呼ぶ
  }
}
