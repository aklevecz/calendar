<script lang="ts">
  import Calendar from "$lib/containers/calendar.svelte";

  let data = {
    2023: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
      11: {},
      12: {
        "12/22/2023": "Hello World",
      },
    },
    2024: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
      11: {},
      12: {},
    },
  };
</script>

<Calendar {data} />
