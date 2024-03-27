<script>
    import { createEventDispatcher } from 'svelte';
    import './Button.scss';
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
