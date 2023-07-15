<template>
  <BOverlay :show="loading">
    <NewsForm v-model="news" @handleNews="createNews"/>
  </BOverlay>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NewsForm from "../../../components/NewsForm.vue";
import {News} from "../../../interfaces/news";

@Component({components: {NewsForm}})
export default class NewNews extends Vue {

  public loading = false

  protected news: News = {
    title: '',
    description: '',
    url: '',
    author: '',
    source: '',
    tags: [],
  }

  public createNews() {
    this.loading = true

    this.$axios.post('news', this.news)
      .then(() => {
        this.loading = true
        this.$router.push('/')
      })
      .finally(() => {
        this.$toast.success('News created successfully')
      })
  }

}
</script>
