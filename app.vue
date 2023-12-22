<template>
  <div class="font-sans">
    <!-- 路由 -->
    <NuxtPage />
    <h1 class="bg-primary-400 text-white rounded-full mt-1 p-2 cursor-pointer">
      Vue 3 + Vite + SSR + Tailwind CSS
    </h1>
    <!-- 跳转到about -->
    <nuxt-link
      class="rounded-full border border-primary-500 text-primary-500 mt-1 p-2 cursor-pointer"
      to="/about"
      >About</nuxt-link
    >
    <UNotifications />
  </div>
</template>
<style>
html {
  font-size: 14px;
}
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
