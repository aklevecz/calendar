<script lang="ts">
  import { getOrdinalSuffix } from "$lib/utils.js";

  type Props = {
    daysOfTheMonth: Date[];
    currentDate: Date;
  };
  let { daysOfTheMonth, currentDate } = $props<Props>();
  console.log(daysOfTheMonth)
</script>

<div class="list-container">
  {#each daysOfTheMonth as day}
    <div class="day">{`${day.toLocaleDateString("en-US", { weekday: "long" })} the ${day.getDate()}${getOrdinalSuffix(day.getDate())}`}</div>
  {/each}
</div>

<style>
  .day {
    font-size: 2rem;
    font-weight: bold;
  }
</style>
