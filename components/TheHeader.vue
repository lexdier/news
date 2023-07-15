<template>
  <header class="p-5">
    <BContainer>
      <BRow align-v="center">
        <BCol>
          <BNavbarBrand @click="$router.push('/')">
            <span class="text-uppercase h1 user-select-none cursor-pointer">News</span>
          </BNavbarBrand>
        </BCol>
        <BCol col>
          <BForm class="d-none d-md-inline-block me-auto">
            <div class="input-group input-group-merge">
              <input
                type="text"
                class="form-control bg-light-green border-light-green w-250px"
                placeholder="Search..."
                aria-label="Search for any term"
              />
            </div>
          </BForm>
        </BCol>
        <BCol cols="auto">
          <div class="d-flex align-items-center">
            <FontAwesome name="sun"/>
            <div class="form-check form-switch ms-2 mb-0">
              <input class="form-check-input" type="checkbox" role="switch" v-model="dark">
            </div>
            <FontAwesome name="moon"/>
          </div>
        </BCol>
        <BCol cols="auto">
          <BDropdown
            no-caret
            size="sm"
            toggle-class="text-decoration-none"
            variant="link">
            <template #button-content>
              <div class="avatar avatar-circle avatar-sm avatar-online">
                <BAvatar class="avatar-img avatar-lg rounded-circle" size="40px"/>
              </div>
            </template>
            <BDropdownItem>
              <span>Log In</span>
            </BDropdownItem>
            <BDropdownItem>
              <span>Log Out</span>
            </BDropdownItem>
          </BDropdown>
        </BCol>
      </BRow>
    </BContainer>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {MetaInfo} from 'vue-meta'
import FontAwesome from "@merkaly/components/src/FontAwesome/FontAwesome.vue";

@Component({components: {FontAwesome}})
export default class TheHeader extends Vue {
  protected dark = true
  public visible = false

  public head(): MetaInfo {
    return {
      htmlAttrs: {
        'data-theme': this.dark ? 'dark' : 'light',
      },

      bodyAttrs: {
        class: this.visible ? 'overflow-hidden' : '',
      },
    }
  }

}
</script>

<style scoped>
.img {
  mix-blend-mode: multiply;
}
</style>
