<script>
export default {
  data() {
    return {
      episode: {},
      characters: []
    };
  },
  async created() {
    const episodeId = this.$route.params.id;
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`);
      const data = await response.json();
      this.episode = data;
      
      const characterPromises = data.characters.map(url => fetch(url).then(res => res.json()));
      this.characters = await Promise.all(characterPromises);
    } catch (error) {
      console.log('Ошибка при получении деталей эпизодов', error)
    }
  }
};
</script>

<template>
    <div>
      <table 
    class="min-w-full text-center text-sm font-light text-surface dark:text-white">
      <thead
      class="border-b border-neutral-200 font-medium dark:border-white/10">
        <tr>
          <th scope="col" className="px-1 py-1 pt-[80px]"> {{ episode.name }} - {{ episode.air_date }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" :key="character.id" class="border-b border-neutral-200 dark:border-white/10 hover:text-black/60" >
          <td class="whitespace-nowrap px-1 py-1 font-medium">
            <router-link :to="`/character/${character.id}`">
            	{{ character.name }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
  

  