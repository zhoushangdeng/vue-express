<template>
  <div style="width: 100%; height: 100%">
    <transition name="el-zoom-in-top">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </transition>
  </div>
</template>