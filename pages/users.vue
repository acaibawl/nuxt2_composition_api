<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtChild />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UsersParentVue',
})
</script>
