<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div v-html="page.html" />
  </div>
</template>

<script>
import api from '../../api'

export default {
  async asyncData({ params }) {
    const page = await api.page.getBySlug(params.slug)
    return { page }
  },
}
</script>
