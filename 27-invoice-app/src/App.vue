<template>
  <div
    class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center"
  >
    <AppSidebar :invoices="invoiceList" :editInvoice="editInvoice" />
    <InvoiceContent
      :saveInvoice="saveInvoice"
      :activeInvoice="state.activeInvoice"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import InvoiceContent from "./components/AppInvoiceContent.vue";
import AppSidebar from "./components/AppSidebar.vue";
const invoiceList = ref([]);
const state = reactive({ activeInvoice: null });
const saveInvoice = (invoice) => {
  console.log("invoice =>> ", invoice);
  invoiceList.value.push(invoice);
};
const editInvoice = (invoice) => {
  console.log("invoice =>> ", invoice);
  state.activeInvoice = invoice;
};
</script>
