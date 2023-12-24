<script lang="ts">
  import { getContext, setContext } from "svelte";
  import Nav from "$lib/components/nav.svelte";
  import CalendarView from "$lib/components/calendar-view.svelte";
  import ListView from "$lib/components/list-view.svelte";
  import view, { View } from "$lib/view.svelte";
  import { getDaysOfMonth } from "$lib/utils";
  import { monthIndexToName } from "$lib/utils.js";

  let { data } = $props<any>();

  let theme = "light";

  // container for the calendar component
  let daysOfTheMonth: Date[] = $derived(getDaysOfMonth(view.year, view.month) || []);
  let currentDay = new Date().getDate();

  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the time to 00:00:00
</script>

<div class="app-container" class:dark={theme === "dark"}>
  <Nav />
  <h1>{view.month} - {monthIndexToName(view.month)} {view.year}</h1>
  <button on:click={view.decrementMonth}>{"<"}</button>
  <button on:click={view.incrementMonth}>{">"}</button>

  {#if view.view === View.Calendar}<CalendarView {daysOfTheMonth} {currentDate} data={data[view.year][view.month + 1]} />{/if}
  {#if view.view === View.List}<ListView {daysOfTheMonth} {currentDate} />{/if}
</div>

<style>
  .app-container {
    --primary-color: black;
    --secondary-color: white;
    font-family: sans-serif;
  }
  .app-container.dark {
    --primary-color: white;
    --secondary-color: black;
  }
</style>
