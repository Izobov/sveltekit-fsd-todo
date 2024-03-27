<script>
	import Header from "$widgets/header/ui/Header.svelte";

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
            padding: 20px;
            flex-grow: 1;
            justify-content: center;
        }

        :global(&-page) {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
</style>