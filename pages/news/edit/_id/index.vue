<template>
  <BOverlay :show="loading">
    <NewsForm v-model="news" @handleNews="update">
      <template #slot>
        <BBtn variant="danger" @click="remove">
          <FontAwesome name="trash" mode="thin"/>
        </BBtn>
      </template>
    </NewsForm>
  </BOverlay>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import NewsForm from "../../../../components/NewsForm.vue";
import {News} from "../../../../interfaces/news";
import FontAwesome from "@merkaly/components/src/FontAwesome/FontAwesome.vue";

@Component({components: {NewsForm, FontAwesome}})
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

  public async update() {
    const permission = await this.$bvModal.msgBoxConfirm('Are you sure you want to save it?', {
      centered: true
    })

    if (!permission) {
      return
    }

    this.loading = true

    this.$axios.put(`/news/${this.id}`, this.news)
      .then(() => {
        this.loading = false
        this.$router.back()
      })
      .finally(() => {
        this.$toast.success('News updated successfully')
      })
  }

  public async remove() {
    const confirm = await this.$bvModal.msgBoxConfirm('Are you sure you want to save it?', {
      centered: true
    })
    if (!confirm) {
      return
    }

    this.$axios.delete(`/news/${this.id}`)
      .then(() => (this.$toast.success('The news was successfully removed')))
      .finally(() => {
        this.$router.push('/')
      })
  }
}
</script>
