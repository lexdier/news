<template>
  <BRow class="g-4 w-75">
    <template v-for="news in newsList">
      <BCol lg="12" :key="news.id">

        <BCard class="h-100" no-body>
          <BCardHeader>
            <BRow align-h="end" align-v="center">
              <BCol>
                <BCardTitle>
                  <BLink :href="news.url" target="_blank">
                    <span class="text-uppercase" v-text="news.title"/>
                  </BLink>
                </BCardTitle>
              </BCol>
              <BCol cols="auto">
                <BBtn class="avatar rounded-circle d-flex justify-content-center align-items-center"
                      variant="outline-primary"
                      @click="$router.push(`/news/edit/${news._id}`)">
                  <i class="fa fa-pen"/>
                </BBtn>
              </BCol>
            </BRow>
          </BCardHeader>
          <BCardBody>
            <span v-text="news.description"/>
          </BCardBody>
          <BCardFooter>
            <BRow align-h="end" align-v="center">
              <BCol>
                <template v-for="(tag, index) in news.tags">
                  <span :key="index" class="me-2 text-primary">#{{ tag }}</span>
                </template>
              </BCol>
              <BCol cols="auto">
                <span class="fw-bolder">Source:</span>
                <span class="text-uppercase" v-text="news.source"/>
              </BCol>
              <BCol cols="auto">
                <span class="fw-bolder">By:</span>
                <span class="text-uppercase" v-text="news.author"/>
              </BCol>
            </BRow>
          </BCardFooter>
        </BCard>

        <div class="bottom-0 bottom-20px end-20px position-fixed w-150px z-index-1000">
          <BBtn variant="primary" @click="$router.push('/news/new')">
            <span>Create</span>
          </BBtn>
        </div>

      </BCol>
    </template>
  </BRow>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "nuxt-property-decorator";

@Component({components: {}})
export default class IndexPage extends Vue {

  public newsList = []

  mounted() {
    this.$axios.get('/news')
      .then(({data}) => {
        data.reverse()
        this.newsList = data
      })
  }
}
</script>
