<script lang="ts">
  import Timeslot from "./timeslot.svelte";

  let { daysOfTheMonth, currentDate, monthData } = $props<any>();
</script>

<div class="calendar-container">
  {#each daysOfTheMonth as day}
    <div class:currentDay={currentDate.toISOString() === day.toISOString()} class="calendar-day">
      <div class="date">
        {day.getDate()}
      </div>
      <div class="info">
        {#if monthData[day.toLocaleDateString()]}
        {#each monthData[day.toLocaleDateString()] as timeslot}
        <Timeslot {timeslot} />
        {/each}
        {/if}
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
    flex: 1 0 40%;
    /* width: 100px; */
    min-height: 100px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 8px;
    gap: 8px;
  }
  .calendar-day.currentDay {
    background-color: red;
  }
  .date {
    /* background-color: var(--secondary-color);
    color: var(--primary-color); */
    /* border-radius: 50%; */
    width: 20px;
    flex: 0 0 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: absolute; */
    left: 8px;
    top: 8px;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top:10px;
  }
  @media (min-width: 768px) {
    .calendar-day {
      flex: 1 0 20%;
      min-height: 200px;
    }
  }
</style>
