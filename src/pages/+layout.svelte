<script>
	import Header from "$widgets/header/ui/Header.svelte";

</script>
<div class="main-wrapper">

    <Header />
    <div class="main-wrapper-content">
        <slot></slot>
    </div>
</div>

<style lang="scss">
    .main-wrapper {
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
    }
</style>