<template>
  <div>
    <!-- 路由 -->
    <NuxtPage />
    <h1>Vue 3 + Vite + SSR + Tailwind CSS</h1>
    <!-- 跳转到about -->
    <nuxt-link to="/about">About</nuxt-link>
    <UNotifications />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
