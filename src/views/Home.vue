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

              <router-link to="/projects" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20">
                查看项目
              </router-link>
              <a href="/personresume.pdf" target="_blank" class="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20">
                查看简历
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
                目前专业排名前 10% (GPA: 4.8 / 5.0)，持有华为 HCCDP-AI 工作级认证。专注于分布式架构与 RAG 落地实践
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
    <section class="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <!-- 背景粒子效果 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div class="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
        <div class="absolute bottom-20 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse" style="animation-delay: 1s"></div>
        <div class="absolute bottom-40 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 1.5s"></div>
        <div class="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style="animation-delay: 2s"></div>
      </div>
      
      <div class="container mx-auto max-w-6xl relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            技能栈
          </h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            专注于后端架构、AI 研发和全栈开发，具备丰富的项目经验
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 后端架构 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group relative overflow-hidden">
            <!-- 背景光效 -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span class="text-blue-400 text-2xl">⚙️</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  后端架构
                </h3>
                <p class="text-gray-400 mb-4 text-sm">
                  高并发 & 分布式架构，缓存与锁机制
                </p>
                <div class="flex flex-wrap gap-2">
                  <div class="bg-gray-700/80 hover:bg-blue-900/50 text-gray-300 hover:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-blue-500/20">
                    Spring Boot
                  </div>
                  <div class="bg-gray-700/80 hover:bg-blue-900/50 text-gray-300 hover:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-blue-500/20">
                    Redis
                  </div>
                  <div class="bg-gray-700/80 hover:bg-blue-900/50 text-gray-300 hover:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-blue-500/20">
                    MyBatis-Plus
                  </div>
                  <div class="bg-gray-700/80 hover:bg-blue-900/50 text-gray-300 hover:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-blue-500/20">
                    并发编程
                  </div>
                  <div class="bg-gray-700/80 hover:bg-blue-900/50 text-gray-300 hover:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-blue-500/20">
                    Redisson
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 数据库 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group relative overflow-hidden">
            <!-- 背景光效 -->
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span class="text-green-400 text-2xl">🗃️</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                  数据库
                </h3>
                <p class="text-gray-400 mb-4 text-sm">
                  深度 MySQL，索引调优与锁机制
                </p>
                <div class="flex flex-wrap gap-2">
                  <div class="bg-gray-700/80 hover:bg-green-900/50 text-gray-300 hover:text-green-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-green-500/20">
                    MySQL
                  </div>
                  <div class="bg-gray-700/80 hover:bg-green-900/50 text-gray-300 hover:text-green-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-green-500/20">
                    索引调优
                  </div>
                  <div class="bg-gray-700/80 hover:bg-green-900/50 text-gray-300 hover:text-green-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-green-500/20">
                    MVCC
                  </div>
                  <div class="bg-gray-700/80 hover:bg-green-900/50 text-gray-300 hover:text-green-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-green-500/20">
                    锁机制
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 微服务与高可用架构 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group relative overflow-hidden">
            <!-- 背景光效 -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span class="text-cyan-400 text-2xl">🌐</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  微服务与高可用架构
                </h3>
                <p class="text-gray-400 mb-4 text-sm">
                  Nacos, Gateway, Sentinel, Seata
                </p>
                <div class="flex flex-wrap gap-2">
                  <div class="bg-gray-700/80 hover:bg-cyan-900/50 text-gray-300 hover:text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-cyan-500/20">
                    Nacos
                  </div>
                  <div class="bg-gray-700/80 hover:bg-cyan-900/50 text-gray-300 hover:text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-cyan-500/20">
                    Gateway
                  </div>
                  <div class="bg-gray-700/80 hover:bg-cyan-900/50 text-gray-300 hover:text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-cyan-500/20">
                    Sentinel
                  </div>
                  <div class="bg-gray-700/80 hover:bg-cyan-900/50 text-gray-300 hover:text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-cyan-500/20">
                    Seata
                  </div>
                  <div class="bg-gray-700/80 hover:bg-cyan-900/50 text-gray-300 hover:text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-cyan-500/20">
                    OpenFeign
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- AI 研发 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group relative overflow-hidden">
            <!-- 背景光效 -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span class="text-purple-400 text-2xl">🤖</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  AI 研发
                </h3>
                <p class="text-gray-400 mb-4 text-sm">
                  RAG 应用落地实践，提示词工程与 Agent 开发
                </p>
                <div class="flex flex-wrap gap-2">
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    Dify
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    RAG
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    LangChain
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    提示词工程
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    Agent 开发
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 前端与 DevOps -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group relative overflow-hidden lg:col-span-2">
            <!-- 背景光效 -->
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span class="text-yellow-400 text-2xl">🚀</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  前端与 DevOps
                </h3>
                <p class="text-gray-400 mb-4 text-sm">
                  现代化 UI，容器化部署与版本控制
                </p>
                <div class="flex flex-wrap gap-2">
                  <div class="bg-gray-700/80 hover:bg-yellow-900/50 text-gray-300 hover:text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-yellow-500/20">
                    Vue3
                  </div>
                  <div class="bg-gray-700/80 hover:bg-yellow-900/50 text-gray-300 hover:text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-yellow-500/20">
                    Trae
                  </div>
                  <div class="bg-gray-700/80 hover:bg-yellow-900/50 text-gray-300 hover:text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-yellow-500/20">
                    Docker
                  </div>
                  <div class="bg-gray-700/80 hover:bg-yellow-900/50 text-gray-300 hover:text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-yellow-500/20">
                    Git
                  </div>
                </div>
              </div>
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