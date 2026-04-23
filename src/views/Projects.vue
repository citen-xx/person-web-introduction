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
              <div class="text-gray-400 mb-6 space-y-4">
                <p class="leading-relaxed">
                  传统校园教务与生活咨询存在严重的信息孤岛与重复性人工解答问题。本项目旨在打造一个基于 RAG（检索增强生成）架构的校园专属 AI Agent，将分散在各处的规章制度、选课指南、后勤通告转化为可实时交互的智能问答网关。
                </p>
                <div>
                  <h4 class="font-semibold text-gray-300 mb-2">核心技术难点：</h4>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>基于 WebFlux 与 SSE 的流式打字机响应，首字响应控制在 500ms 内</li>
                    <li>基于 Redis Lua 的分布式滑动窗口限流，保障 Token 资产安全</li>
                    <li>Redisson 双重检查锁（DCL）击碎缓存击穿，实现热点并发流量下 100% 数据库零冲击</li>
                    <li>Redis BitMap 与 ZSet 构建毫秒级响应的校园热点提问 Feed 流排行榜</li>
                  </ul>
                </div>
              </div>
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
              <router-link 
                to="/project/ai-assistant" 
                class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 flex items-center gap-2 inline-block"
              >
                查看详情
                <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </router-link>
            </div>
          </div>

          <!-- 项目二：高并发餐饮交易与履约微服务中台 -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-green-500/50 group">
            <div class="h-40 bg-gradient-to-r from-green-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
              <div class="text-white text-3xl font-bold z-10">
                微服务中台
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-green-600/30 to-teal-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-full"></div>
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors duration-300">
                高并发餐饮交易与履约微服务中台
              </h2>
              <div class="text-gray-400 mb-6 space-y-4">
                <p class="leading-relaxed">
                  将单体架构解耦重构为独立微服务。基于 Nacos 与 Gateway 实现动态路由与鉴权；深度集成 Sentinel 实施接口限流与熔断降级；引入 Seata 保障跨库事务最终一致性。
                </p>
                <div>
                  <h4 class="font-semibold text-gray-300 mb-2">核心技术难点：</h4>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>Nacos + Gateway 实现动态路由与会话无状态鉴权</li>
                    <li>Sentinel 滑动窗口限流与熔断降级，防止服务雪崩</li>
                    <li>Seata AT 模式保障跨库事务最终一致性</li>
                    <li>RabbitMQ 死信队列实现超时订单优雅履约</li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-cyan-900/50 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                  Spring Cloud Alibaba
                </span>
                <span class="bg-orange-900/50 text-orange-400 text-xs font-medium px-3 py-1 rounded-full">
                  Sentinel
                </span>
                <span class="bg-purple-900/50 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                  Seata
                </span>
                <span class="bg-blue-900/50 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                  微服务
                </span>
              </div>
              <router-link 
                to="/project/order-system" 
                class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 flex items-center gap-2 inline-block"
              >
                查看详情
                <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </router-link>
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