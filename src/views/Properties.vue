<template>
  <div class="w-full flex flex-wrap p-10">
    <h2
      class="
        text-2xl
        font-bold
        leading-7
        text-gray-900
        sm:text-3xl sm:truncate
        text-center
      "
    >
      KSA Properties
    </h2>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-1
        md:grid-cols-1
        lg:grid-cols-1
        xl:grid-cols-3
        gap-5
      "
    >
      <Suspense>
        <template #default>
          <Kproperties />
        </template>
        <template #fallback>
          <div class="w-full flex p-10">
            <Loading />
          </div>
        </template>
      </Suspense>
    </div>
    <h1
      class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
    >
      International Properties
    </h1>
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-1
        md:grid-cols-1
        lg:grid-cols-1
        xl:grid-cols-3
        gap-5
      "
    >
      <Suspense>
        <template #default>
          <Iproperties />
        </template>
        <template #fallback>
          <div class="w-full flex p-10">
            <Loading />
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "Home",
  components: {
    Loading,
    Kproperties: defineAsyncComponent(() => import("@/components/Kproperties")),
    Iproperties: defineAsyncComponent(() => import("@/components/Iproperties")),
  },
};
</script>
