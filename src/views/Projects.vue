<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <h1 class="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          项目大厅
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  针对校园教务咨询场景开发的 AI 问答系统，旨在将复杂的教务规章制度、私有知识文档与传统查询 API 整合进大模型对话中，形成从知识检索到业务办理的闭环。
                </p>
                <div>
                  <h4 class="font-semibold text-gray-300 mb-2">核心工程亮点：</h4>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>通过 Spring AI 的 Function Calling 统一调度成绩查询、校园卡余额等传统 CRUD 接口，实现业务 API 工具化接入</li>
                    <li>构建基于阿里云 OSS 的 RAG 私有知识库入库流水线，落库约 500+ 条校园规章向量数据，Top-K=3 召回后专有问答准确率由 35% 提升至 88%+</li>
                    <li>基于 SSE 封装异步流式响应链路，将大模型首字响应时间控制在 400ms 到 600ms</li>
                    <li>自研基于 Redis 的分布式会话记忆与 Token 截断机制，单节点 2G 堆内存下稳定支撑 150 到 200 级并发流式长连接</li>
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
                  Function Calling
                </span>
                <span class="bg-indigo-900/50 text-indigo-400 text-xs font-medium px-3 py-1 rounded-full">
                  RuoYi
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

          <!-- 项目二：校园信息实验室资源调度与预约系统 -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-green-500/50 group">
            <div class="h-40 bg-gradient-to-r from-green-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
              <div class="text-white text-3xl font-bold z-10">
                实验室调度
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-green-600/30 to-teal-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-full"></div>
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors duration-300">
                校园信息实验室资源调度与预约系统
              </h2>
              <div class="text-gray-400 mb-6 space-y-4">
                <p class="leading-relaxed">
                  针对校园内计算中心与实验室资源高度紧缺、预约抢占常伴随瞬时高并发流量的业务痛点，开发分布式微服务调度中台，实现实体座位与虚拟算力等异构资源的高效分配与实时履约。
                </p>
                <div>
                  <h4 class="font-semibold text-gray-300 mb-2">核心工程亮点：</h4>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>采用 Redis + Lua 预扣减与 Redisson 分布式锁组合治理秒杀级并发预约，JMeter 500 瞬时并发下单机抢座接口 QPS 峰值达到 1200+，核心逻辑 P99 延迟稳定在 50ms 内</li>
                    <li>基于 RabbitMQ 进行异步削峰与超时关单处理，将数据库瞬时写入 QPS 从 1000 压平至约 100</li>
                    <li>引入策略模式与工厂路由抽象实体座位和虚拟算力点分配差异，提升资源调度引擎扩展性</li>
                    <li>通过 Spring Cloud Gateway + JWT + WebSocket 打通统一鉴权、无状态上下文透传与预约结果实时推送链路</li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-cyan-900/50 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">
                  Spring Cloud
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
                  WebSocket
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

          <!-- 项目三：AI-OJ 智能算法辅助评测系统 -->
          <div class="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-cyan-500/50 group">
            <div class="h-40 bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
              <div class="absolute top-4 left-4 z-20">
                <span class="bg-white/15 backdrop-blur-md text-cyan-100 text-xs font-semibold px-3 py-1 rounded-full border border-white/20 tracking-wide">
                  Live on Cloud
                </span>
              </div>
              <div class="text-white text-3xl font-bold z-10 text-center px-4">
                AI-OJ 评测系统
              </div>
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-indigo-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-bl-full"></div>
            </div>
            <div class="p-8">
              <h2 class="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                AI-OJ 智能算法辅助评测系统
              </h2>
              <div class="text-gray-400 mb-6 space-y-4">
                <p class="leading-relaxed">
                  针对传统 OJ 平台报错信息生硬、缺乏教学引导的痛点，开发并上线集成 LLM 辅助纠错的编程练习平台，实现从代码编写、沙箱安全执行到 AI 启发式辅导的全链路闭环。
                </p>
                <div>
                  <h4 class="font-semibold text-gray-300 mb-2">核心技术亮点：</h4>
                  <ul class="list-disc pl-5 space-y-2">
                    <li>集成 LangChain4j 对接阿里云通义千问大模型，围绕错误代码、异常堆栈与运行上下文生成结构化调试建议，平均响应耗时控制在 2 到 3 秒</li>
                    <li>基于 ProcessBuilder 构建 Java / C++ 代码编译运行与标准输出比对链路，支撑轻量级在线判题</li>
                    <li>针对沙箱执行与大模型推理的长耗时链路，采用自定义线程池进行异步化重构，降低高并发提交下的工作线程耗尽风险</li>
                    <li>采用 Vue3 + Vite 前端、Vercel 边缘发布与阿里云 Docker Compose 后端部署，完成跨云前后端分离上线</li>
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
                  Vue3 + Vite
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
