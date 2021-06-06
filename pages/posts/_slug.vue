<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.html" />
  </div>
</template>

<script>
import api from '../../api'

export default {
  async asyncData({ params }) {
    const post = await api.post.getBySlug(params.slug)
    return { post }
  },
}
</script>
