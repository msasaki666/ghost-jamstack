<template>
  <div class="pages">
    <div>ページ</div>
    <ul>
      <li v-for="page in pages" :key="page.uuid">
        <nuxt-link :to="{ path: `/pages/${page.slug}` }">{{
          page.title
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {} from '@nuxtjs/composition-api'
import api from '~/api'

export default {
  setup() {},
  async asyncData() {
    const pages = await api.page.getAll()
    return {
      pages,
    }
  },
}
</script>

<style lang="scss" scoped>
$this: pages;
</style>
