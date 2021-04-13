<template>
  <div style="width: 100%; height: 100%">
    <!-- vue2的写法    <transition name="el-zoom-in-top">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition> -->
    <!-- vue3写法 -->
    <transition name="el-zoom-in-top">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </transition>
  </div>
</template>