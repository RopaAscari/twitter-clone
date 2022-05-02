<style scoped lang="scss" src="./dashboard.scss"></style>
<script lang="ts" src="./dashboard.ts"></script>
<template>
  <div class="[ dashboard ][ grid ]">
    <!-- Header -->
    <div class="[ h-0 ]"></div>
    <!-- Body -->
    <div class="[ flex ]">
      <sidebar />
        <div>
          <navbar />
            <transition name="fade">
              <router-view />
            </transition>
        </div>
    </div>
  </div>
</template>
