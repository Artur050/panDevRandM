<script>
  export default {
    data() {
      return {
        locations: []
      };
    },
    async created() {
      const response = await fetch('https://rickandmortyapi.com/api/location');
      const data = await response.json();
      this.locations = data.results;
    }
  };
</script>

<template>
    <div>
      <table 
      class="min-w-full text-left text-sm font-light text-surface dark:text-white">
      <thead
      class="border-b border-neutral-200 font-medium dark:border-white/10">
        <tr>
          <th scope="col" className="px-1 py-1 pt-[80px]"> Location </th>
          <th scope="col" className="px-1 py-1 pt-[80px]"> Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in locations" :key="location.id" class="border-b border-neutral-200 dark:border-white/10 hover:text-black/60" >
          <td class="whitespace-nowrap px-1 py-1 font-medium">
            <router-link :to="`/location/${location.id}`">
            	{{ location.name }}
            </router-link>
          </td>
          <td>
            <router-link :to="`/location/${location.id}`">
            	{{ location.type }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
  

  