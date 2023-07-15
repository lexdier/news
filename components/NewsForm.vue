<template>
  <BForm v-if="news">
    <BCard no-body>
      <BCardHeader>
        <BRow align-h="end">
          <BCol>
            <span class="h2">Create your News</span>
          </BCol>
          <BCol cols="auto">
            <slot name="slot"/>
          </BCol>
        </BRow>
      </BCardHeader>
      <BCardBody>
        <BRow align-v="center" class="mb-4 g-4">
          <BCol lg="6">
            <BFormGroup label="Title">
              <BFormInput v-model="news.title" required type="text"/>
            </BFormGroup>
          </BCol>
          <BCol lg="6">
            <BFormGroup label="Author">
              <BFormInput v-model="news.author" required type="text"/>
            </BFormGroup>
          </BCol>
          <BCol lg="6">
            <BFormGroup label="Link">
              <BFormInput v-model="news.url" required type="url"/>
            </BFormGroup>
          </BCol>
          <BCol lg="6">
            <BFormGroup label="Source">
              <BFormInput v-model="news.source" required type="text"/>
            </BFormGroup>
          </BCol>
          <BCol lg="12">
            <BFormGroup label="Description">
              <BFormTextarea v-model="news.description" required type="text"/>
            </BFormGroup>
          </BCol>
          <BCol lg="6">
            <BFormGroup label="Tags">
              <BFormTags v-model="news.tags" type="text"/>
            </BFormGroup>
          </BCol>
        </BRow>
      </BCardBody>

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
import {News} from "../interfaces/news";

@Component({})
export default class NewsForm extends Vue {
  @VModel({type: Object})
  public news: News | undefined
}
</script>
