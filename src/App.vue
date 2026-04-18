<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" 
      :class="{ 'bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-800': isScrolled }"
    >
      <div class="container mx-auto px-4 py-4">
        <nav class="flex justify-between items-center">
          <a href="/" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            TechPortfolio
          </a>
          <div class="flex space-x-8">
            <router-link 
              to="/" 
              class="text-gray-300 hover:text-blue-400 font-medium transition-colors"
              active-class="text-blue-400"
            >
              首页
            </router-link>
            <router-link 
              to="/projects" 
              class="text-gray-300 hover:text-blue-400 font-medium transition-colors"
              active-class="text-blue-400"
            >
              项目
            </router-link>
            <router-link 
              to="/blog" 
              class="text-gray-300 hover:text-blue-400 font-medium transition-colors"
              active-class="text-blue-400"
            >
              博客
            </router-link>
          </div>
        </nav>
      </div>
    </header>
    <main class="pt-20">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
</style>