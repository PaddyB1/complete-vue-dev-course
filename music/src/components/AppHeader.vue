<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4 hover:text-blue-600"
        :to="{ name: 'home' }"
        exact-active-class="text-blue-500"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <RouterLink class="px-2 text-white" :to="{ name: 'about' }">{{
              $t('header.about')
            }}</RouterLink>
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">{{
              $t('header.login')
            }}</a>
          </li>
          <template v-else>
            <li>
              <RouterLink class="px-2 text-white" :to="{ name: 'manage' }">{{
                $t('header.manage')
              }}</RouterLink>
            </li>

            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">{{
                $t('header.logOut')
              }}</a>
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="changeLocale">
              {{ currentLocale }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'
export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === 'sp' ? 'English' : 'Español'
    }
  },
  methods: {
    toggleAuthModal() {
      this.$nextTick(() => {
        this.modalStore.isOpen = !this.modalStore.isOpen
      })
    },
    signOut() {
      this.userStore.signOut()

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' })
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'sp' ? 'en' : 'sp'
    }
  }
}
</script>
