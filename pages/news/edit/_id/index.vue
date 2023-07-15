<template>
  <BOverlay :show="loading">
    <NewsForm v-model="news" @handleNews="update"/>
  </BOverlay>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import NewsForm from "../../../../components/NewsForm.vue";
import {News} from "../../../../interfaces/news";

@Component({components: {NewsForm}})
export default class EditNews extends Vue {

  public id = ""

  public loading = false

  protected news: News = {
    title: '',
    description: '',
    url: '',
    author: '',
    source: '',
    tags: [],
  }

  mounted() {
    this.id = this.$route.params.id

    this.$axios.$get(`news/${this.id}`)
      .then((news) => {
        this.news = news
      })
  }

  public update() {
    this.loading = true

    this.$axios.put(`/news/${this.id}`, this.news)
      .then(() => {
        this.loading = false
        this.$router.back()
      })
  }
}
</script>
