<template>
  <div>
    <h1>index Page</h1>
    <p>This is the index page.</p>
    <div>{{ typeof data }}：</div>
    <div>
      <ul>
        <li>123</li>
      </ul>
    </div>
    <div class="flex">
      <!-- 左边头像 -->
      <div class="w-16">avatar</div>
      <!-- 右边内容 -->
      <div class="flex-grow">
        content content content content content content
      </div>
    </div>
    <div>{{ data }}</div>
    <div
      class="bg-white border border-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:border-gray-700"
      role="alert"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="flex-shrink-0 h-4 w-4 text-blue-600 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <div class="ms-3">
          <h3 class="text-gray-800 font-semibold dark:text-white">
            New version published
          </h3>
          <p class="mt-2 text-sm text-gray-700 dark:text-gray-400">
            Chris Lynch published a new version of this page. Refresh to see the
            changes.
          </p>
        </div>
      </div>
    </div>
    <div @click="clickReflush">刷新</div>
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/news', { method: 'POST' })
console.log(data.value)
const clickReflush = () => {
  // 使用$fetch()
  $fetch('/api/news', { method: 'POST' })
}
</script>
