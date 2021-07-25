import { defineComponent } from 'vue'
import { GithubLogo } from '../icons/logos'
import { HeartIcon } from '../icons/solid'

export default defineComponent({
  name: 'Footer',

  setup() {
    return () => (
      <footer class="bg-gray-100 dark:bg-gray-900">
        <div class="flex flex-col items-center p-6 mx-auto space-y-4 text-gray-500  md:space-y-0 md:flex-row md:justify-between max-w-7xl">
          <a
            href="https://github.com/Kamona-WD/page-header-vue"
            target="_blank"
            class="transition-all hover:-rotate-12 hover:scale-105 hover:text-gray-800 dark:hover:text-gray-100"
          >
            <span class="sr-only">Source code on github</span>

            <GithubLogo aria-hidden="true" class="w-8 h-8" />
          </a>
          <p class="flex items-center justify-center space-x-1 text-sm">
            <span>Made with</span>
            <span>
              <span class="sr-only">love</span>
              <HeartIcon aria-hidden="true" class="w-5 h-5 text-red-600" />
            </span>
            <span>by</span>
            <a href="https://github.com/kamona-wd" target="_blank" class="text-blue-500 hover:underline">
              Ahmed Kamel
            </a>
          </p>
        </div>
      </footer>
    )
  },
})
