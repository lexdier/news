<template>
  <main>
    <TheHeader/>
    <BRow>
      <BCol md="4" xl="3">
        <TheSidebar/>
      </BCol>
      <BCol>
        <Nuxt/>
      </BCol>
    </BRow>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import TheHeader from "../components/TheHeader.vue";
import TheSidebar from "../components/TheSidebar.vue";

@Component({components: {TheHeader, TheSidebar}})
export default class Default extends Vue {

}
</script>
