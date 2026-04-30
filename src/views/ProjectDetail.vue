<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-6xl">
        <!-- 返回按钮 -->
        <div class="mb-8">
          <router-link 
            to="/projects" 
            class="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg border border-gray-700 transition-all duration-300"
          >
            <span>←</span>
            返回列表
          </router-link>
        </div>

        <!-- 项目标题和技术标签 -->
        <div class="mb-12">
          <h1 class="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {{ projectTitle }}
          </h1>
          <div class="flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tag in projectTags" 
              :key="tag"
              class="bg-blue-900/50 text-blue-400 text-xs font-medium px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
          <div v-if="projectActions.length" class="flex flex-wrap gap-3">
            <a
              v-for="action in projectActions"
              :key="action.href"
              :href="action.href"
              target="_blank"
              rel="noreferrer"
              :class="getActionClass(action.variant)"
            >
              {{ action.label }}
              <span>{{ action.icon }}</span>
            </a>
          </div>
        </div>

        <!-- 详细内容区域 -->
        <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 prose prose-invert max-w-none">
          <div v-if="projectId === 'ai-assistant'">
            <h2>项目背景</h2>
            <p>面向高校教务与校园生活问答场景，构建基于 RAG（Retrieval-Augmented Generation）架构的校园专属 AI Copilot，将分散制度文档、选课指南与后勤通知沉淀为可实时检索、可追溯回答的智能问答中枢，为师生提供 24/7 的智能咨询服务。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>WebFlux + SSE 低延迟响应链路</strong>：实现 500ms 级首字返回与流式“打字机”交互体验</li>
              <li><strong>Redis Lua 分布式滑动窗口限流</strong>：对调用频次与 Token 成本进行精细化治理</li>
              <li><strong>Redisson DCL 缓存击穿防护</strong>：支撑热点问题场景下的高并发一致性访问</li>
              <li><strong>Redis BitMap + ZSet 热点统计</strong>：构建毫秒级校园热点提问排行榜与活跃度分析能力</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>核心框架: Spring Boot 3, Vue3, TailwindCSS</li>
              <li>AI 模型接入: Dify (大语言模型编排引擎), Spring WebFlux</li>
              <li>缓存与高并发中间件: Redis, Redisson 分布式锁</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. 毫秒级打字机效果实现</h3>
            <p>大模型推理存在固有的高延迟，传统 HTTP 同步请求会导致前端出现 10 秒以上的“假死”等待。本项目通过以下技术实现了流畅的流式响应：</p>
            <ul>
              <li>使用 Spring WebFlux 的 WebClient 进行异步非阻塞 API 调用，避免线程阻塞</li>
              <li>在表现层采用 SSE（Server-Sent Events）协议，建立服务器到客户端的单向长连接</li>
              <li>将大模型的流式输出实时推送到前端，实现“打字机”效果。</li>
              <li>首字响应控制在 500ms 内，大幅提升用户体验。</li>
            </ul>

            <h3>2. Redis Lua 分布式滑动窗口限流</h3>
            <p>针对大模型接口高昂的 Token 计费属性，防止恶意脚本刷单是核心痛点：</p>
            <ul>
              <li>通过深度定制 Redis + Lua 脚本，实现原子性的分布式滑动窗口限流器</li>
              <li>对全局调用频率与单用户提问频次进行双重动态阻断</li>
              <li>保障底层模型资源的高可用性与安全性，避免 Token 资产浪费。</li>
            </ul>

            <h3>3. Redisson DCL 解决缓存击穿</h3>
            <p>针对“节假日放假安排”等突发型校园热点问题，普通缓存极易失效并引发“缓存击穿”：</p>
            <ul>
              <li>设计基于 Redisson 分布式锁的 DCL（双重检查锁）架构</li>
              <li>当热点 Key 失效时，仅放行单线程去请求大模型重建缓存</li>
              <li>其余线程自旋等待，避免同时冲击数据库与 AI 接口</li>
              <li>实现热点并发流量下 100% 的数据库零冲击与 0 Token 消耗</li>
            </ul>

            <h3>4. Redis BitMap 内存压榨技术</h3>
            <p>在系统活跃度统计与热榜模块中，摒弃了传统的 MySQL 行级记录：</p>
            <ul>
              <li>使用 Redis BitMap 记录用户每日签到，将单用户年度签到数据压缩至仅约 46 字节</li>
              <li>结合 ZSet（跳表）实时计算全站搜索频次</li>
              <li>构建毫秒级响应的“校园热点提问 Feed 流排行榜”</li>
              <li>大幅降低内存占用，提升系统性能</li>
            </ul>
          </div>

          <div v-else-if="projectId === 'order-system'">
            <h2>项目背景</h2>
            <p>面向校园智算中心 GPU 节点、实训室工位、深度学习工作站与高价值实验资源时段，构建高可用资源调度中台。该项目作为上层校园智能问答助手的底层业务执行引擎，承接大模型 Function Calling 下发的预约、抢占、释放与状态查询指令，解决稀缺资源在高并发场景下的超额分配、状态一致性与超时回收问题。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>Nacos + Gateway 微服务治理</strong>：完成网关、用户凭证、资源调度等服务拆分，统一接入层与无状态鉴权链路</li>
              <li><strong>Redis + Lua + Stream 强一致抢占</strong>：围绕稀缺资源额度控制构建原子扣减、异步削峰与重复预约防护机制</li>
              <li><strong>Redisson + MySQL 双层兜底</strong>：在异步落库阶段按用户维度串行化处理，保障预约状态最终一致</li>
              <li><strong>RabbitMQ 柔性事务闭环</strong>：通过延迟消息与死信队列实现超时违约自动回收与额度恢复</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>微服务生态: Spring Cloud Alibaba（Nacos, Gateway, Sentinel 扩展位）, OpenFeign</li>
              <li>核心框架与中间件: Spring Boot, Redis, RabbitMQ, Redisson, Lua, MyBatis-Plus, MySQL</li>
              <li>业务支撑能力: Redis Stream 异步消息流, WebSocket 实时通知, Function Calling 业务承接</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. 微服务解耦与无状态鉴权 (Gateway + Nacos)</h3>
            <p>项目从单体架构收敛为 Maven 多模块微服务体系，核心拆分为公共模块、网关服务、用户服务与资源调度服务：</p>
            <ul>
              <li>利用 Nacos 实现服务注册发现、动态配置与环境隔离</li>
              <li>引入 Spring Cloud Gateway 作为统一流量入口，承接上层 AI 助手的结构化调度请求</li>
              <li>在网关层前置 Token 解析、白名单放行与身份透传，推动下游调度服务走向无状态化</li>
            </ul>

            <h3>2. 稀缺资源强一致抢占 (Redis + Lua + Stream)</h3>
            <p>针对 GPU 节点、实训室工位等资源在开放时段的脉冲式流量，核心目标是不超卖、不重复预约、主链路不被击穿：</p>
            <ul>
              <li>通过 Redis + Lua 在缓存层原子完成资格校验、额度扣减与重复预约判断</li>
              <li>借助 Redis Stream 将高并发请求异步削峰，降低主线程与数据库瞬时压力</li>
              <li>在缓存层先建立并发防线，再将结果交给后续异步链路持久化处理</li>
            </ul>

            <h3>3. Redisson 串行化落库与最终一致性兜底</h3>
            <p>在异步消费与状态落库阶段，项目进一步通过分布式锁与数据库条件更新补强一致性保障：</p>
            <ul>
              <li>按用户维度使用 Redisson 分布式锁，避免异步消费阶段重复落库</li>
              <li>结合 MySQL 条件更新与状态校验，作为缓存层之外的最终一致性兜底</li>
              <li>形成“缓存原子扣减 - 异步削峰 - 串行落库 - 持久层校验”的多层并发防线</li>
            </ul>

            <h3>4. 柔性事务闭环与超时自动回收 (RabbitMQ)</h3>
            <p>针对预约成功后长期未签到、算力任务未激活等场景，项目通过消息机制避免资源空占：</p>
            <ul>
              <li>预约成功后发送延迟消息，到期未确认则进入死信队列</li>
              <li>消费死信消息后自动标记违约状态并恢复 ResourceQuota 可用额度</li>
              <li>相比定时任务轮询扫表，显著降低数据库 I/O 压力并提升时效性</li>
            </ul>

            <h3>5. 百万级历史记录深分页优化</h3>
            <p>针对管理端百万级历史调度日志的分页查询，项目围绕慢 SQL 场景做了针对性性能优化：</p>
            <ul>
              <li>使用 EXPLAIN 分析执行计划，识别回表与深分页扫描带来的性能损耗</li>
              <li>结合覆盖索引与延迟关联优化查询路径</li>
              <li>将深分页查询耗时从 3.2s 优化到 150ms 以内，提升后台管理体验</li>
            </ul>
          </div>

          <div v-else-if="projectId === 'ai-oj-sandbox'">
            <h2>项目背景</h2>
            <p>面向在线判题与智能解题辅导场景，系统性实践 ADD（AI-Driven Development）范式。通过深度 Prompt Engineering 驱动 AI 完成约 90% 的业务代码生成，我主要负责核心架构把控、代码评测链路校验、安全边界收敛与线上部署落地，验证了 AI 协同开发在真实项目中的工程可行性。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>AI 驱动全栈研发流程</strong>：基于 Prompt Engineering 高效协同 Cursor / Codex，显著提升业务开发效率</li>
              <li><strong>自研微型代码评测引擎</strong>：使用 Java 原生 ProcessBuilder 实现动态编译、安全执行与 STDIO 自动化比对</li>
              <li><strong>Qwen + SSE 实时流式辅导</strong>：为错误代码提供毫秒级流式优化建议与智能分析反馈</li>
              <li><strong>Docker Compose 云端部署</strong>：完成 Spring Boot 与 MySQL 8.0 的容器编排与生产环境快速上线</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>核心框架: Spring Boot 3, Vue3, Vite</li>
              <li>AI 能力接入: 阿里云通义千问 API, SSE 流式输出</li>
              <li>评测与运行时: Java ProcessBuilder, 编译执行隔离, STDIO 自动判题</li>
              <li>部署方案: Docker, Docker Compose, MySQL 8.0, 云服务器生产环境</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. ADD（AI-Driven Development）工程化落地</h3>
            <p>项目并非简单使用 AI 辅助编码，而是将 AI 纳入完整研发流程，形成“需求拆解 - Prompt 设计 - 结果约束 - 人工校验 - 架构收敛”的协作闭环：</p>
            <ul>
              <li>通过结构化 Prompt 明确接口契约、边界条件与代码风格约束</li>
              <li>利用 AI 快速生成 CRUD、页面交互与业务骨架，将精力集中在关键链路与架构决策</li>
              <li>对生成代码进行安全性、正确性与可维护性校验，确保工程质量可控</li>
            </ul>

            <h3>2. 基于 ProcessBuilder 的轻量级判题沙箱</h3>
            <p>针对算法题运行与判题需求，自研微型代码评测引擎，兼顾实现成本、执行效率与基础安全隔离：</p>
            <ul>
              <li>基于 Java 原生 ProcessBuilder 驱动用户代码动态编译与子进程执行</li>
              <li>围绕输入输出流构建 STDIO 自动化比对机制，完成判题结果校验</li>
              <li>通过执行超时、异常捕获与运行边界控制降低不安全代码带来的风险</li>
            </ul>

            <h3>3. 基于 SSE 的大模型实时辅导能力</h3>
            <p>针对用户提交错误代码后的分析反馈，接入阿里云通义千问并设计低延迟流式交互体验：</p>
            <ul>
              <li>通过 SSE 将模型输出实时推送至前端，形成“打字机式”连续反馈</li>
              <li>围绕题目上下文、报错信息与用户代码组织提示词，提升建议的针对性与可执行性</li>
              <li>为算法训练场景补充“判题 + 讲解 + 优化建议”的闭环体验</li>
            </ul>

            <h3>4. 容器化部署与生产环境落地</h3>
            <p>项目已完成线上部署，具备从开发到生产的完整交付链路：</p>
            <ul>
              <li>基于 Docker Compose 编排 Spring Boot、MySQL 8.0 等核心服务</li>
              <li>支持镜像构建、环境变量注入与服务一键启动</li>
              <li>将本地开发成果平滑迁移至云端服务器，缩短部署周期并提升可复现性</li>
            </ul>
          </div>

          <div v-else>
            <p>项目不存在</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

