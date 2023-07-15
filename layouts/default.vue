<template>
  <main>
    <TheHeader/>
    <BContainer class="my-5">
      <BRow>
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

@Component({components: {TheHeader}})
export default class Default extends Vue {

}
</script>
