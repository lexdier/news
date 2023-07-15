<template>
  <main>
    <TheHeader/>
    <BContainer class="my-5">
      <BRow class="g-4">
        <BCol md="4" xl="3">
          <TheSidebar/>
        </BCol>
        <BCol class="d-flex justify-content-center align-items-center">
          <Nuxt/>
        </BCol>
      </BRow>
    </BContainer>
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
