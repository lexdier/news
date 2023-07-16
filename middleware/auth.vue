<template>
  <h1>This is a Middleware</h1>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class auth extends Vue {

  mounted() {
    if (!this.$auth.user) {
      return this.$auth.loginWith('auth0')
    }
  }

}
</script>
