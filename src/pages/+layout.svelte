<script>
	import { setLocale } from "$shared/localization";
	import Header from "$widgets/header/Header.svelte";
	import { getContext } from "svelte";
    import "$shared/themes/index.scss"
    import "./wrapper.scss";
	import { setTheme } from "$shared/themes/model";
    setLocale('en')
    setTheme('light');
    const theme = getContext("theme");
</script>
<div class="app-wrapper theme-light" class:theme-dark={$theme === "dark"} class:theme-light={$theme === "light"}> 

    <Header />
    <div class="app-wrapper-content">
        <slot></slot>
    </div>
</div>