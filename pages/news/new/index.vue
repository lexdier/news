<template>
  <BForm>
    <BCard header="Create your news">
      <BRow align-v="center" class="mb-4 g-4">
        <BCol lg="6">
          <BFormGroup label="Title">
            <BFormInput v-model="news.title" type="text"/>
          </BFormGroup>
        </BCol>
        <BCol lg="6">
          <BFormGroup label="Author">
            <BFormInput v-model="news.author" type="text"/>
          </BFormGroup>
        </BCol>
        <BCol lg="6">
          <BFormGroup label="Link">
            <BFormInput v-model="news.url" type="url"/>
          </BFormGroup>
        </BCol>
        <BCol lg="6">
          <BFormGroup label="Source">
            <BFormInput v-model="news.source" type="text"/>
          </BFormGroup>
        </BCol>
        <BCol lg="12">
          <BFormGroup label="Description">
            <BFormTextarea v-model="news.description" type="text"/>
          </BFormGroup>
        </BCol>
        <BCol lg="6">
          <BFormGroup label="Tags">
            <BFormTags v-model="news.tags" type="text"/>
          </BFormGroup>
        </BCol>
      </BRow>

      <template #footer>
        <BRow align-h="end">
          <BCol cols="auto">
            <BBtn variant="danger" @click="$router.back()">
              <span>Cancel</span>
            </BBtn>
          </BCol>
          <BCol cols="auto">
            <BBtn variant="primary" @click="createNews">
              <span>Save</span>
            </BBtn>
          </BCol>
        </BRow>
      </template>
    </BCard>
  </BForm>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class NewNews extends Vue {

  protected news = {
    title: '',
    description: '',
    url: '',
    author: '',
    source: '',
    tags: [],
  }

  public createNews() {
    this.$axios.post('news', this.news)
    this.$router.push('/')
  }

}
</script>
