<style scoped lang="scss" src="./timeline-feed.scss"></style>
<script lang="ts" src="./timeline-feed.ts"></script>
<template>
  <div
    class="[ h-screen overflow-y-scroll border-l-2 border-r-2 border-app-main ]"
  >
    <div class="[ overflow-y-scroll ]">
      <header class="[ navbar fixed flex justify-between w-2/6 ]">
        <div class="[ mt-2 ]">
          <p class="[ text-xl font-bold mb-3 ml-3 ]">Home</p>
        </div>
        <div class="[ pl-4 pr-4 pt-4 ]">
          <svg
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
            />
            <path
              d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
            />
            <path
              d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
            />
            <path
              d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
            />
            <path
              d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
            />
            <path
              d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
            />
            <path
              d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
            />
            <path
              d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
            />
          </svg>
        </div>
      </header>

      <br />
      <br />

      <div
        class="[ flex-1 overflow-y-auto border-b-2 border-app-main pl-4 pr-4 pt-4 ]"
      >
        <div class="[ flex ]">
          <img
            class="[ w-16 h-16 rounded-full ]"
            src="../../assets/img/avatar.png"
          />
          <input
            v-model="tweet"
            class="[ placeholder-typography-light placeholder-opacity-75 text-typography-tertiary text-xl mt-5 ml-5 border-none content-center ]"
            placeholder="What's happening?"
          />
        </div>

        <div class="[ flex justify-between ]">
          <div class="[ flex ml-24 ]">
            <button class="[ mt-2 hover:bg-app-hover2 rounded-full p-2 ]">
              <svg
                class="h-6 w-6 text-app-button"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </button>
            <button class="[ mt-2 hover:bg-app-hover2 rounded-full p-2 ]">
              <svg
                stroke-width="0.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                class="[ gif h-6 w-6 text-app-button ]"
              >
                <g>
                  <path
                    stroke-width="0.5"
                    fill="currentColor"
                    d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"
                  ></path>
                  <path
                    stroke-width="0.5"
                    fill="currentColor"
                    d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"
                  ></path>
                </g>
              </svg>
            </button>
            <button class="[ mt-2 hover:bg-app-hover2 rounded-full p-2 ]">
              <svg
                class="h-6 w-6 text-app-button"
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
                <rect x="3" y="12" width="6" height="8" rx="1" />
                <rect x="9" y="8" width="6" height="12" rx="1" />
                <rect x="15" y="4" width="6" height="16" rx="1" />
                <line x1="4" y1="20" x2="18" y2="20" />
              </svg>
            </button>
            <button class="[ mt-2 hover:bg-app-hover2 rounded-full p-2 ]">
              <svg
                class="h-6 w-6 text-app-button"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button class="[ mt-2 hover:bg-app-hover2 rounded-full p-2 ]">
              <svg
                class="h-6 w-6 text-app-button"
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
                <rect x="4" y="5" width="16" height="16" rx="2" />
                <line x1="16" y1="3" x2="16" y2="7" />
                <line x1="8" y1="3" x2="8" y2="7" />
                <line x1="4" y1="11" x2="20" y2="11" />
                <rect x="8" y="15" width="2" height="2" />
              </svg>
            </button>
            <button class="[ mt-2 hover:bg-app-hover2 rounded-full p-2 ]">
              <svg
                class="h-6 w-6 text-app-button font-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
          <div>
            <b-button
              :disabled="disabled"
              class="[ bg-app-button hover:bg-button-hover text-white font-bold px-8 rounded-full ]"
            >
              <p class="[ text-app-background text-center mt-2 mb-2 ]">Tweet</p>
            </b-button>
          </div>
        </div>
      </div>
      <button class="[ hover:bg-app-hover3 w-full h-12 ]">
        <p class="[ text-center text-app-button text-lg ]">Show 3 Tweets</p>
      </button>
    </div>
    <div
      :key="post.id"
      v-for="post in posts"
      class="[ flex p-4 border-t-2 border-app-main hover:bg-app-hover3 cursor-pointer w-full ]"
    >
      <div>
        <img class="[ w-10 h-10 rounded-full ]" :src="post.profilePic" />
      </div>
      <div class="[ ml-5 w-11/12 ]">
        <div class="[ flex justify-between ]">
          <div class="[ flex ]">
            <span class="[ font-semibold text-lg ]">{{
              post.displayName
            }}</span>

            <img
              v-if="post.isVerified"
              class="[ w-5 h-5 rounded-full ml-2 mt-1 ]"
              src="../../assets/img/verified.png"
            />

            <div class="[ ml-2 mt-0 text-typography-light ]">
              {{ post.username }}
            </div>
            <span class="[ ml-1 text-center font-bold ]">.</span>
            <span class="[ ml-1 text-center font-medium ]">{{
              post.timeElasped
            }}</span>
          </div>
          <b-dropdown
            position="is-bottom-left"
            append-to-body
            aria-role="menu"
            trap-focus
          >
            <template #trigger="{}">
              <button
                type="button"
                class="[ hover:bg-app-hover2 rounded-full text-center justify-center flex align-middle ]"
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
                class="[ h-6 w-6 mr-2 ]"
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
              Not interested in this tweet</b-dropdown-item
            >
            <b-dropdown-item
              class="[ no-underline flex text-center items-center mt-4 ]"
              aria-role="listitem"
            >
              <svg
                class="[ h-6 w-6 mr-2 ]"
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
              Unfollow {{ post.username }}</b-dropdown-item
            >
            <b-dropdown-item
              class="[ no-underline flex text-center items-center mt-4 ]"
              aria-role="listitem"
            >
              <svg
                class="[ h-6 w-6 mr-2 ]"
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
              Add/remove {{ post.username }} from Lists</b-dropdown-item
            >
            <b-dropdown-item
              class="[ no-underline flex text-center items-center mt-4 ]"
              aria-role="listitem"
            >
              <svg
                class="[ h-6 w-6 mr-2 ]"
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
              Mute {{ post.username }}</b-dropdown-item
            >
            <b-dropdown-item
              class="[ no-underline flex text-center items-center mt-4 ]"
              aria-role="listitem"
            >
              <svg
                class="[ h-6 w-6 mr-2 ]"
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
              Block {{ post.username }}</b-dropdown-item
            >
            <b-dropdown-item
              class="[ no-underline flex text-center items-center mt-4 ]"
              aria-role="listitem"
            >
              <svg
                class="[ h-6 w-6 mr-2 ]"
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
              Embed Tweet</b-dropdown-item
            >
            <b-dropdown-item
              class="[ no-underline flex text-center items-center mt-4 ]"
              aria-role="listitem"
            >
              <svg
                class="[ h-6 w-6 mr-2 ]"
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
              Report Tweet</b-dropdown-item
            >
          </b-dropdown>
        </div>

        <p class="[ mt-0 ]">{{ post.caption }}</p>

        <div v-if="post.type === 'image'">
          <img class="[ w-full h-3/4 rounded-3xl mt-4 ]" :src="post.media" />
        </div>
        <div v-else>
          <video
            ref="videoRef"
            id="video"
            muted="muted"
            controls
            autoplay
            class="[ w-full h-3/4 rounded-3xl mt-4 ]"
            :src="post.media"
          />
        </div>

        <div class="[ flex justify-between w-full mt-4 ]">
          <button class="[ flex hover:text-app-button ]">
            <svg
              class="[ h-8 w-8 hover:text-app-button hover:bg-app-hover2 rounded-full p-1 ]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
              />
            </svg>
            <span class="[ font-semibold ml-3 mt-1 ]">{{ post.comments }}</span>
          </button>
          <button class="[ flex hover:text-typography-success ]">
            <svg
              class="[ h-8 w-8 hover:bg-button-success rounded-full p-1 ]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              />
            </svg>
            <span class="[ font-semibold ml-3 mt-1 ]">{{ post.retweets }}</span>
          </button>
          <button
            class="[ flex hover:text-typography-error ]"
            @click="likePost(post)"
          >
            <svg
              class="[ h-8 w-8 hover:text-typography-error hover:bg-button-failure rounded-full p-1 ]"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              :fill="post.isLiked ? 'red' : 'none'"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
            <span class="[ font-semibold ml-3 mt-1 ]">{{ post.likes }}</span>
          </button>
          <button
            class="[ hover:bg-app-hover2 rounded-full p-1 hover:text-app-button ]"
          >
            <svg
              class="h-6 w-6 hover:text-app-button"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
