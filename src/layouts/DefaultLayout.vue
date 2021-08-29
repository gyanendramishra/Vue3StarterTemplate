<template>
  <slot name="header">
    <Header />
  </slot>
  <slot></slot>
  <slot name="footer">
    <Footer />
  </slot>
</template>
<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>
