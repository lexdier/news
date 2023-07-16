<template>
  <BSpinner label="Loading"/>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class callback extends Vue {

  mounted() {
    this.$auth.loginWith('auth0', {params: this.$route.query})
  }
}
</script>
