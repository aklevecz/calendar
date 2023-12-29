<script lang="ts">
  type Props = {
    showDialog: boolean;
    children: any;
  };
  let { showDialog, children } = $props<Props>();

  function openDialog() {
    showDialog = true;
  }

  function closeDialog() {
    showDialog = false;
  }
</script>

{#if showDialog}
  <dialog open>
    {@render children()}
  </dialog>
  <div class="backdrop" on:click={closeDialog} aria-label="close modal" role="button" tabindex="-1" on:keydown={() => {}}></div>
{/if}
<style>
    dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 1rem;
        border-radius: 0.5rem;
        z-index: 100;
        width: 83%;
        max-width: 500px;
    }
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
    }
</style>
