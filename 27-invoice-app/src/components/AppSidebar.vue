<template>
  <aside class="bg-gray-700 w-[300px] h-screen flex">
    <h3 class="text-2xl font-bold mt-2 p-2">Fatura Listesi</h3>
    <div
      v-for="invoice in invoices"
      :key="invoice.id"
      class="odd:bg-gray-600 flex justify-between items-center p-2"
    >
      <span>#{{ invoice.id.toString().slice(5, 10) }}</span>
      <span>{{ invoice.contactInfo.contact_name }}</span>
      <span>
        <div class="flex gap-1">
          <button class="danger-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current"
              height="16"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
              />
            </svg>
          </button>
          <button @click="editInvoice(invoice)" class="purple-button text-xs">
            view
          </button>
        </div>
      </span>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps({ invoices: Array, editInvoice: Function });
</script>
