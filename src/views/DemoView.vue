<template>
  <div class="demo">
    <button @click="changeLanguage('chinese')">中文</button>
    <button @click="changeLanguage('english')">英文</button>
    <button @click="changeLanguage('hant')">繁体中文</button>
    <h1 v-t="'This is an about page'"></h1>
    <h3>{{t("Test subHeader")}}</h3>
  </div>
  
</template>
<script setup lang="ts">
import { getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { proxy } = getCurrentInstance() as any;
const changeLanguage = (type: String) => {
  console.log("当前选择的语言:" + type);
  switch (type) {
    case "chinese":
      proxy.$i18n.locale = "zh-Hans";
      break;
    case "english":
      proxy.$i18n.locale = "en";
      break;
    case "hant":
      proxy.$i18n.locale = "zh-Hant";
      break;
  }
  console.log(proxy);
};
</script>
<style>
@media (min-width: 1024px) {
  .demo {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
