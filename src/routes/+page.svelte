<script lang="ts">
  import {Calendar} from "$lib"

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
        "12/1/2023": [
          { name: "yaytso gallery", description: "a timeslot for the flower show at yaytso gallery", time: new Date("12/1/2023 08:00 GMT-0800") },
          { name: "yaytso gallery", description: "a timeslot for the flower show at yaytso gallery", time: new Date("12/1/2023 09:00 GMT-0800") },
          { name: "yaytso gallery", description: "a timeslot for the flower show at yaytso gallery", time: new Date("12/1/2023 10:00 GMT-0800") },
          { name: "yaytso gallery", description: "a timeslot for the flower show at yaytso gallery", time: new Date("12/1/2023 11:00 GMT-0800") },
          { name: "yaytso gallery", description: "a timeslot for the flower show at yaytso gallery", time: new Date("12/1/2023 12:00 GMT-0800") },
        ],
        "12/22/2023": [{ name: "Hello World" }],
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

<Calendar on:booking={console.log} {data} />
