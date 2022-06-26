<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
</script>

<template>
  <el-button>Hello</el-button>
  <Footer />
</template>
