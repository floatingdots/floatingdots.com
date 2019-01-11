import Vue from 'vue'
import VueGoogleMaps from 'vue-googlemaps'
import 'vue-googlemaps/dist/vue-googlemaps.css'

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: process.env.googleMapsApi,
    libraries: ['places'],
    useBetaRenderer: false,
  },
})
