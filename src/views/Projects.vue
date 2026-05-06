<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          项目大厅
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <!-- 项目一：校园 AI 问答与知识库管理平台 -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50 group">
            <div class="h-40 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
              <div class="text-white text-3xl font-bold z-10">
                AI 知识库平台
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-full"></div>
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                校园 AI 问答与知识库管理平台
              </h2>
              <div class="text-gray-400 mb-6 space-y-4">
                <p class="leading-relaxed">
                  基于 RuoYi 后台二次开发，融合 Spring AI、通义千问、Redis Vector Store、OSS 与 SSE，构建面向校园问答、知识库运营与工具调用的一体化 AI 应用平台，覆盖文档上传、向量化入库、RAG 检索增强、多轮会话与后台权限管理。
                </p>
                <div>
                  <h4 class="font-semibold text-gray-300 mb-2">核心工程亮点：</h4>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>将底层 AI 引擎从早期 Dify 直连迁移到 Spring AI，统一接入通义千问并便于组合 RAG、Tools 与 Memory</li>
                    <li>打通 OSS 上传、Tika 文档解析、TokenTextSplitter 切片与 Redis Vector Store 入库的完整知识库闭环</li>
                    <li>基于 SseEmitter + conversationId + Redis ChatMemory 实现多轮流式对话与上下文恢复</li>
                    <li>通过 Redis ZSET/Lua 限流、高频问答库与权限后台治理，兼顾回答稳定性、成本控制与系统可维护性</li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-blue-900/50 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                  Spring AI
                </span>
                <span class="bg-purple-900/50 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
                  Redis Vector Store
                </span>
                <span class="bg-red-900/50 text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                  OSS
                </span>
                <span class="bg-green-900/50 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                  SSE
                </span>
                <span class="bg-sky-900/50 text-sky-400 text-xs font-medium px-3 py-1 rounded-full">
                  RuoYi
                </span>
                <span class="bg-indigo-900/50 text-indigo-400 text-xs font-medium px-3 py-1 rounded-full">
                  Qwen
                </span>
              </div>
              <div class="flex flex-wrap gap-3">
                <router-link 
                  to="/project/ai-assistant" 
                  class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center gap-2"
                >
                  查看详情
                  <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </router-link>
                <a
                  href="https://github.com/citen-xx/springAi-compus-brillant-helper"
                  target="_blank"
                  rel="noreferrer"
                  class="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg border border-gray-600 transition-all duration-300 inline-flex items-center gap-2"
                >
                  GitHub
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <!-- 项目二：校园智算中心预约与资源调度系统 -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-green-500/50 group">
            <div class="h-40 bg-gradient-to-r from-green-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
              <div class="text-white text-3xl font-bold z-10">
                智算中心预约
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-green-600/30 to-teal-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-full"></div>
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors duration-300">
                校园智算中心预约与资源调度系统
              </h2>
              <div class="text-gray-400 mb-6 space-y-4">
                <p class="leading-relaxed">
                  面向校园智算中心 GPU 节点、实训室工位与高价值实验资源时段，构建高可用资源调度中台，作为上层校园智能问答助手的底层业务执行引擎，承接 Function Calling 下发的预约、抢占、释放与状态查询指令。
                </p>
                <div>
                  <h4 class="font-semibold text-gray-300 mb-2">核心工程亮点：</h4>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>基于 Nacos + Gateway 完成多模块微服务拆分与统一流量入口治理，实现下游服务无状态化演进</li>
                    <li>通过 Redis + Lua + Redis Stream + Redisson 设计高并发抢占链路，保障稀缺资源不超额分配</li>
                    <li>结合 RabbitMQ 延迟消息与死信队列实现超时违约自动回收，形成柔性事务闭环</li>
                    <li>针对百万级历史调度日志采用 EXPLAIN、覆盖索引与延迟关联，深分页查询耗时由 3.2s 优化至 150ms 以内</li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-cyan-900/50 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                  Spring Cloud Alibaba
                </span>
                <span class="bg-red-900/50 text-red-400 text-xs font-medium px-3 py-1 rounded-full">
                  Redis
                </span>
                <span class="bg-rose-900/50 text-rose-400 text-xs font-medium px-3 py-1 rounded-full">
                  RabbitMQ
                </span>
                <span class="bg-blue-900/50 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                  Redisson
                </span>
                <span class="bg-amber-900/50 text-amber-400 text-xs font-medium px-3 py-1 rounded-full">
                  Lua
                </span>
                <span class="bg-emerald-900/50 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
                  Gateway
                </span>
              </div>
              <div class="flex flex-wrap gap-3">
                <router-link 
                  to="/project/order-system" 
                  class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20 inline-flex items-center gap-2"
                >
                  查看详情
                  <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </router-link>
                <a
                  href="https://github.com/citen-xx/citen-compus-dispatch"
                  target="_blank"
                  rel="noreferrer"
                  class="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg border border-gray-600 transition-all duration-300 inline-flex items-center gap-2"
                >
                  GitHub
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          <!-- 项目三：Simple AI OJ 在线判题平台 -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 group">
            <div class="h-40 bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
              <div class="absolute top-4 left-4 z-20">
                <span class="bg-white/15 backdrop-blur-md text-cyan-100 text-xs font-semibold px-3 py-1 rounded-full border border-white/20 tracking-wide">
                  Live on Cloud
                </span>
              </div>
              <div class="text-white text-3xl font-bold z-10 text-center px-4">
                Simple AI OJ
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-indigo-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-full"></div>
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                Simple AI OJ 在线判题与 AI 辅导平台
              </h2>
              <div class="text-gray-400 mb-6 space-y-4">
                <p class="leading-relaxed">
                  一个基于 Spring Boot 3、MyBatis-Plus、MySQL 与 Vue 3 构建的简易在线判题系统，覆盖题目管理、Java/C++ 代码评测、AI 辅导、Monaco 在线编辑器与 Docker Compose 部署能力，面向算法训练与轻量级 OJ 演示场景。
                </p>
                <div>
                  <h4 class="font-semibold text-gray-300 mb-2">核心技术亮点：</h4>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>支持题目与测试用例的增删改查，形成完整的题目管理与判题数据链路</li>
                    <li>基于 Java 原生 ProcessBuilder 实现 Java / C++ 简易编译运行评测与标准输出自动比对</li>
                    <li>集成 LangChain4j + DashScope（qwen-plus）并通过 SSE 输出流式 AI 解题辅导结果</li>
                    <li>前端基于 Vue 3 + TailwindCSS + Monaco Editor，后端支持 Docker Compose 一键部署</li>
                  </ul>
                </div>
                <p class="text-sm text-cyan-300 break-all">
                  演示地址： http://www.lyhcodexsimplehelper.top
                </p>
              </div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-blue-900/50 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                  Spring Boot 3
                </span>
                <span class="bg-emerald-900/50 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
                  MyBatis-Plus
                </span>
                <span class="bg-orange-900/50 text-orange-400 text-xs font-medium px-3 py-1 rounded-full">
                  LangChain4j
                </span>
                <span class="bg-violet-900/50 text-violet-400 text-xs font-medium px-3 py-1 rounded-full">
                  DashScope
                </span>
                <span class="bg-cyan-900/50 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                  Monaco Editor
                </span>
                <span class="bg-slate-800/70 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                  Docker Compose
                </span>
              </div>
              <div class="flex flex-wrap gap-3">
                <router-link
                  to="/project/ai-oj-sandbox"
                  class="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/20 inline-flex items-center gap-2"
                >
                  查看详情
                  <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </router-link>
                <a
                  href="http://www.lyhcodexsimplehelper.top"
                  target="_blank"
                  rel="noreferrer"
                  class="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg border border-slate-600 transition-all duration-300 inline-flex items-center gap-2"
                >
                  在线演示
                  <span>↗</span>
                </a>
                <a
                  href="https://github.com/citen-xx/S1mple-code-helping-qwen"
                  target="_blank"
                  rel="noreferrer"
                  class="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg border border-gray-600 transition-all duration-300 inline-flex items-center gap-2"
                >
                  GitHub
                  <span>→</span>
                </a>
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
