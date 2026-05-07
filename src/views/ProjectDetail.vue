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
            <p>针对校园教务咨询场景开发的 AI 问答系统，旨在将复杂的教务规章制度、私有知识文档与传统查询 API 整合进大模型对话中。项目以若依后台为基础，升级为 Spring AI 驱动的校园智能知识库助手，覆盖 Agent 工具调度、RAG 私有知识库、SSE 流式会话与分布式会话管控。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>Agent 工具调度与接口原子化</strong>：通过 Spring AI Function Calling 将成绩查询、校园卡余额等传统业务接口工具化接入，结合若依 Token 鉴权实现用户身份安全透传</li>
              <li><strong>RAG 私有知识库闭环</strong>：打通“前端上传 - OSS 云端存储 - 后端异步拉取 - 文档清洗分块 - Redis 向量化存储”全链路，落库约 500+ 条校园规章向量数据</li>
              <li><strong>专有问答准确率显著提升</strong>：采用 500 到 800 Token 粒度语义分块与 Top-K（K=3）向量召回，专有业务问答准确率由基座模型约 35% 提升至 88% 以上</li>
              <li><strong>SSE 流式响应与分布式会话记忆</strong>：首字响应时间控制在 400ms 到 600ms，单节点 2G 堆内存下稳定支撑 150 到 200 级并发流式长连接</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>核心框架: RuoYi, Spring Boot 4.0.3, Spring Security, JWT</li>
              <li>AI 能力接入: Spring AI 1.0.0-M6, 通义千问 OpenAI Compatible API, Function Calling</li>
              <li>知识库链路: 阿里云 OSS, TikaDocumentReader, TokenTextSplitter, Redis Vector Store, RAG</li>
              <li>稳定性治理: Redis, SSE, ChatMemory, Token 动态截断, Redis ZSET/Lua 限流</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. Agent 工具调度与接口原子化</h3>
            <p>统一配置大模型工具，将传统校园业务接口原子化后纳入大模型调度流，使模型能够按需自主调用业务能力：</p>
            <ul>
              <li>将成绩查询、校园卡余额查询等传统 CRUD 接口接入 Spring AI Function Calling</li>
              <li>复用若依原生 Token 拦截链路完成用户身份透传与数据隔离</li>
              <li>让系统从“知识问答”演进到“问答 + 工具办理”一体化校园助手</li>
            </ul>

            <h3>2. RAG 私有知识库与云端入库链路</h3>
            <p>针对教务规章与制度说明易产生大模型幻觉的问题，项目构建了基于阿里云 OSS 的自动化知识入库流水线：</p>
            <ul>
              <li>实现“前端上传 - OSS 存储 - 后端异步拉取 - 文档清洗分块 - Redis 向量化存储”的完整闭环</li>
              <li>采用 500 到 800 Token 粒度进行语义分块，累计落库约 500+ 条校园规章向量数据</li>
              <li>基于 Top-K（K=3）向量召回动态补充上下文，使专有问答准确率显著提升</li>
            </ul>

            <h3>3. 异步流式响应体验优化</h3>
            <p>针对大模型推理带来的长时阻塞问题，在会话控制层基于原生异步推送组件封装流式长连接：</p>
            <ul>
              <li>将大模型首字响应时间稳定控制在 400ms 到 600ms</li>
              <li>前端补充断线重连与富文本实时渲染机制，优化交互体验</li>
              <li>将同步阻塞转为事件驱动的流式推送链路，降低接口等待体感</li>
            </ul>

            <h3>4. 长连接异步化与分布式会话管控</h3>
            <p>针对大模型长轮询导致的工作线程耗尽问题，项目自研分布式会话记忆与 Token 动态截断机制：</p>
            <ul>
              <li>底层依托 Redis 存储多轮对话上下文，实现会话记忆分布式持久化</li>
              <li>结合滑动窗口算法进行 Token 动态截断，阈值控制为最近 10 轮对话或 4096 Token</li>
              <li>在单节点 2G JVM 堆配置下，压测支撑 150 到 200 级并发流式长连接且无 OOM</li>
            </ul>
          </div>

          <div v-else-if="projectId === 'order-system'">
            <h2>项目背景</h2>
            <p>针对校园内计算中心与实验室资源高度紧缺、预约抢占常伴随瞬时高并发流量的业务痛点，开发分布式微服务调度中台，实现实体座位与虚拟算力等异构资源的高效分配与预约履约。项目聚焦高并发防超卖、异步削峰、统一鉴权与实时通知，是校园资源调度场景下的完整工程化实践。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>高并发防超卖与分布式锁控制</strong>：Redis + Lua 预扣减配合 Redisson 分布式锁，JMeter 500 瞬时并发下单机抢座接口 QPS 峰值达 1200+，P99 延迟稳定在 50ms 内</li>
              <li><strong>MQ 异步削峰与超时关单链路</strong>：RabbitMQ 将数据库瞬时写入 QPS 从 1000 压平至约 100，并通过死信队列完成 15 分钟超时自动取消</li>
              <li><strong>策略模式驱动资源分配引擎</strong>：抽象实体座位与虚拟算力点分配差异，解耦核心调度逻辑与资源规则</li>
              <li><strong>网关统一鉴权与全链路无状态上下文</strong>：Spring Cloud Gateway + JWT + WebSocket 打通鉴权、上下文透传与预约结果实时推送</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>微服务生态: Spring Cloud, Spring Boot, Gateway, JWT</li>
              <li>核心中间件: Redis, RabbitMQ, Redisson, Lua, MyBatis-Plus, MySQL</li>
              <li>业务支撑能力: WebSocket 实时推送, 异构资源分配策略, 高并发预约链路</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. 高并发防超卖与分布式锁控制</h3>
            <p>针对秒杀级并发预约场景，项目摒弃传统数据库行锁，将并发冲突尽可能拦截在缓存层：</p>
            <ul>
              <li>使用 Redis + Lua 实现库存预扣减的原子性操作</li>
              <li>结合 Redisson 分布式锁处理极端情况下的并发安全问题，降低资源超卖风险</li>
              <li>JMeter 500 瞬时并发压测下，系统单机抢座接口 QPS 峰值达到 1200+，核心逻辑 P99 延迟稳定在 50ms 内</li>
            </ul>

            <h3>2. MQ 异步削峰与超时关单链路</h3>
            <p>针对同步创建订单导致的数据库连接池瓶颈，项目引入消息队列进行流量削峰与超时回收：</p>
            <ul>
              <li>利用 RabbitMQ 将数据库瞬时写入 QPS 从约 1000 压低并平滑至约 100</li>
              <li>构建预约超时监听组件，借助死信队列完成 15 分钟超时自动取消</li>
              <li>在提升系统吞吐量的同时，避免轮询扫表带来的额外数据库压力</li>
            </ul>

            <h3>3. 策略模式驱动的资源分配引擎</h3>
            <p>面对实体座位与虚拟算力点等异构资源的分配差异，项目在架构层面引入策略模式提升可扩展性：</p>
            <ul>
              <li>通过工厂类动态路由至实体座位分配、云端算力调度等具体策略实现</li>
              <li>将核心调度逻辑与业务规则解耦，便于新增资源类型和分配规则</li>
              <li>满足校园实验资源调度系统的长期扩展需求</li>
            </ul>

            <h3>4. 网关统一鉴权与全链路无状态上下文</h3>
            <p>为了支撑微服务链路下的统一接入、身份校验与实时反馈，项目在入口层和通知层做了整合：</p>
            <ul>
              <li>搭建 Spring Cloud Gateway 统一流量入口，通过全局过滤器集成 JWT 校验</li>
              <li>依托网关 Header 透传、ThreadLocal 与拦截器实现用户身份的安全穿透和服务间无状态化隔离</li>
              <li>结合 WebSocket 实现预约结果的客户端实时异步双向推送</li>
            </ul>
          </div>

          <div v-else-if="projectId === 'ai-oj-sandbox'">
            <h2>项目背景</h2>
            <p>针对传统 OJ 平台报错信息生硬、缺乏教学引导的痛点，开发并上线集成 LLM 辅助纠错的编程练习平台。系统覆盖代码编写、判题执行、异常分析、AI 启发式辅导与跨云部署能力，目标是让判题平台从“给结果”升级到“可讲解、可引导、可部署”的智能助教系统。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>LangChain4j 大模型辅导引擎</strong>：对接通义千问模型，围绕错误代码、异常堆栈与运行上下文生成结构化调试建议，平均生成耗时控制在 2 到 3 秒</li>
              <li><strong>轻量级代码评测链路</strong>：基于 ProcessBuilder 实现 Java / C++ 编译运行与标准输出比对，支撑在线判题闭环</li>
              <li><strong>长耗时链路异步化重构</strong>：通过自定义参数优化线程池并异步化沙箱执行与 AI 诊断任务，降低高并发提交下的线程耗尽风险</li>
              <li><strong>低成本全栈云原生部署</strong>：前端基于 Vercel 边缘节点自动构建，后端在阿里云通过 Docker Compose 编排 Spring Boot 3 与 MySQL 环境上线</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>核心框架: Spring Boot 3.3.5, MyBatis-Plus 3.5.7, MySQL 8.0</li>
              <li>AI 能力接入: LangChain4j 0.36.2, DashScope / qwen-plus, SSE 流式输出</li>
              <li>前端体系: Vue 3, Vite 5, TailwindCSS, Monaco Editor, Vercel</li>
              <li>部署方案: Docker, Docker Compose, 阿里云宿主机, CORS 与安全组配置</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. LangChain4j 大模型辅导引擎</h3>
            <p>系统对接阿里云通义千问大模型，为传统 OJ 平台补足“错误解释”和“调试建议”能力：</p>
            <ul>
              <li>使用 LangChain4j 对接 DashScope 的 qwen-plus 模型</li>
              <li>自动捕获编译失败、运行报错等异常上下文，通过结构化 Prompt 模板生成调试建议</li>
              <li>平均生成耗时控制在 2 到 3 秒，实现从“判题机”到“智能助教”的能力升级</li>
            </ul>

            <h3>2. 轻量级代码评测与安全执行链路</h3>
            <p>围绕在线判题的基础能力，系统提供 Java / C++ 代码编译运行与标准输出校验机制：</p>
            <ul>
              <li>使用 Java 原生 ProcessBuilder 构建判题执行链路，覆盖编译、运行、异常捕获与输出比对</li>
              <li>支持题目、测试用例与判题结果的完整数据流转</li>
              <li>在轻量级演示场景下兼顾实现成本、可用性与后续沙箱强化空间</li>
            </ul>

            <h3>3. 长耗时链路异步化重构</h3>
            <p>针对代码沙箱安全运行与大模型推理双重叠加带来的长时阻塞，项目对关键链路进行了异步化重构：</p>
            <ul>
              <li>基于自定义参数优化的核心线程池拆分判题任务与 AI 诊断任务</li>
              <li>将同步阻塞链路改造成异步执行，降低高并发提交场景下工作线程被长时间占用的风险</li>
              <li>配合 SSE 输出流式辅导结果，改善用户等待体验</li>
            </ul>

            <h3>4. 低成本全栈云原生部署</h3>
            <p>系统采用彻底的前后端分离与跨云部署方案，在保证成本可控的同时完成真实上线：</p>
            <ul>
              <li>前端基于 Vue3 依托 Vercel 实现边缘节点零配置 CI/CD 与全球加速</li>
              <li>后端在阿里云宿主机上通过 Docker Compose 编排 Spring Boot 3 与 MySQL 服务</li>
              <li>通过精细化配置全局 CORS 策略与云安全组规则，解决复杂跨域与服务隔离问题</li>
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
    return '校园信息实验室资源调度与预约系统'
  } else if (projectId.value === 'ai-oj-sandbox') {
    return 'AI-OJ 智能算法辅助评测系统'
  }
  return '项目详情'
})

const projectTags = computed(() => {
  if (projectId.value === 'ai-assistant') {
    return ['Spring AI', 'Redis Vector Store', 'OSS', 'Function Calling', 'SSE', 'RuoYi']
  } else if (projectId.value === 'order-system') {
    return ['Spring Cloud', 'Redis', 'RabbitMQ', 'Redisson', 'Lua', 'WebSocket']
  } else if (projectId.value === 'ai-oj-sandbox') {
    return ['Spring Boot 3', 'MyBatis-Plus', 'LangChain4j', 'DashScope', 'Vue3 + Vite', 'Docker Compose']
  }
  return []
})

const projectActions = computed<ProjectAction[]>(() => {
  if (projectId.value === 'ai-assistant') {
    return [
      {
        label: 'GitHub',
        href: 'https://github.com/citen-xx/springAi-compus-brillant-helper',
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
