<template>
  <div>
    <h1>About Page</h1>
    <p>This is the about page.</p>
    <p>Current time: {{ time }}</p>
  </div>
</template>
<script setup>
// 去404
// go404()
// 只在服务器端运行
const time = new Date().toLocaleTimeString()
</script>
