<script>
	import Header from "$widgets/header/ui/Header.svelte";

</script>
<div class="wrapper">

    <Header />
    <slot></slot>
</div>

<style>
    .wrapper {
        width: 100vw;
        height: 100vh;
    }
</style>