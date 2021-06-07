<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div>Latest Post</div>
        <v-sheet rounded="lg" elevation="1">
          <v-row>
            <v-col cols="8">
              <v-card
                :key="posts[0].uuid"
                elevation="2"
                min-height="100px"
                min-width="100px"
                ><nuxt-link :to="{ path: `/posts/${posts[0].slug}` }">
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="360"
                    max-width="600"
                    :src="posts[0].feature_image"
                  ></v-img></nuxt-link
              ></v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                :key="posts[0].uuid"
                elevation="2"
                min-height="100px"
                min-width="100px"
                ><nuxt-link :to="{ path: `/posts/${posts[0].slug}` }"
                  ><v-card-title>{{ posts[0].title }}</v-card-title></nuxt-link
                >
                <v-card-text
                  >{{ posts[0].reading_time }}分
                </v-card-text></v-card
              >
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <div>Posts</div>
        <v-sheet rounded="lg" elevation="1">
          <template v-for="post in secondaryPosts">
            <v-card
              :key="post.uuid"
              elevation="2"
              min-height="100px"
              min-width="100px"
              ><nuxt-link :to="{ path: `/posts/${post.slug}` }">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="300"
                  max-width="500"
                  :src="post.feature_image"
                ></v-img
                >{{ post.title }}</nuxt-link
              >
              <v-card-text>{{ post.reading_time }}分 </v-card-text></v-card
            >
          </template>
        </v-sheet>
      </v-col>
      <v-col cols="4">
        <div>Tags</div>
        <v-sheet rounded="lg" elevation="1">
          <template v-for="tag in tags">
            <v-chip :key="tag.uuid" color="secondary" label outlined>
              <v-icon left> mdi-label </v-icon>
              <nuxt-link :to="{ path: `/tags/${tag.slug}` }">{{
                tag.name
              }}</nuxt-link>
            </v-chip>
          </template>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
  <!-- <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row> -->
</template>

<script>
import {} from '@nuxtjs/composition-api'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import api from '~/api'

export default {
  setup() {},
  async asyncData() {
    const pages = await api.page.getAll()
    const posts = await api.post.getAll()
    const tags = await api.tag.getAll()
    return {
      pages,
      posts,
      tags,
    }
  },
  computed: {
    secondaryPosts() {
      return this.posts.filter((_, index) => index !== 0)
    },
  },
}
</script>
