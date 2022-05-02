<style scoped lang="scss" src="./dashboard-table.scss"></style>
<script lang="ts" src="./dashboard-table.ts"></script>
<template>
  <div id="app" class="[ overflow-x ]">
    <br />
    <br />
    <div class="[ flex justify-between ]" style="width: 85% !important">
      <h2>Dashboard</h2>
      <b-button
        @click="isTransactionAdding = true"
        class="items-end rounded-md"
        size="is-small"
        type="is-info"
        ><h6 class="text-xs">Add Transaction</h6></b-button
      >
    </div>
    <br />
    <br />

    <section class="[ p-2 ]" style="width: 85% !important">
      <b-table
        :data="data"
        class="shadow-2xl rounded-3xl"
        :paginated="isPaginated"
        :per-page="perPage"
        :checkable="true"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :pagination-position="paginationPosition"
        :default-sort-direction="defaultSortDirection"
        :pagination-rounded="isPaginationRounded"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
        default-sort="user.first_name"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        :page-input="hasInput"
        :pagination-order="paginationOrder"
        :page-input-position="inputPosition"
        :debounce-page-input="inputDebounce"
      >
        <b-table-column
          field="id"
          label="ID"
          width="40"
          sortable
          numeric
          v-slot="props"
        >
          <h6 class="[ text-sm font-bold ]">{{ props.row.id }}</h6>
        </b-table-column>

        <b-table-column
          field="user.first_name"
          label="First Name"
          sortable
          class="[ text-sm ]"
          v-slot="props"
        >
          <h6 class="text-sm">{{ props.row.user.first_name }}</h6>
        </b-table-column>

        <b-table-column
          field="user.last_name"
          label="Last Name"
          sortable
          v-slot="props"
        >
          <h6 class="text-sm">{{ props.row.user.last_name }}</h6>
        </b-table-column>

        <b-table-column
          field="date"
          label="Date"
          sortable
          centered
          v-slot="props"
        >
          <span class="tag is-success">
            {{ new Date(props.row.date).toLocaleDateString() }}
          </span>
        </b-table-column>

        <b-table-column label="Gender" v-slot="props">
          <span>
            <b-icon
              pack="fas"
              :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"
            >
            </b-icon>
            <h6 class="text-sm">{{ props.row.gender }}</h6>
          </span>
        </b-table-column>
      </b-table>
    </section>

    <b-modal
      trap-focus
      aria-modal
      :width="500"
      has-modal-card
      aria-role="dialog"
      :destroy-on-hide="false"
      aria-label="Example Modal"
      close-button-aria-label="Close"
      v-model="isTransactionAdding"
    >
      <form  class="w-screen">
        <div class="modal-card w-1/4" style="width: auto">
          <header class="modal-card-head">
            <h6 class="modal-card-title text-md">Create transaction</h6>
            <button
              type="button"
              class="delete"
              @click="isTransactionAdding = false"
            />
          </header>
          <section class="modal-card-body">
            <b-field label="Sender">
              <b-input type="text" :value="email" placeholder="Sender" required>
              </b-input>
            </b-field>

            <b-field label="Receipient">
              <b-input
                type="text"
                :value="email"
                placeholder="Receipient"
                required
              >
              </b-input>
            </b-field>

            <b-field label="Amount">
              <b-input
                type="number"
                :value="email"
                placeholder="Amount"
                required
              >
              </b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <b-button label="Close" @click="isTransactionAdding = false" />
            <b-button label="Confirm" type="is-primary" />
          </footer>
        </div>
      </form>
    </b-modal>
  </div>
</template>
