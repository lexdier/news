<template>
  <BListGroup class="scrollspy">
    <template v-for="(item, index) in items">
      <BLink :key="index" router-tag="li" :to="item.to">
        <a>
          <FontAwesome :name="item.icon" mode="thin" class="pe-3"/>
          <span v-text="item.title"/>
        </a>
      </BLink>
    </template>
  </BListGroup>
</template>

<script lang="ts">
import FontAwesome from '@merkaly/components/src/FontAwesome/FontAwesome.vue'
import {Component, Vue} from 'nuxt-property-decorator'

@Component({components: {FontAwesome}})
export default class TheSidebar extends Vue {
  protected get items() {
    return [
      {title: 'Basic Information', to: '/', icon: 'circle-info'},
      {title: 'Username', to: '/username', icon: 'user'},
      {title: 'Password', to: '/password', icon: 'lock'},
      {title: 'Privacy and Safety', to: '/privacy', icon: 'fingerprint'},
    ]
  }
}
</script>