type ProjectAction = {
  label: string
  href: string
  icon: string
  variant: 'primary' | 'secondary'
}

const route = useRoute()
const projectId = computed(() => route.params.id as string)

  const projectTitle = computed(() => {
  if (projectId.value === 'ai-assistant') {
    return '校园智能知识库助手'
  } else if (projectId.value === 'order-system') {
    return '校园智算中心预约与资源调度系统'
  } else if (projectId.value === 'ai-oj-sandbox') {
    return 'AI-OJ 智能算法沙箱 (AI-Driven Development)'
  }
  return '项目详情'
})

const projectTags = computed(() => {
  if (projectId.value === 'ai-assistant') {
    return ['Spring Boot', 'Dify', 'Redis', 'WebFlux', 'RAG', 'SSE']
  } else if (projectId.value === 'order-system') {
    return ['Spring Cloud Alibaba', 'Redis', 'RabbitMQ', 'Redisson', 'Lua', 'Gateway']
  } else if (projectId.value === 'ai-oj-sandbox') {
    return ['Spring Boot 3', 'Vue3', 'Docker', 'Qwen API', 'SSE', 'ProcessBuilder']
  }
  return []
})

const projectActions = computed<ProjectAction[]>(() => {
  if (projectId.value === 'ai-assistant') {
    return [
      {
        label: 'GitHub',
        href: 'https://github.com/citen-xx/Dify-compus-brillant-helper',
        icon: '→',
        variant: 'secondary'
      }
    ]
  }

  if (projectId.value === 'order-system') {
    return [
      {
        label: 'GitHub',
        href: 'https://github.com/citen-xx/citen-compus-dispatch',
        icon: '→',
        variant: 'secondary'
      }
    ]
  }

  if (projectId.value === 'ai-oj-sandbox') {
    return [
      {
        label: '在线演示',
        href: 'http://www.lyhcodexsimplehelper.top',
        icon: '↗',
        variant: 'primary'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/citen-xx/S1mple-code-helping-qwen',
        icon: '→',
        variant: 'secondary'
      }
    ]
  }

  return []
})

function getActionClass(variant: ProjectAction['variant']) {
  if (variant === 'primary') {
    return 'bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/20 inline-flex items-center gap-2'
  }

  return 'bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg border border-gray-600 transition-all duration-300 inline-flex items-center gap-2'
}
</script>

<style scoped>
.prose {
  max-width: 100%;
}

.prose h2 {
  color: #f3f4f6;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  color: #e5e7eb;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  color: #d1d5db;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.prose ul {
  color: #d1d5db;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}
</style>
