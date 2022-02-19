<style scoped lang="scss" src="./twitter.scss"></style>
<script lang="ts" src="./twitter.ts"></script>
<template>
  <div class="[ twitter overflow-y-hidden ]">
    <transition name="fade">
      <div class="[ grid grid-cols-3 overflow-y-hidden ]" v-if="hasLoaded">
        <navigation-menu />
        <div class="[ relative ]">
          <div class="[ fixed w-2/6 min-h-screen overflow-y-scroll ]">
            <timeline-feed />
          </div>
        </div>
        <div class="[ w-full ]">
          <trending />
        </div>
      </div>
      <div class="grid place-items-center h-screen" v-else>
        <img class="" src="../../assets/img/twitter.gif" />
      </div>
    </transition>
  </div>
</template>
