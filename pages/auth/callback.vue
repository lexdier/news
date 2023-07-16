<template>
  <BSpinner label="Loading"/>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class callback extends Vue {

  mounted() {
    if (this.$route.hash.startsWith('#error')) {
      const params = new URLSearchParams(this.$route.hash.slice(1));
      const statusCode = {
        access_denied: 403
      };

      const error = String(params.get('error'));
      const message = String(params.get('error_description'));

      return this.$nuxt.error({
        message,
        statusCode: statusCode[error as 'access_denied'] || 500
      });
    }
  }
}
</script>
