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
        this.$router.push('/')
        this.$toast.success('News created successfully')
      })
      .catch(({response: {data}}) => {
        console.log(data.message);
        this.$toast.error(data.message[0])
      })
      .finally(() => {
        this.loading = false
      })
  }

}
</script>
