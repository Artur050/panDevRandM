<script>
  export default {
    data() {
      return {
        location: {},
        residents: []
      };
    },
    async created() {
      const locationId = this.$route.params.id;
      const response = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`);
      const data = await response.json();
      this.location = data;
      
      const residentPromises = data.residents.map(url => fetch(url).then(res => res.json()));
      this.residents = await Promise.all(residentPromises);
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
            <th scope="col" className="px-1 py-1 pt-[80px]"> {{ location.name }} <br>Type: {{ location.type }} <br> Dimension: {{ location.dimension }} </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="resident in residents" :key="resident.id" class="border-b border-neutral-200 dark:border-white/10 hover:text-black/60" >
            <td class="whitespace-nowrap px-1 py-1 font-medium">
              <router-link :to="`/character/${resident.id}`">
                {{ resident.name }}
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
  