<template>
  <GooglemapsMap ref="map" :center.sync="position" :zoom.sync="zoom" class="map">
    <GooglemapsMarker :position="position" title="Paris" />
  </GooglemapsMap>
</template>
<script>
export default {
  data() {
    return {
      position: {
        lat: 40.7522014,
        lng: -73.986335,
      },
      userPosition: null,
      zoom: 12,
    }
  },
}
</script>
