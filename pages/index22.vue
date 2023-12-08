<template>
  <div>
    <h1>index Page</h1>
    <p>This is the index page.</p>
    <div>{{ typeof data }}：</div>
    <div>{{ data }}</div>
    <div></div>
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/news', { method: 'POST' })
console.log(data.value)
</script>
