<template>
  <footer
    class="
      relative
      bg-white
      px-4
      sm:px-8
      lg:px-16
      xl:px-40
      2xl:px-64
      pt-12
      pb-10
      text-center
      sm:text-left
    "
  >
    <div class="flex flex-col sm:flex-row sm:flex-wrap">
      <div class="sm:w-1/2 lg:w-1/5">
        <h6 class="text-sm text-gray-600 font-bold uppercase">Company</h6>
        <ul class="mt-4">
          <li><a href="#">Resources</a></li>
          <li class="mt-2"><a href="#">Careers</a></li>
        </ul>
      </div>

      <div class="mt-8 sm:w-1/2 sm:mt-0 lg:w-1/5 lg:mt-0">
        <h6 class="text-sm text-gray-600 font-bold uppercase">Legal</h6>
        <ul class="mt-4">
          <li><a href="#">NMLS Consumer Access</a></li>
          <li class="mt-2"><a href="#">Privacy Policy</a></li>
          <li class="mt-2"><a href="#">Terms of Use</a></li>
          <li class="mt-2"><a href="#">Disclosures & Licensing</a></li>
        </ul>
      </div>

      <div class="mt-8 sm:w-1/2 sm:mt-12 lg:w-1/5 lg:mt-0">
        <h6 class="text-sm text-gray-600 font-bold uppercase">Contact</h6>
        <ul class="mt-4">
          <li><a href="#">hello@fairrate.com</a></li>
          <li class="mt-2"><a href="#">+62 202 555 0117</a></li>
        </ul>
      </div>

      <div class="mt-12 sm:w-1/2 lg:w-2/5 lg:mt-0 lg:pl-12">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="188"
            height="39"
            class="mx-auto sm:mx-0"
          >
            <text transform="translate(87 29)" fill="#454f5b">
              <tspan x="0" y="0">FairRate</tspan>
            </text>
            <path d="M54 39H0L27 6l27 33zM23 22v11h8V22h-8z" fill="#4ad5f6" />
            <path d="M54 0L40 16h27L54 0" fill="#95cdb1" />
            <path d="M69 18L55 34h27L69 18" fill="#ffc48b" />
          </svg>
        </div>

        <p class="text-base text-gray-600 mt-4">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh.
        </p>
      </div>
    </div>
    <div class="mt-16">
      <hr class="mb-8" />
      <p class="text-sm text-gray-600">2019 © FairRate. All rights reserved.</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
