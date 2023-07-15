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
            <BBtn variant="primary" @click="$emit('handleNews')">
              <span>Save</span>
            </BBtn>
          </BCol>
        </BRow>
      </template>
    </BCard>
  </BForm>
</template>

<script lang="ts">
import {Component, VModel, Vue} from 'nuxt-property-decorator'

@Component({})
export default class NewsForm extends Vue {
  @VModel()
  public news: any
}
</script>
