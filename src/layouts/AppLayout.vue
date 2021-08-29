<template>
  <component :is="layout">
    <div class="w-full">
      <slot />
    </div>
  </component>
</template>
<script>
/*import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout";*/
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout";
export default {
  name: "AppLayout",
  setup() {
    const router = useRoute();
    const layout = ref(DefaultLayout);

    watch(
      () => router.meta,
      async (meta) => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || DefaultLayout;
        } catch (e) {
          layout.value = DefaultLayout;
        }
      },
      { immediate: true }
    );
    return {
      layout,
    };
    /*const route = useRoute();
    const layout = ref(DefaultLayout);

    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || DefaultLayout;
        } catch (e) {
          layout.value = DefaultLayout;
        }
      },
      { immediate: true }
    );

    return {
      layout,
    };*/
  },
};
</script>
