// i18n 支持
import { register, init, getLocaleFromNavigator } from "svelte-i18n"

register("cn", () => import("./cn.json"))
register("kz", () => import("./kz.json"))

init({
    fallbackLocale: "cn",
    initialLocale: getLocaleFromNavigator(),
})
