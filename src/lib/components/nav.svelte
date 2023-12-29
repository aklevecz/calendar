<script lang="ts">
  import view, { View } from "$lib/view.svelte";
  function toggleView(newView: number) {
    view.changeView(newView);
  }
</script>

<div class="container">
  <button class="btn btn-primary" class:active={view.view == View.Calendar} on:click={() => toggleView(View.Calendar)}>Calendar</button>
  <button class="btn btn-primary" class:active={view.view == View.List} on:click={() => toggleView(View.List)}>List</button>
</div>

<style>
  .active {
    color: lime;
  }
</style>