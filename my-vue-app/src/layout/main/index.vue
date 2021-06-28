<template>
  <div style="width: 100%; height: 100%">

    <router-view v-slot="{ Component }">
      <keep-alive :max="10">
        <transition name="el-zoom-in-top">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>

  </div>
</template>
