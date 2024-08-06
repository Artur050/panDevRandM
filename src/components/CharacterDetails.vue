<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        character: null
      };
    },
    mounted() {
      const id = this.$route.params.id;
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          this.character = response.data;
        });
    },
    methods: {
      getStatusColor(status) {
        if (status === 'Alive') {
        return 'bg-green-500';
      } else if (status === 'Dead') {
        return 'bg-red-500';
      } else {
        return 'bg-gray-500';
      }
      },
    }

  };
</script>

<template>
  <div className="flex justify-start pt-[60px] pl-2 m-0 text-black">
    <a className="flex bg-slate-400 rounded-md p-2 " @click="$router.go(-1)">back</a>
  </div>
  <div className="flex justify-center">
    <div v-if="character" className="flex flex-col items-center justify-start text-center rounded-xl bg-slate-500 w-[250px] h-[350px] mt-[50px] text-sm text-surface dark:text-white">
      <img :src="character.image" :alt="character.name" className="rounded-t-lg">
      <h1>{{ character.name }}</h1>
      <div className="flex justify-center items-center gap-1">
        <div :class="[getStatusColor(character.status)]" class="w-4 h-4 rounded-full"></div>
        {{ character.status }} - {{ character.species }}
      </div>
      <p>Gender: {{ character.gender }}</p>
      <p>Location: {{ character.location.name }}</p>
    </div>
  </div>   
</template>
  