<template>
  <div class="not-found">
    <h1 class="text-2xl font-bold">Oops! Page not found.</h1>
    <p class="text-lg">
      Looks like you've stumbled upon a broken link or mistyped the URL. No worries, you can head
      back to the homepage or explore some other options below.
    </p>
    <ul>
      <li><router-link :to="{ name: 'home' }">Go to homepage</router-link></li>
      <li><RouterLink :to="{ name: 'about' }">Read about us</RouterLink></li>
    </ul>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 20px;
}

li {
  color: blue;
  font-size: large;
}
</style>
