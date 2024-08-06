import {createRouter, createWebHashHistory} from 'vue-router';
import Characters from '../components/Characters.vue';
import CharacterDetails from '../components/CharacterDetails.vue'
import Episodes from '../components/Episodes.vue'
import EpisodeDetails from '../components/EpisodeDetails.vue';
import Locations from '../components/Locations.vue';
import LocationDetails from '../components/LocationDetails.vue';


const routes = [
    {
        path: '/',
        name: 'characters',
        component: Characters
    },
    {
        path: '/character/:id',
        name: 'character-details',
        component: CharacterDetails
    },
    {
        path: '/episodes',
        name: 'episodes',
        component: Episodes
    },
    {
        path: '/episode/:id',
        name: 'episode-details',
        component: EpisodeDetails
    },
    {
        path: '/locations',
        name: 'locations',
        component: Locations
    },
    {
        path: '/location/:id',
        name: 'location-details',
        component: LocationDetails
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
