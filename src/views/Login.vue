<template>
  <div class="w-full flex flex-wrap">
    <!-- Register Section -->
    <div class="w-full md:w-1/2 flex flex-col">
      <div
        class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12"
      >
        <router-link to="/" class="p-4" alt="Logo">
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

      <div
        class="
          flex flex-col
          justify-center
          md:justify-start
          my-auto
          pt-8
          md:pt-0
          px-8
          md:px-24
          lg:px-32
        "
      >
        <p class="text-center text-3xl">Welcome.</p>
        <form
          class="flex flex-col pt-3 md:pt-8"
          onsubmit="event.preventDefault();"
        >
          <div class="flex flex-col pt-4">
            <label for="email" class="text-lg">Email</label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                mt-1
                leading-tight
                focus:outline-none focus:shadow-outline
              "
            />
          </div>

          <div class="flex flex-col pt-4">
            <label for="password" class="text-lg">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                mt-1
                leading-tight
                focus:outline-none focus:shadow-outline
              "
            />
          </div>

          <input
            type="submit"
            value="Log In"
            class="
              bg-black
              text-white
              font-bold
              text-lg
              hover:bg-gray-700
              p-2
              mt-8
            "
          />
        </form>
        <div class="text-center pt-12 pb-12">
          <p>
            Don't have an account?
            <router-link to="/register" class="underline font-semibold"
              >Register here.</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <div class="w-1/2 shadow-2xl">
      <img
        class="object-cover w-full h-screen hidden md:block"
        src="https://source.unsplash.com/IXUM4cJynP0"
        alt="Background"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
