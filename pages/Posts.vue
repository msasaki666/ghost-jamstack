<template>
  <div class="posts">
    <div>投稿</div>
    <ul>
      <li v-for="post in posts" :key="post.uuid">
        <nuxt-link :to="{ path: `/posts/${post.slug}` }">{{
          post.title
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
    const posts = await api.post.getAll()
    return {
      posts,
    }
  },
}
</script>

<style lang="scss" scoped>
$this: posts;
</style>
