<template>
  <div class="result" v-for="result in results">
    <template
      v-if="result.min <= questionsCorrect && result.max >= questionsCorrect"
    >
      <div class="title">{{ result.title }}</div>
      <div class="desc">{{ result.desc }}</div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["results", "questionsCorrect"],
};
</script>
