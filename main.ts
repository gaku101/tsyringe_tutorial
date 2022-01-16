import "reflect-metadata"
import { container } from "tsyringe" // TSyringeのDIコンテナ。DIを行うための情報を保持している
import { UserApi } from "./api"
import { UserApiImpl } from "./apiImpl"

/* register()メソッドによって注入するオブジェクトを設定。
ここではUserApiInterfaceとしてUserApiImplを設定している */
container.register("UserApiInterface", {
  useClass: UserApiImpl,
})

/* UserApiをインスタンス化。
TSyringeはregister()によって登録された依存関係をresolve()によって解決しながらインスタンスを生成する */
const userApi = container.resolve(UserApi)
const data = userApi.fetchUser({ id: 1 })
console.log("data", data)
