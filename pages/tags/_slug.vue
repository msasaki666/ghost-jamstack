<template>
  <div>
    <h1>{{ tag.name }}の投稿</h1>
    <ul>
      <li v-for="post in posts" :key="post.uuid">
        <nuxt-link :to="{ path: `/posts/${post.slug}` }">{{
          post.title
        }}</nuxt-link>
      </li>
    </ul>
    <h1>{{ tag.name }}のページ</h1>
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
import api from '../../api'

export default {
  async asyncData({ params }) {
    const tag = await api.tag.getBySlug(params.slug)
    const posts = await api.post.getByTag(params.slug)
    const pages = await api.page.getByTag(params.slug)
    return { tag, posts, pages }
  },
}
</script>
