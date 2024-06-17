<template>
  <section
    class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl"
  >
    <!-- FAtura Bilgileri -->
    <AppHeading title="Fatura Bilgileri" />
    <ContactSection :contact="state.contactInfo" />

    <div class="mt-5">
      <AppHeading title="Fatura Kalemleri" />
      <InvoiceItems :items="state.items" :AddInvoiceItem="AddInvoiceItem" />
    </div>
    <!-- Summary -->
    <InvoinceSummary :items="state.items" />

    <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
    <div class="actionbar text-right my-5">
      <button @click="onSubmit" class="purple-button">Kaydet</button>
    </div>
  </section>
</template>

<script setup>
import AppHeading from "./ui/AppHeading.vue";
import InvoiceItems from "./InvoiceItems.vue";
import InvoinceSummary from "./InvoinceSummary.vue";
import ContactSection from "./ContactSection.vue";
import { reactive, provide, watch } from "vue";
const props = defineProps({
  saveInvoice: Function,
  activeInvoice: [Object, null],
});
const state = reactive({
  contactInfo: {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  },
  items: [],
});
const AddInvoiceItem = () => {
  state.items.push({
    id: new Date().getTime(),
    name: null,
    qty: null,
    unit_price: 0.0,
    total_price: 0.0,
  });
};
const DeleteInvoiceItem = (invoiceItem) => {
  console.log(invoiceItem);

  state.items = state.items.filter((item) => item.id !== invoiceItem.id);
};
provide("DeleteInvoiceItem", DeleteInvoiceItem);
const onSubmit = () => {
  props.saveInvoice({
    ...state,
    created_At: new Date(),
    id: new Date().getTime(),
  });
  state.contactInfo = {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  };
  state.items = [];
};
watch(
  () => props.activeInvoice,
  (activeInvoice) => {
    if (activeInvoice) {
      state.contactInfo = { ...activeInvoice.contactInfo };
      state.items = [...activeInvoice.items];
    } else {
      state.contactInfo = {
        contact_name: null,
        email: null,
        city: null,
        country: null,
        zipcode: null,
      };
      state.items = [];
    }
  }
);
</script>
