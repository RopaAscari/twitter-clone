<style scoped lang="scss" src="./trending.scss"></style>
<script lang="ts" src="./trending.ts"></script>
<template>
  <div class="[ trending overflow-y-hidden h-screen ]">
    <div class="[ w-full ]">
      <header
        class="[ bg-app-background fixed flex justify-between w-6/6 mt-2 ml-3 field-width ]"
      >
        <b-field type="is-info" class="[ w-full ]">
          <b-autocomplete
            expanded
            rounded
            clearable
            icon="maginfy"
            v-model="name"
            :data="options"
            @input="onSearch"
            placeholder="Search Twitter"
            custom-class="[ bg-app-search w-full placeholder-typography-light border-transparent ]"
            class="[ placeholder-typography-light w-full rounded-full pt-2 z-50 border-transparent  ]"
            @select="(option) => (selected = option)"
          >
            <template slot-scope="props" class="[ z-50 ]">
              <div class="[ media z-50 ]">
                <div class="[ media-left z-50  ]">
                  <img
                    width="50"
                    class="[ rounded-full ]"
                    :src="props.option.profilePic"
                  />
                </div>
                <div class="[ no-underline ]">
                  <p class="[ no-underline font-bold text-md ]">
                    {{ props.option.displayName }}
                  </p>
                  <p>{{ props.option.username }}</p>
                </div>
              </div>
            </template>
            <template #empty>No results found</template>
          </b-autocomplete>
        </b-field>
      </header>
    </div>

    <br />
    <br />

    <div class="[ p-4 mt-2 ]">
      <div class="[ bg-app-trending w-6/12 rounded-lg ]">
        <div class="[ flex w-full justify-between text-center p-4 ]">
          <span class="[ font-bold text-xl text-typography-primary ]"
            >Trends for you</span
          >
          <button
            class="[ hover:bg-button-hover rounded-full p-1 ]"
            @click="isSettingsOpen = true"
          >
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
          class="[ pl-4 pr-4 mt-4 flex justify-between hover:bg-button-hover cursor-pointer ]"
        >
          <div>
            <span class="[ text-sm text-typography-tertiary ]">{{
              trend.title
            }}</span>
            <p class="[ font-bold ]">{{ trend.subtitle }}</p>
            <span class="[ text-sm text-typography-tertiary ]">{{
              trend.miniSubtitle
            }}</span>
          </div>

          <div>
            <b-dropdown class="[ ]" aria-role="list">
              <template class="[  ]" #trigger="{}">
                <button
                  type="button"
                  class="[  hover:bg-button-hover2 rounded-full text-center justify-center flex align-middle mt-4 ]"
                >
                  <svg
                    class="[ h-6 w-6 hover:text-button-hover1 text-center z-0 ]"
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
        <button class="[ hover:bg-button-hover w-full h-16 ]">
          <p class="[ text-app-button p-4 mb-5 text-left ]">Show More</p>
        </button>
      </div>
    </div>

    <div class="[ p-4 ]">
      <div class="[ bg-app-trending w-6/12 rounded-lg ]">
        <div class="[ flex w-full justify-between text-center p-4 ]">
          <span class="[ font-bold text-xl text-typography-primary ]"
            >Who to follow</span
          >
        </div>
        <div
          :key="following.id"
          v-for="following in whoToFollow"
          class="[ p-4 flex justify-between hover:bg-button-hover cursor-pointer ]"
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
            <b-button
              size="is-small"
              @click="followUser(following)"
              v-if="!following.isFollowing"
              class="[ bg-typography-primary hover:bg-button-hover4 text-white font-bold py-0 px-5 rounded-full text-center ]"
            >
              <p class="[ text-app-background text-center mt-2 mb-2 ]">
                Follow
              </p>
            </b-button>

             <b-button
              size="is-small"
              v-else
              @click="openUnfollowModal(following)"
              class="[ border-2 hover:border-transparent bg-app-background hover:text-typography-error hover:bg-button-failure text-white font-bold py-0 px-5 rounded-full text-center ]"
            >
              <p
                class="[ text-typography-secondary font-normal hover:text-typography-error text-center mt-2 mb-2 ]"
              >
                Following
              </p>
            </b-button>
          </div>
        </div>
        <button class="[ hover:bg-button-hover w-full h-16 ]">
          <p class="[ text-app-button p-4 mb-5 text-left ]">Show More</p>
        </button>
      </div>
    </div>

    <b-modal
      :active="isUnfollowing"
      trap-focus
      :destroy-on-hide="false"
      aria-modal
    >
      <div class="[ align-middle items-center flex ml-64 ]">
        <div class="[ bg-app-background w-5/12 rounded-2xl p-5 ]">
          <p class="[ font-bold text-xl text-typography-primary ]">
            Unfollow {{ currentUnfollowing.username }}?
          </p>

          <p class="[ mt-4 text-typography-secondary text-sm ]">
            Their Tweets will no longer show up in your home timeline. You can
            still view their profile, unless their Tweets are protected.
          </p>

          <button
            @click="unfollowUser()"
            class="[ mt-6 bg-typography-primary hover:bg-button-hover4 text-white font-bold w-full rounded-full text-center ]"
          >
            <p
              class="[ text-app-background text-center mt-2 mb-2 font-semibold ]"
            >
              Unfollow
            </p></button
          ><br />

          <button
            @click="closeUnfollowModal()"
            class="[ mt-2 bg-app-background hover:bg-button-hover3 text-white font-bold w-full rounded-full text-center ]"
          >
            <p
              class="[ text-typography-secondary font-normal text-center mt-2 mb-2 ]"
            >
              Cancel
            </p>
          </button>
        </div>
      </div>
    </b-modal>
    <b-modal
      :active="isSettingsOpen"
      trap-focus
      :destroy-on-hide="false"
      aria-modal
    >
      <div class="[ align-middle items-center flex ml-64 ]">
        <div class="[ bg-app-background w-10/12 rounded-2xl p-5 mb-20 ]">
          <div class="[ flex items-center ]">
            <b-icon
              icon="times"
              class="[ font-normal cursor-pointer ]"
              size="is-small"
              @click.native="isSettingsOpen = false"
            >
            </b-icon>
            <p class="[ font-bold text-xl ml-10 ]">Trends</p>
          </div>
          <p class="[ font-bold mt-6 text-xl text-typography-primary ]">
            Location
          </p>
          <div class="[ flex justify-between ]">
            <div class="[ mt-4 ]">
              <p>Show content in this location</p>
              <p class="[ text-sm mt-2 ]">
                When this is on, you'll see what's happening around you right
                now.
              </p>
            </div>
            <div>
              <b-field>
                <b-checkbox type="is-info" v-model="locationCheckbox">
                </b-checkbox>
              </b-field>
            </div>
          </div>

          <p class="[ font-bold text-xl mt-8 text-typography-primary ]">
            Personalization
          </p>
          <div class="[ flex justify-between ]">
            <div class="[ mt-4 ]">
              <p>Trends for you</p>
              <p class="[ text-sm mt-2 ]">
                You can personalize trends based on your location and who you
                follow
              </p>
            </div>
            <div>
              <b-field>
                <b-checkbox type="is-info" v-model="trendingCheckbox">
                </b-checkbox>
              </b-field>
            </div>
          </div>
          <div class="[ h-64 ]"></div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
