<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function handleClick() {
        dispatch('click');
    }
</script>
<button class="ui-button" on:click={handleClick}>
    <div class="ui-button-text">
        <slot></slot>
    </div>
</button>

<style lang="scss">
    .ui-button {
        padding: 6px 12px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
</style>