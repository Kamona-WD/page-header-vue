import { defineComponent } from 'vue'

export const BrandLogo = defineComponent({
  name: 'BrandLogo',

  setup() {
    return () => (
      <svg class="text-purple-500" viewBox="0 0 101 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.3137 38.6863C-0.934685 44.9347 -0.934685 55.0653 5.3137 61.3137L39.2548 95.2548C45.5032 101.503 55.6339 101.503 61.8822 95.2548L95.8234 61.3137C102.072 55.0653 102.072 44.9347 95.8234 38.6863L61.8822 4.74517C55.6339 -1.50322 45.5032 -1.50322 39.2548 4.74517L5.3137 38.6863ZM35.936 69.608C39.44 73.016 44.336 74.72 50.624 74.72C54.8 74.72 58.424 73.928 61.496 72.344C64.568 70.712 66.92 68.432 68.552 65.504C70.184 62.576 71 59.144 71 55.208V48.296C71 47.768 70.832 47.36 70.496 47.072C70.208 46.736 69.824 46.568 69.344 46.568H53.072C52.592 46.568 52.184 46.736 51.848 47.072C51.56 47.408 51.416 47.816 51.416 48.296V50.6C51.416 51.128 51.56 51.56 51.848 51.896C52.184 52.184 52.592 52.328 53.072 52.328H63.872V55.352C63.872 59.768 62.672 63.08 60.272 65.288C57.872 67.496 54.656 68.6 50.624 68.6C46.64 68.6 43.52 67.52 41.264 65.36C39.008 63.152 37.784 59.744 37.592 55.136C37.544 53.696 37.52 51.56 37.52 48.728C37.52 45.848 37.544 43.712 37.592 42.32C37.784 37.76 39.008 34.4 41.264 32.24C43.52 30.08 46.64 29 50.624 29C54.08 29 56.816 29.768 58.832 31.304C60.896 32.84 62.288 34.688 63.008 36.848C63.2 37.376 63.392 37.736 63.584 37.928C63.824 38.072 64.184 38.144 64.664 38.144H68.912C69.344 38.144 69.704 38.024 69.992 37.784C70.28 37.544 70.424 37.232 70.424 36.848V36.704C70.328 34.832 69.536 32.816 68.048 30.656C66.56 28.496 64.328 26.672 61.352 25.184C58.424 23.648 54.848 22.88 50.624 22.88C44.384 22.88 39.512 24.584 36.008 27.992C32.504 31.4 30.632 36.056 30.392 41.96C30.344 43.352 30.32 45.608 30.32 48.728C30.32 51.8 30.344 54.056 30.392 55.496C30.632 61.448 32.48 66.152 35.936 69.608Z"
        />
      </svg>
    )
  },
})