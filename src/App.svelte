<script>
    import { onMount } from "svelte"
    import { _, isLoading } from "svelte-i18n"

    import About from "./lib/About/About.svelte"
    import { setup } from "./locales/i18n"

    const setupRes = setup()
    // onMount(() => {
    //     const lang = document.getElementsByTagName("html")[0].lang
    //     const mainDOM = document.querySelector("hapin-helper-main")
    //     if (!!lang && lang === "kk") {
    //         mainDOM.setAttribute("dir", "rtl")
    //     } else {
    //         mainDOM.setAttribute("dir", "ltr")
    //     }
    // })
</script>

{#await setupRes}
    loading...
{:then}
    <main id="hapin-helper-main" dir="ltr">
    <p>
        欢迎使用哈拼（哈萨克语拼音化）方案，旨在提供文字无关的哈萨克语输入方案。如果你是新手，可以点击
        “快速上手哈拼”
    </p>
    <button> 快速上手哈拼 </button>
    <p>
        哈拼基于 Rime
        提供了兼容标准美式键盘的哈萨克语输入方案，你可以根据下面的步骤安装此此输入方案
    </p>
    <button> 安装哈拼输入方案 </button>
    <About />
</main>
{/await}
