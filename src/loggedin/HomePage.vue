<template>


<a class="nav-link" @click=logout href="/home">Log out</a>

                
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'logout'
    ])
  },
}
</script>

<style>
.nav_login{
    display: none;
}
</style>

