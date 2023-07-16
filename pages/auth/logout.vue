<template>
  <BSpinner label="Loading"/>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class callback extends Vue {

  mounted() {
    this.$auth.loggedIn
      ? this.$auth.logout()
      : this.$router.push('/');
  }
}
</script>
