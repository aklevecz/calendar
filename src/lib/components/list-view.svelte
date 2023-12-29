<script lang="ts">
  import Timeslot from "$lib/components/timeslot.svelte";
  import { getOrdinalSuffix, formatDayOfTheWeekShort } from "$lib/utils";

  type Props = {
    daysOfTheMonth: Date[];
    currentDate: Date;
    monthData: any;
  };
  let { daysOfTheMonth, currentDate, monthData } = $props<Props>();
</script>

<div class="list-container">

  {#each daysOfTheMonth as day}
  {#if monthData[day.toLocaleDateString()]}

    <div class="day-container">
      <h3 class="day">{formatDayOfTheWeekShort(day)}</h3>
        <div class="timeslot-container">
          {#each monthData[day.toLocaleDateString()] as timeslot}
            <Timeslot {timeslot} />
          {/each}
        </div>
    </div>
    {/if}

  {/each}

</div>

<style>
  .day-container {
    margin-bottom: 1rem;
  }
  .day {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-decoration: underline;
  }
  .timeslot-container {
    display: flex;
    flex-direction:column;
    gap: 1rem;
    margin-left: .5rem;
  }

</style>
