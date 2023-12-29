<script lang="ts">
  import {getContext, createEventDispatcher} from "svelte";
  import view, { View } from "$lib/view.svelte";
  import Modal from "./modal.svelte";
  import {calendarEventKey} from "$lib/containers/calendar.svelte";

  type Timeslot = {
    name: string;
    time?: Date;
    description?: string;
  };
  type Props = {
    timeslot: Timeslot;
  };

  let { timeslot } = $props<Props>();
  let isList = $derived(view.view == View.List);
  let showDialog = $state(false);

  
  const dispatch = getContext(calendarEventKey).dispatch;
// const dispatch = createEventDispatcher()
function handleBooking() {
  dispatch("booking", {
      ...timeslot
  });
}
</script>

<div class="timeslot" class:list={isList} on:click={() => (showDialog = true)} role="button" tabindex="-1" aria-label="show modal info" on:keydown={() => {}}>
  <div class="timeslot-name">{timeslot.name}</div>
  {#if isList}<div class="timeslot-description">{timeslot?.description}</div>{/if}
  <div class="timeslot-time">{timeslot.time?.toPSTTimeString()}</div>
</div>

<Modal bind:showDialog>
  <h2>
    {timeslot.name}
  </h2>
  <p>
    {timeslot.time?.toPSTTimeString()}
  </p>
  <p>
    {timeslot?.description}
  </p>
  <button on:click={handleBooking}> book timeslot </button>
</Modal>

<style>
  .timeslot {
    /* display: flex;
    flex-wrap: wrap; */
    cursor: pointer;
    column-gap: 0.5rem;
    font-size: 0.75rem;
    /* border: var(--primary-color) 1px solid; */
    padding: 4px;
  }
  .timeslot.list {
    font-size: 1rem;
  }
  .timeslot.list > .timeslot-name {
    font-size: 1.25rem;
  }
  .timeslot-description, .timeslot-time {
    font-size: .75rem;
  }
</style>
