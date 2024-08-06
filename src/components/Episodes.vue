<script>
  export default {
    data() {
      return {
        episodes: []
      };
    },
    async created() {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const data = await response.json();
      this.episodes = data.results;
    }
  };
</script>

<template>
  <div className="pt-20 text-center overflow-x-hidden border-solid ">
    <table 
    class="min-w-full text-left text-sm font-light text-surface dark:text-white">
      <thead
      class="border-b border-neutral-200 font-medium dark:border-white/10">
        <tr>
          <th scope="col" class="px-1 py-1">Episod</th>
          <th scope="col" class="px-1 py-1">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="episode in episodes" :key="episode.id" class="border-b border-neutral-200 dark:border-white/10 hover:text-black/60" >
          <td class="whitespace-nowrap px-1 py-1 font-medium"><router-link :to="`/episode/${episode.id}`">
          {{ episode.name }}
        </router-link></td>
          <td class="whitespace-nowrap px-2 py-2">{{ episode.air_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  