<template>
  <div class="about">
    <h1 v-t="'This is an about page'"></h1>
    <h3>{{subHeader}}</h3>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const subHeader = ref(t("Test subHeader"));
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
