<script lang="ts">
  import { monthIndexToName } from "$lib/utils";
  let { daysOfTheMonth, currentDate, data } = $props();
</script>

<div class="calendar-container">
  {#each daysOfTheMonth as day}
    <div class:currentDay={currentDate.toISOString() === day.toISOString()} class="calendar-day">
      <div class="date">
        {day.getDate()}
      </div>
      <div class="info">
        {data[day.toLocaleDateString()]}
      </div>
    </div>
  {/each}
</div>

<style>
  .calendar-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1270px;
    margin: auto;
  }
  .calendar-day {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .calendar-day.currentDay {
    background-color: red;
  }
  .date {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
