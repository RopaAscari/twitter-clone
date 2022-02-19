<style scoped lang="scss" src="./trending.scss"></style>
<script lang="ts" src="./trending.ts"></script>
<template>
  <div class="[ trending overflow-y-hidden h-screen ]">
    <div class="[ w-full ]">
      <header
        class="[ bg-app-background fixed flex justify-between w-6/6 mt-2 ml-3 ]"
      >
        <b-field type="is-auto-complete">
          <b-autocomplete
            expanded
            clearable
            icon="search"
            v-model="name"
            :data="filteredDataArray"
            placeholder="Search Twitter"
            custom-class="[ bg-app-search ]"
            class="[ placeholder-typography-light bg-app-search field-width h-12 rounded-full pl-4 pt-2 ]"
            @select="(option) => (selected = option)"
          >
            <template #empty>No results found</template>
          </b-autocomplete>
        </b-field>
      </header>
    </div>

    <br />
    <br />

    <div class="[ p-4 mt-2 ]">
      <div class="[ bg-app-trending w-7/12 rounded-lg ]">
        <div class="[ flex w-full justify-between text-center p-4 ]">
          <span class="[ font-bold text-2xl text-typography-primary ]"
            >Trends for you</span
          >
          <button class="[ hover:bg-app-hover rounded-full ]">
            <svg
              class="h-6 w-6 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        <div
          :key="trend.id"
          v-for="trend in trends"
          class="[ pl-4 pr-4 mt-4 flex justify-between hover:bg-app-hover cursor-pointer ]"
        >
          <div>
            <span class="[ font-medium text-sm text-typography-tertiary ]">{{
              trend.title
            }}</span>
            <p class="[ font-bold ]">{{ trend.subtitle }}</p>
            <span class="[ font-medium text-sm text-typography-tertiary ]">{{
              trend.miniSubtitle
            }}</span>
          </div>

          <div>
            <b-dropdown aria-role="list">
              <template #trigger="{}">
                <button
                  type="button"
                  class="[ hover:bg-app-hover2 rounded-full text-center justify-center flex align-middle mt-4 ]"
                >
                  <svg
                    class="[ h-6 w-6 hover:text-button-hover text-center ]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </button>
              </template>
              <b-dropdown-item
                class="[ no-underline flex text-center items-center ]"
                aria-role="listitem"
              >
                <svg
                  class="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Not interested in this item</b-dropdown-item
              >
              <b-dropdown-item
                class="[ no-underline flex text-center items-center ]"
                aria-role="listitem"
              >
                <svg
                  class="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                This trend is harmful or spammy</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>
        <button class="[ hover:bg-app-hover w-full h-16 ]">
          <p class="[ text-app-button p-4 mb-5 text-left ]">Show More</p>
        </button>
      </div>
    </div>

    <div class="[ p-4 ]">
      <div class="[ bg-app-trending w-7/12 rounded-lg ]">
        <div class="[ flex w-full justify-between text-center p-4 ]">
          <span class="[ font-bold text-2xl text-typography-primary ]"
            >Who to follow</span
          >
        </div>
        <div
          :key="following.id"
          v-for="following in whoToFollow"
          class="[ p-4 flex justify-between hover:bg-app-hover cursor-pointer ]"
        >
          <div class="[ flex ]">
            <img
              class="[ w-12 h-12 rounded-full ]"
              :src="following.profilePic"
            />
            <div class="[ ml-3 ]">
              <div class="[ flex ]">
                <p class="[ font-medium text-md ]">
                  {{ following.displayName }}
                </p>
                <img
                  v-if="following.isVerified"
                  class="[ w-5 h-5 rounded-full ml-2 ]"
                  src="../../assets/img/verified.png"
                />
              </div>
              <p class="[ font-normal text-md text-typography-tertiary ]">
                {{ following.username }}
              </p>
              <div class="[ flex ]" v-if="following.isPromoted">
                <div class="[ h-4 w-4 bg-typography-secondary rounded-sm ]">
                  <svg
                    class="h-4 w-4 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
                <p
                  class="[ font-normal text-sm text-typography-tertiary ml-2 ]"
                >
                  Promoted
                </p>
              </div>
            </div>
          </div>

          <div>
            <button
              class="[ bg-typography-primary hover:bg-typography-primary text-white font-bold py-0 px-5 rounded-full text-center ]"
            >
              <p class="[ text-app-background text-center mt-2 mb-2 ]">
                Follow
              </p>
            </button>
          </div>
        </div>
        <button class="[ hover:bg-app-hover w-full h-16 ]">
          <p class="[ text-app-button p-4 mb-5 text-left ]">Show More</p>
        </button>
      </div>
    </div>
  </div>
</template>
