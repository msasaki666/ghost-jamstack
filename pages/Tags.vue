<template>
  <div class="tags">
    <div>Tags</div>
    <ul>
      <li v-for="tag in tags" :key="tag.uuid">
        <nuxt-link :to="{ path: `/tags/${tag.slug}` }">{{
          tag.name
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
    const tags = await api.tag.getAll()
    console.log(tags)
    return {
      tags,
    }
  },
}
</script>

<style lang="scss" scoped>
$this: tags;
</style>
