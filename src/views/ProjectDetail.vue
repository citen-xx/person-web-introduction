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
            <p>这是一个基于 RuoYi 后台框架二次开发的校园 AI 问答与知识库管理平台，融合 Spring AI、通义千问、Redis Vector Store、OSS、SSE 与后台权限管理能力，覆盖标准问答库运营、知识文档上传、向量化入库、RAG 检索增强、Function Calling 与多轮会话记忆，目标不是聊天 Demo，而是可持续扩展的真实 AI 应用型后台系统。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>Spring AI 驱动的通义千问接入</strong>：将早期 Dify 直连模式迁移为 Spring AI 统一抽象，便于组合 RAG、Functions 与 Memory</li>
              <li><strong>RAG 知识库闭环</strong>：完成 OSS 上传、Tika 文档解析、TokenTextSplitter 切片、Redis Vector Store 入库到 similaritySearch 检索的全链路</li>
              <li><strong>SSE 流式对话 + Redis ChatMemory</strong>：基于 conversationId 支持多轮会话、上下文恢复与打字机式输出体验</li>
              <li><strong>标准问答库与限流治理</strong>：通过高频问答库、Redis ZSET/Lua 限流与后台权限体系兼顾稳定性、成本与可维护性</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>核心框架: RuoYi, Spring Boot 4.0.3, Spring Security, JWT</li>
              <li>AI 能力接入: Spring AI 1.0.0-M6, 通义千问 OpenAI Compatible API, Function Calling</li>
              <li>知识库链路: OSS, TikaDocumentReader, TokenTextSplitter, Redis Vector Store, RAG</li>
              <li>稳定性治理: Redis, Redisson, SSE, ChatMemory, Redis ZSET/Lua 限流</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. 基于若依后台的 AI 应用二开</h3>
            <p>项目复用了若依成熟的后台基础设施，不再重复建设权限、日志、认证等系统能力，而是将 AI 业务模块叠加在现有平台之上：</p>
            <ul>
              <li>复用 RuoYi 的用户、角色、菜单、日志审计与参数配置体系</li>
              <li>在 `ruoyi-admin / ruoyi-system / ruoyi-framework / ruoyi-ui` 上叠加 AI 对话、知识文档与工具调用能力</li>
              <li>更贴近企业真实开发模式，具备稳定后台基础与持续扩展空间</li>
            </ul>

            <h3>2. RAG 知识库闭环与文档向量化</h3>
            <p>围绕校园制度、通知公告和办事文档，项目打通了从文档上传到检索增强的完整知识入库链路：</p>
            <ul>
              <li>前端上传文件后由后端接入阿里云 OSS 存储</li>
              <li>通过 `TikaDocumentReader` 解析文本、`TokenTextSplitter` 切片并写入 Redis Vector Store</li>
              <li>对话时执行 `similaritySearch` 召回片段并拼接为系统提示词，再交给模型生成答案</li>
            </ul>

            <h3>3. SSE 流式输出、多轮会话与工具调用</h3>
            <p>项目在 AI 对话层不仅实现了流式返回，还加入了会话记忆与数据库工具调用：</p>
            <ul>
              <li>基于 `SseEmitter` 输出流式响应，前端通过 `fetch + ReadableStream` 呈现打字机效果</li>
              <li>以 `conversationId` 作为会话主键，借助 Redis ChatMemory 持久化上下文</li>
              <li>向模型暴露 `getStudentScore`、`getCardBalance` 等真实数据库查询工具，形成 Function Calling 能力</li>
            </ul>

            <h3>4. 问答库、限流与成本治理</h3>
            <p>针对 AI 接口高成本与稳定性要求，项目设计了确定性问答优先与限流保护的双重方案：</p>
            <ul>
              <li>通过 AI 标准问答库承接高频、确定性问题，降低模型调用成本</li>
              <li>使用 Redis ZSET 滑动窗口限流与 Lua 原子操作保护 AI 对话接口</li>
              <li>结合后台权限与知识文档管理能力，让回答来源可运营、可追溯、可审计</li>
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
            <p>这是一个基于 Spring Boot 3、MyBatis-Plus、MySQL 与 Vue 3 构建的简易在线判题系统，覆盖题目管理、测试用例维护、Java/C++ 代码评测、AI 解题辅导、Monaco 在线编辑器与 Docker Compose 部署能力，定位于轻量级 OJ 训练与 AI 辅助编程实践场景。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>题目与测试用例管理</strong>：支持题目基础信息、详情页和测试用例的完整增删改查</li>
              <li><strong>Java / C++ 简易判题引擎</strong>：基于 ProcessBuilder 完成编译运行、标准输出比对与错误结果返回</li>
              <li><strong>LangChain4j + DashScope 流式辅导</strong>：基于 qwen-plus 和 SSE 输出错误代码分析与优化建议</li>
              <li><strong>前后端一体化交付</strong>：Vue 3 + Monaco Editor 实现在线编辑体验，Docker Compose 支持快速部署上线</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>核心框架: Spring Boot 3.3.5, MyBatis-Plus 3.5.7, MySQL 8.0</li>
              <li>AI 能力接入: LangChain4j 0.36.2, DashScope / qwen-plus, SSE 流式输出</li>
              <li>前端体系: Vue 3, Vite 5, TailwindCSS, Monaco Editor</li>
              <li>部署方案: Docker, Docker Compose, 前后端一体化构建</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. 题目管理与数据初始化</h3>
            <p>项目围绕在线判题系统的基础数据模型，提供题目与测试用例的管理能力：</p>
            <ul>
              <li>支持题目列表、题目详情、测试用例维护与基础 CRUD 操作</li>
              <li>通过 `schema.sql` 与 `init-data.sql` 完成表结构与初始化题目的快速导入</li>
              <li>为判题与 AI 辅导模块提供稳定的题目上下文与标准答案依据</li>
            </ul>

            <h3>2. 基于 ProcessBuilder 的简易判题引擎</h3>
            <p>针对 Java / C++ 代码提交，项目通过原生子进程能力构建轻量级编译运行链路：</p>
            <ul>
              <li>使用 Java 原生 ProcessBuilder 动态完成编译、运行与异常捕获</li>
              <li>围绕标准输入输出构建自动化比对逻辑，返回 AC / WA / 编译错误等结果</li>
              <li>适合演示和轻量使用，同时保留向更严格沙箱机制扩展的空间</li>
            </ul>

            <h3>3. LangChain4j + DashScope 的 AI 流式辅导</h3>
            <p>针对用户提交的错误代码、题目内容与报错输出，项目提供流式 AI 辅导能力：</p>
            <ul>
              <li>基于 LangChain4j 对接 DashScope 的 `qwen-plus` 模型</li>
              <li>使用 `SseEmitter` 将辅导结果实时推送给前端，形成打字机式反馈体验</li>
              <li>围绕题目内容、错误代码和错误输出组织提示词，增强建议的针对性</li>
            </ul>

            <h3>4. Monaco 编辑器与 Docker Compose 部署</h3>
            <p>项目不仅完成了判题与 AI 辅导能力，还提供了完整的前后端交付方案：</p>
            <ul>
              <li>前端基于 Vue 3、TailwindCSS 与 Monaco Editor 搭建在线编码页面</li>
              <li>通过 Dockerfile 和 Docker Compose 编排后端服务与 MySQL 8.0</li>
              <li>支持本地开发、服务器部署与前后端一体化打包构建</li>
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
    return '校园 AI 问答与知识库管理平台'
  } else if (projectId.value === 'order-system') {
    return '校园智算中心预约与资源调度系统'
  } else if (projectId.value === 'ai-oj-sandbox') {
    return 'Simple AI OJ 在线判题与 AI 辅导平台'
  }
  return '项目详情'
})

const projectTags = computed(() => {
  if (projectId.value === 'ai-assistant') {
    return ['Spring AI', 'Redis Vector Store', 'OSS', 'RAG', 'Function Calling', 'SSE']
  } else if (projectId.value === 'order-system') {
    return ['Spring Cloud Alibaba', 'Redis', 'RabbitMQ', 'Redisson', 'Lua', 'Gateway']
  } else if (projectId.value === 'ai-oj-sandbox') {
    return ['Spring Boot 3', 'MyBatis-Plus', 'LangChain4j', 'DashScope', 'Monaco Editor', 'Docker Compose']
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
