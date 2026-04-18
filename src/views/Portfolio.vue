<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
        作品集
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="h-48 bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500">项目截图</span>
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              电商网站
            </h2>
            <p class="text-gray-600 mb-4">
              使用 Vue3 + TypeScript + TailwindCSS 开发的电商网站...
            </p>
            <button class="text-blue-500 hover:text-blue-600 font-medium">
              查看详情
            </button>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="h-48 bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500">项目截图</span>
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              管理系统
            </h2>
            <p class="text-gray-600 mb-4">
              基于 Vue3 + Element Plus 开发的后台管理系统...
            </p>
            <button class="text-blue-500 hover:text-blue-600 font-medium">
              查看详情
            </button>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="h-48 bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500">项目截图</span>
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              移动端应用
            </h2>
            <p class="text-gray-600 mb-4">
              使用 Vue3 + Vite + TailwindCSS 开发的移动端应用...
            </p>
            <button class="text-blue-500 hover:text-blue-600 font-medium">
              查看详情
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>