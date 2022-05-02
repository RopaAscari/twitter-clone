<style scoped lang="scss" src="./navbar.scss"></style>
<script lang="ts" src="./navbar.ts"></script>
<template>
  <div class="[ navbar ]">
    <header
      class="[ fixed flex justify-between w-screen p-1 bg-app-background shadow-xl ]"
    >
      <div class="[ flex justify-between ]" style="width: 85% !important">
        <div class="[ p-2 ]">
          <b-input
            aria
            expanded
            type="text"
            value=""
            icon="magnify"
            size="is-small"
            placeholder="Search"
            custom-class="[ bg-app-search w-full placeholder-typography-light border-transparent ]"
            class="[ placeholder-typography-light w-full rounded-2xl pt-2 z-50 border-transparent ]"
          >
          </b-input>
        </div>

        <div class="[ flex items-center cursor-pointer]">
          <svg
            class="[ h-6 w-6 ]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            <path d="M18.63 13A17.89 17.89 0 0 1 18 8" />
            <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" />
            <path d="M18 8a6 6 0 0 0-9.33-5" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
          &nbsp; &nbsp;
          <img
            class="[ w-6 h-6 rounded-full ]"
            src="../../assets/img/avatar.png"
          />
        </div>
      </div>
    </header>
  </div>
</template>
