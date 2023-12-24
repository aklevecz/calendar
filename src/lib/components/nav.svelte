<script lang="ts">
  import { getContext, setContext } from "svelte";
  import view, {View} from "$lib/view.svelte";
  function toggleView(newView: number) {
    view.changeView(newView);
  }
</script>

<div class="container">
  <button class="btn btn-primary" on:click={() => toggleView(View.Calendar)}>Calendar</button>
  <button class="btn btn-primary" on:click={() => toggleView(View.List)}>List</button>
</div>
