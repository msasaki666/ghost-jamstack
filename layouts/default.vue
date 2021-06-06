<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon>mdi-{{ `${drawer ? 'close' : 'menu'}` }}</v-icon>
      </v-app-bar-nav-icon>
      <v-btn to="/" nuxt>
        <v-toolbar-title> {{ title }} </v-toolbar-title>
      </v-btn>
    </v-app-bar>
    <v-main app>
      <!-- fluid="true"でv-rowの左右の余白を消せる -->
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Posts',
          to: '/posts',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Pages',
          to: '/pages',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tags',
          to: '/tags',
        },
      ],
      title: 'Vuetify.js',
    }
  },
}
</script>
