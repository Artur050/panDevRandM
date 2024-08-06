<script>
import axios from 'axios';

export default {
  data() {
    return {
      characters: [],
      currentPage: 1,
      totalPages: 1,
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  methods: {
    async fetchCharacters() {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${this.currentPage}`);
        this.characters = response.data.results;
        this.totalPages = response.data.info.pages;
      } catch (error) {
        console.error('Ошибка при загрузке персонажей:', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchCharacters();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchCharacters();
      }
    },
  }
};
</script>

<template>
  <div className="flex flex-col md:grid md:grid-cols-3 md:content-center md:place-items-center items-center pt-[80px] justify-center text-sm font-light text-surface">
    <div className="hover:text-white bg-slate-400 rounded-xl mb-5 w-[250px] md:w-[150px] lg:w-[250px]" v-for="character in characters" :key="character.id">
      <router-link :to="'/character/' + character.id">
        <img :src="character.image" :alt="character.name" className="rounded-t-lg">
        <p className="text-center">{{ character.name }}</p>
      </router-link>
    </div>
  </div>
  <div className="flex justify-center gap-2">
    <button @click="prevPage" :disabled="currentPage === 1" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" >&#8592;</button>
    <button @click="nextPage" :disabled="currentPage === totalPages" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">&#8594;</button>
  </div>
</template>