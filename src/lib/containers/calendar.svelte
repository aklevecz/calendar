<script context="module">
	export const calendarEventKey = Symbol();
</script>

<script lang="ts">
  import CalendarView from "$lib/components/calendar-view.svelte";
  import CirclePulse from "$lib/components/circle-pulse.svelte";
  import ListView from "$lib/components/list-view.svelte";
  import Nav from "$lib/components/nav.svelte";
  import storage, { storageKey } from "$lib/storage.js";
  import { getDaysOfMonth, monthIndexToName } from "$lib/utils.js";
  import view, { View } from "$lib/view.svelte";
  import { onMount, setContext, createEventDispatcher } from "svelte";

  Date.prototype.toPSTTimeString = function () {
    return this.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true, timeZone: "PST" });
  };
  
  let { data } = $props<any>();
  let monthData = $derived(data[view.year][view.month + 1]);

  let theme = "light";

  // container for the calendar component
  let daysOfTheMonth: Date[] = $derived(getDaysOfMonth(view.year, view.month) || []);
  let currentDay = new Date().getDate();

  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the time to 00:00:00


  let loaded = $state(false)
  onMount(() => {
    const cachedView = storage.get(storageKey.View);
    if (cachedView) {
      view.changeView(cachedView as any);
    }
    loaded = true

  })

  const dispatch = createEventDispatcher();
  setContext(calendarEventKey, {dispatch})
</script>
<div class="app-container" class:dark={theme === "dark"}>
  <Nav />

  <div class="calendar-header">
  <h1 class="page-title">{monthIndexToName(view.month)} {view.year}</h1>
  <button class="btn-icon" on:click={view.decrementMonth}>{"<"}</button>
  <button class="btn-icon" on:click={view.incrementMonth}>{">"}</button>
  </div>

  {#if loaded}
  {#if view.view == View.Calendar}<CalendarView {daysOfTheMonth} {currentDate} {monthData} />{/if}
  {#if view.view == View.List}<ListView {daysOfTheMonth} {currentDate} {monthData} />{/if}
  {:else}

  <CirclePulse/>
  {/if}
</div>

<style>
  .app-container {
    --primary-color: black;
    --secondary-color: white;
    font-family: inherit;
  }
  .app-container.dark {
    --primary-color: white;
    --secondary-color: black;
  }
  .calendar-header {
    display: flex;
    margin: 10px 0px 20px;
  }
  .page-title {
    margin: 0px;
  }
  :global(button) {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    padding: .5rem 1rem;
  }
  :global(button.btn-icon) {
    background: none;
    /* color: var(--primary-color); */
    font-weight: bold;
    padding: 6px;
  }
</style>
