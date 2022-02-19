<style scoped lang="scss" src="./navigation-menu.scss"></style>
<script lang="ts" src="./navigation-menu.ts"></script>
<template>
  <div class="[ navigation-menu overflow-y-hidden grid grid-cols-2 ]">
    <div />

    <div class="[ menu mr-10 desktop:flex mobile:hidden ]">
      <div class="[ p-4 ]">
        <img class="[ h-10 ml-3 ]" src="../../assets/logo/logo.png" />
        <br />

        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path fill="none" stroke="none" d="M0 0h24v24H0z" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <rect x="10" y="12" width="4" height="4" />
            </svg>
            <p class="[ ml-5 text-xl font-bold ]">Home</p>
          </div>
        </button>

        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
            <p class="[ ml-3 text-xl font-light ]">Explore</p>
          </div>
        </button>
        <br />

        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8"
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
                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
              />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
            <p class="[ ml-3 text-xl font-light ]">Notifications</p>
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
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
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <p class="[ ml-3 text-xl font-light ]">Messages</p>
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>

            <p class="[ ml-3 text-xl font-light ]">Bookmarks</p>
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
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
              <line x1="9" y1="6" x2="20" y2="6" />
              <line x1="9" y1="12" x2="20" y2="12" />
              <line x1="9" y1="18" x2="20" y2="18" />
              <line x1="5" y1="6" x2="5" y2="6.01" />
              <line x1="5" y1="12" x2="5" y2="12.01" />
              <line x1="5" y1="18" x2="5" y2="18.01" />
            </svg>
            <p class="[ ml-3 text-xl font-light ]">List</p>
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <p class="[ ml-3 text-xl font-light ]">Profile</p>
            <br />
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
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
            <p class="[ ml-3 text-xl font-light ]">More</p>
            <br />
          </div>
        </button>

        <br />
        <br />

        <button
          class="[ bg-app-button hover:bg-button-hover text-white font-bold py-2 px-32 rounded-full text-center ]"
        >
          <p class="[ text-app-background text-center mt-2 mb-2 ]">Tweet</p>
        </button>

        <button
          class="[ mt-64 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 align-bottom ]"
        >
          <div class="[ flex ]">
            <div>
              <img
                class="[ w-10 h-10 rounded-full ]"
                src="../../assets/img/avatar.png"
              />
            </div>
            <div class="[ ml-4 ]">
              <p class="[ text-md font-bold text-left ]">Ropa</p>
              <p class="[ text-md ]">@ropa02178838</p>
            </div>

            <svg
              class="[ h-8 w-8 text-red-500 ml-12 ]"
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
          </div>
        </button>
      </div>
    </div>
    <div class="[ menu mr-10 desktop:hidden mobile:flex ]">
      <div class="[ p-4 ]">
        <img class="[ h-10 ml-3 ]" src="../../assets/logo/logo.png" />
        <br />

        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
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
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <rect x="10" y="12" width="4" height="4" />
            </svg>
          </div>
        </button>

        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          </div>
        </button>
        <br />

        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
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
                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
              />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
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
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
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
              <line x1="9" y1="6" x2="20" y2="6" />
              <line x1="9" y1="12" x2="20" y2="12" />
              <line x1="9" y1="18" x2="20" y2="18" />
              <line x1="5" y1="6" x2="5" y2="6.01" />
              <line x1="5" y1="12" x2="5" y2="12.01" />
              <line x1="5" y1="18" x2="5" y2="18.01" />
            </svg>
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>

            <br />
          </div>
        </button>
        <br />
        <button class="[ mt-2 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 ]">
          <div class="[ flex ]">
            <svg
              class="h-8 w-8 text-red-500"
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

            <br />
          </div>
        </button>

        <br />
        <br />

        <button
          class="[ mt-64 hover:bg-app-hover rounded-full p-3 pl-5 pr-5 align-bottom ]"
        >
          <div class="[ flex ]">
            <div>
              <img
                class="[ w-10 h-10 rounded-full ]"
                src="../../assets/img/avatar.png"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
