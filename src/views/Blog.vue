<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          技术博客
        </h1>
        <div class="space-y-8">
          <!-- 博客文章 1 -->
          <article class="bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span class="text-gray-400">Vue3 特性</span>
                </div>
              </div>
              <div class="md:w-2/3">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-blue-900/50 text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
                    Vue3
                  </span>
                  <span class="text-gray-500 text-sm">2026-04-10</span>
                </div>
                <h2 class="text-2xl font-semibold mb-3">
                  Vue3 新特性深度解析
                </h2>
                <p class="text-gray-400 mb-6">
                  深入探讨 Vue3 的 Composition API、Teleport、Suspense 等新特性，以及它们如何改善前端开发体验和性能...
                </p>
                <button class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors duration-300">
                  阅读全文
                  <span>→</span>
                </button>
              </div>
            </div>
          </article>

          <!-- 博客文章 2 -->
          <article class="bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-green-500/50">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span class="text-gray-400">TypeScript</span>
                </div>
              </div>
              <div class="md:w-2/3">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-green-900/50 text-green-400 text-sm font-medium px-3 py-1 rounded-full">
                    TypeScript
                  </span>
                  <span class="text-gray-500 text-sm">2026-04-05</span>
                </div>
                <h2 class="text-2xl font-semibold mb-3">
                  TypeScript 大型项目最佳实践
                </h2>
                <p class="text-gray-400 mb-6">
                  分享 TypeScript 在大型项目中的使用技巧和最佳实践，包括类型定义、接口设计、模块组织等...
                </p>
                <button class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors duration-300">
                  阅读全文
                  <span>→</span>
                </button>
              </div>
            </div>
          </article>

          <!-- 博客文章 3 -->
          <article class="bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-purple-500/50">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span class="text-gray-400">TailwindCSS</span>
                </div>
              </div>
              <div class="md:w-2/3">
                <div class="flex items-center gap-3 mb-4">
                  <span class="bg-purple-900/50 text-purple-400 text-sm font-medium px-3 py-1 rounded-full">
                    TailwindCSS
                  </span>
                  <span class="text-gray-500 text-sm">2026-03-28</span>
                </div>
                <h2 class="text-2xl font-semibold mb-3">
                  TailwindCSS 自定义配置指南
                </h2>
                <p class="text-gray-400 mb-6">
                  如何根据项目需求自定义 TailwindCSS 配置，包括主题定制、插件开发、性能优化等...
                </p>
                <button class="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors duration-300">
                  阅读全文
                  <span>→</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>