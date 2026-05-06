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
              聚焦高并发后端、AI 智能体应用与云端工程交付
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
                目前专业排名前 10%（GPA: 4.8 / 5.0），持有华为 HCCDP-AI 工作级认证。持续聚焦分布式系统、RAG 应用落地与 AI 驱动开发实践，具备从需求分析、系统设计、核心编码到部署上线的完整交付能力。
              </p>
              <div class="mt-6 flex flex-wrap gap-2">
                <span class="bg-gray-700/80 text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">高并发后端</span>
                <span class="bg-gray-700/80 text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">微服务架构</span>
                <span class="bg-gray-700/80 text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">RAG / Agent</span>
                <span class="bg-gray-700/80 text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">Docker 部署</span>
              </div>
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

    <!-- 技术栈区域 -->
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
            技术栈
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
                  面向高并发业务场景的服务建模、缓存治理与异步链路设计
                </p>
                <ul class="space-y-2 mb-5 text-sm text-gray-300 leading-relaxed">
                  <li>具备 Spring Boot 项目分层设计、接口抽象与核心业务建模能力</li>
                  <li>熟悉缓存穿透、击穿、雪崩等典型问题的治理方案与并发控制策略</li>
                  <li>能够围绕性能瓶颈进行限流、锁优化、异步化与链路拆分</li>
                </ul>
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
                  <div class="bg-gray-700/80 hover:bg-blue-900/50 text-gray-300 hover:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-blue-500/20">
                    WebFlux
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
                  聚焦 MySQL 数据建模、事务隔离、索引优化与执行计划分析
                </p>
                <ul class="space-y-2 mb-5 text-sm text-gray-300 leading-relaxed">
                  <li>理解 InnoDB 存储引擎、MVCC、多版本并发控制与锁机制</li>
                  <li>能够基于慢 SQL、索引命中率与执行计划定位查询性能问题</li>
                  <li>具备面向业务场景的数据表设计、字段约束与查询优化意识</li>
                </ul>
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
                  <div class="bg-gray-700/80 hover:bg-green-900/50 text-gray-300 hover:text-green-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-green-500/20">
                    SQL 调优
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
                  面向复杂业务拆分的服务治理、流量保护与分布式事务控制
                </p>
                <ul class="space-y-2 mb-5 text-sm text-gray-300 leading-relaxed">
                  <li>具备基于 Nacos 的服务注册发现、配置管理与环境隔离能力</li>
                  <li>熟悉 Gateway、Sentinel 在网关鉴权、限流熔断与降级中的组合使用</li>
                  <li>能够处理跨服务调用、最终一致性与异步履约等分布式问题</li>
                </ul>
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
                  <div class="bg-gray-700/80 hover:bg-cyan-900/50 text-gray-300 hover:text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-cyan-500/20">
                    RabbitMQ
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
                  聚焦 RAG 应用落地、提示词工程、大模型编排与 Agent 系统设计
                </p>
                <ul class="space-y-2 mb-5 text-sm text-gray-300 leading-relaxed">
                  <li>具备从知识库构建、召回增强到结果生成的完整 RAG 落地实践</li>
                  <li>能够围绕业务场景设计 Prompt、上下文拼接策略与输出约束机制</li>
                  <li>熟悉流式响应、Agent 工作流与 AI 驱动开发的工程化应用方式</li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    Spring AI
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    RAG
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    LangChain4j
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    提示词工程
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    Agent 开发
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    Qwen API
                  </div>
                  <div class="bg-gray-700/80 hover:bg-purple-900/50 text-gray-300 hover:text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-purple-500/20">
                    SSE
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
                  覆盖 Vue 前端实现、工程化构建、容器化部署与版本协作流程
                </p>
                <ul class="space-y-2 mb-5 text-sm text-gray-300 leading-relaxed">
                  <li>能够基于 Vue3 + Vite 构建响应式页面并完成组件化与样式组织</li>
                  <li>熟悉 Docker / Docker Compose 的镜像构建、服务编排与环境部署</li>
                  <li>具备 Git 协作、前后端联调、线上发布与基础运维排障能力</li>
                </ul>
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
                  <div class="bg-gray-700/80 hover:bg-yellow-900/50 text-gray-300 hover:text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-yellow-500/20">
                    Vite
                  </div>
                  <div class="bg-gray-700/80 hover:bg-yellow-900/50 text-gray-300 hover:text-yellow-300 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 group-hover:scale-105 hover:shadow hover:shadow-yellow-500/20">
                    Docker Compose
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
