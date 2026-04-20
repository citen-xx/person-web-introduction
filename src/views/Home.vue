<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <!-- Hero Section -->
    <section class="py-24 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <!-- 左侧信息 -->
          <div class="lg:w-1/2">
            <div class="mb-2">
              <span class="bg-blue-600/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
                全栈开发者 & AI 架构师
              </span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Hi, 我是刘益华
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              构建高并发后端与 AI 智能体应用
            </p>
            <div class="flex flex-wrap gap-4 mb-8">
              <a href="/projects" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20">
                查看项目
              </a>
              <a href="/public/personresume.pdf" target="_blank" class="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg border border-gray-700 transition-all duration-300 hover:shadow-lg flex items-center gap-2 group">
                <span class="text-lg">📄</span>
                获取简历
                <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span class="text-sm">GH</span>
              </div>
              <div class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span class="text-sm">IN</span>
              </div>
              <div class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span class="text-sm">TG</span>
              </div>
            </div>
          </div>
          
          <!-- 右侧自我介绍 -->
          <div class="lg:w-1/2">
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-colors">
              <p class="text-gray-300 leading-relaxed">
                目前专业排名前 10% (GPA: 4.8 / 5.0)，持有华为 HCCDP-AI 高级认证。专注于分布式架构与 RAG 落地实践。
              </p>
              <div class="mt-6 flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-green-400 text-sm font-medium">
                  目前可用
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能栈区域 -->
    <section class="py-20 px-4 bg-gray-800/50">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            技能栈
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            专注于后端架构、AI 研发和全栈开发，具备丰富的项目经验
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 后端架构 -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <span class="text-blue-400 text-xl">⚙️</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">
              后端架构
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                Spring Boot
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                Redis
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                MyBatis-Plus
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                并发编程
              </span>
            </div>
          </div>

          <!-- 数据库 -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
            <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <span class="text-green-400 text-xl">🗃️</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">
              数据库
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                MySQL
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                索引调优
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                MVCC
              </span>
            </div>
          </div>

          <!-- AI 研发 -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <span class="text-purple-400 text-xl">🤖</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">
              AI 研发
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                Dify
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                RAG
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                LangChain
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                提示词工程
              </span>
            </div>
          </div>

          <!-- 前端与 DevOps -->
          <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
            <div class="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
              <span class="text-yellow-400 text-xl">🚀</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">
              前端与 DevOps
            </h3>
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                Vue3
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                Trae
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                Docker
              </span>
              <span class="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded">
                Git
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>