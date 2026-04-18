<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          项目大厅
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 项目一：校园智能知识库助手 -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group">
            <div class="h-40 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
              <div class="text-white text-3xl font-bold z-10">
                校园智能知识库
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-full"></div>
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                校园智能知识库助手
              </h2>
              <p class="text-gray-400 mb-6 leading-relaxed">
                基于 Spring WebFlux (SSE) 与 RAG 架构的高可用 AI 问答网关。利用 Redis Lua 限流，结合 Redisson 分布式锁解决热点缓存击穿。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-blue-900/50 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                  Spring Boot
                </span>
                <span class="bg-purple-900/50 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                  Dify
                </span>
                <span class="bg-red-900/50 text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                  Redis
                </span>
                <span class="bg-green-900/50 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                  WebFlux
                </span>
              </div>
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 flex items-center gap-2">
                查看详情
                <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          <!-- 项目二：高并发餐饮交易与履约中台 -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-green-500/50 group">
            <div class="h-40 bg-gradient-to-r from-green-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
              <div class="text-white text-3xl font-bold z-10">
                餐饮交易中台
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-green-600/30 to-teal-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-full"></div>
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors duration-300">
                高并发餐饮交易与履约中台
              </h2>
              <p class="text-gray-400 mb-6 leading-relaxed">
                重构核心交易链路，基于 Redisson 乐观锁解决极端并发超卖。利用策略工厂模式消除代码坏味道，引入延迟队列实现优雅履约。
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-yellow-900/50 text-yellow-400 text-xs font-medium px-3 py-1 rounded-full">
                  MySQL调优
                </span>
                <span class="bg-purple-900/50 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                  分布式锁
                </span>
                <span class="bg-blue-900/50 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                  策略模式
                </span>
                <span class="bg-orange-900/50 text-orange-400 text-xs font-medium px-3 py-1 rounded-full">
                  RabbitMQ
                </span>
              </div>
              <button class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 flex items-center gap-2">
                查看详情
                <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
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