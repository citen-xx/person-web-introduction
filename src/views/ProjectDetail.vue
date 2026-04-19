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
        </div>

        <!-- 详细内容区域 -->
        <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700 prose prose-invert max-w-none">
          <div v-if="projectId === 'ai-assistant'">
            <h2>项目背景</h2>
            <p>传统校园教务与生活咨询存在严重的信息孤岛与重复性人工解答问题。本项目旨在打造一个基于 RAG（检索增强生成）架构的校园专属 AI Agent，将分散在各处的规章制度、选课指南、后勤通告转化为可实时交互的智能问答网关，为师生提供 24/7 的智能咨询服务。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>SSE 流式响应</strong>：实现首字响应控制在 500ms 内的“打字机”效果，极大缓解用户等待焦虑</li>
              <li><strong>Redis Lua 滑动窗口限流</strong>：双重动态阻断，保障 Token 资产安全</li>
              <li><strong>Redisson DCL 解决缓存击穿</strong>：热点并发流量下 100% 数据库零冲击</li>
              <li><strong>Redis BitMap 内存优化</strong>：单用户年度签到数据压缩至仅约 46 字节</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>核心框架: Spring Boot 2.7, Vue3, TailwindCSS</li>
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
            <p>针对高校午间就餐高峰期出现的高并发抢单、系统卡顿、套餐超卖等痛点，将传统的单体点餐系统重构为具备高可用、高并发承载能力的交易与履约中台。系统支持 thousands QPS 的并发请求，保障了师生在就餐高峰期的顺畅点餐体验。</p>

            <h2>核心亮点</h2>
            <ul>
              <li><strong>Redisson 乐观锁防超卖</strong>：彻底杜绝极端并发下的库存超卖惨剧</li>
              <li><strong>RabbitMQ 死信延迟队列</strong>：优雅处理超时订单，提升系统吞吐量</li>
              <li><strong>策略模式重构</strong>：消除 if-else 屎山代码，提升系统可扩展性</li>
              <li><strong>AOP 切面幂等性保障</strong>：防止网络抖动导致的重复订单</li>
            </ul>

            <h2>架构设计与技术栈</h2>
            <ul>
              <li>核心框架: Spring Boot, MyBatis-Plus</li>
              <li>并发与缓存: Redis, Redisson, Spring Cache, 线程池</li>
              <li>消息与通信: RabbitMQ (延迟队列), WebSocket, JWT</li>
            </ul>

            <h2>技术实现细节</h2>
            <h3>1. Redisson 乐观锁防超卖实现</h3>
            <p>在秒杀或特价套餐抢购场景下，传统的 JVM 锁（如 synchronized）在分布式环境下形同虚设：</p>
            <ul>
              <li>采用 Redisson 分布式锁作为第一道防线拦截横向并发</li>
              <li>在 MySQL 扣减库存时兜底引入乐观锁（版本号 version 机制）</li>
              <li>彻底杜绝了 ABA 问题与极端并发下的库存超卖（负库存）惨剧</li>
              <li>保障了交易数据的一致性和准确性</li>
            </ul>

            <h3>2. RabbitMQ 死信延迟队列技术</h3>
            <p>针对“下单后 15 分钟未支付需释放库存”的业务需求：</p>
            <ul>
              <li>弃用传统的“定时任务轮询扫表”（极大消耗数据库 I/O 且存在延迟误差）</li>
              <li>引入 RabbitMQ 死信队列（DLX）与 TTL 机制</li>
              <li>将订单作为延迟消息投递，实现时间到达后的精准消费与库存回滚</li>
              <li>系统吞吐量显著提升，数据库压力大幅降低</li>
            </ul>

            <h3>3. 策略模式消除 if-else 屎山代码</h3>
            <p>原系统的订单价格计算模块充斥着大量 if-else 嵌套（如满减、VIP 折扣、新客立减）：</p>
            <ul>
              <li>利用策略模式 (Strategy) 封装独立的计费算法卡片</li>
              <li>结合简单工厂模式 (Factory) 动态分发策略</li>
              <li>严格落实“开闭原则（OCP）”，新增任何营销活动均无需修改核心业务代码</li>
              <li>代码可读性和可维护性大幅提升，减少了线上 Bug 的发生</li>
            </ul>

            <h3>4. AOP 切面保障交易接口幂等性</h3>
            <p>为防止校园网卡顿导致的重复点击提交订单（重复扣款）：</p>
            <ul>
              <li>基于自定义注解 + Spring AOP 切面编程设计了全局防重拦截器</li>
              <li>通过前端派发唯一 Token 结合 Redis setnx 特性</li>
              <li>在业务逻辑执行前完成校验，确保核心交易接口在遭遇网络重发时具备绝对的幂等性</li>
              <li>保障了交易的安全性和可靠性</li>
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

const route = useRoute()
const projectId = computed(() => route.params.id as string)

const projectTitle = computed(() => {
  if (projectId.value === 'ai-assistant') {
    return '校园智能知识库助手'
  } else if (projectId.value === 'order-system') {
    return '高并发餐饮交易与履约中台'
  }
  return '项目详情'
})

const projectTags = computed(() => {
  if (projectId.value === 'ai-assistant') {
    return ['Spring Boot', 'Dify', 'Redis', 'WebFlux', 'RAG', 'SSE']
  } else if (projectId.value === 'order-system') {
    return ['Spring Boot', 'MySQL调优', '分布式锁', '策略模式', 'RabbitMQ', 'WebSocket']
  }
  return []
})
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