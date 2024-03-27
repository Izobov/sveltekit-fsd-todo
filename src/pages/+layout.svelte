<script>
	import { setLocale } from "$shared/localization";
	import Header from "$widgets/header/Header.svelte";
    setLocale('en')
</script>
<div class="app-wrapper">

    <Header />
    <div class="app-wrapper-content">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    .app-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        

        &-content {
            display: flex;
            flex-grow: 1;
            justify-content: center;
            overflow: hidden;
        }
        
        &-page {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
        }
    }
</style>