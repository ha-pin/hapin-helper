// i18n 支持
import { register, init, getLocaleFromNavigator } from "svelte-i18n"

register("zh-CN", () => import("./cn.json"))
register("kk", () => import("./kz.json"))
register("en", () => import("./en.json"))

export const setup = () => init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
})
