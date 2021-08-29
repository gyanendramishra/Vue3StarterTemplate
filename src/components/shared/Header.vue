<template>
  <header
    class="
      w-full
      bg-transparent
      fixed
      top-0
      left-0
      z-50
      px-4
      sm:px-8
      lg:px-16
      xl:px-40
      2xl:px-64
      py-6
      header
    "
    ref="header"
  >
    <nav class="flex items-center justify-between">
      <div class="">
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="205" height="39">
            <text transform="translate(87 29)" fill="#454f5b" font-size="24">
              <tspan x="0" y="0">Demo App</tspan>
            </text>
            <path d="M54 39H0L27 6l27 33zM23 22v11h8V22h-8z" fill="#4ad5f6" />
            <path d="M54 0L40 16h27L54 0" fill="#95cdb1" />
            <path d="M69 18L55 34h27L69 18" fill="#ffc48b" />
          </svg>
        </router-link>
      </div>

      <div class="block sm:hidden">
        <button
          type="button"
          class="navbar-toggler"
          ref="navbarToggeler"
          @click="handleTogglerNavbar"
        >
          <span class="navbar-toggler-bar"></span>
          <span class="navbar-toggler-bar"></span>
          <span class="navbar-toggler-bar"></span>
        </button>
      </div>

      <div class="hidden sm:flex">
        <ul class="flex flex-col sm:flex-row">
          <li>
            <router-link to="/" class="sm:px-4 py-2 block">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="sm:px-4 py-2 sm:hidden lg:block"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="sm:px-4 py-2 sm:hidden md:block"
              >Contact Us</router-link
            >
          </li>
          <li>
            <router-link
              to="/login"
              class="
                sm:px-4
                py-2
                block
                text-blue-600
                border border-gray-400
                rounded-lg
                ml-4
              "
              >Login</router-link
            >
          </li>
          <li>
            <router-link
              to="/register"
              class="sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4"
              >Get Started</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Header",
  setup() {
    const navbarToggeler = ref(null);
    const header = ref(null);

    const handleTogglerNavbar = () => {
      navbarToggeler.value.classList.toggle("active");
      header.value.classList.addClass("bg-white");
    };

    return {
      header,
      navbarToggeler,
      handleTogglerNavbar,
    };
  },
};
</script>
