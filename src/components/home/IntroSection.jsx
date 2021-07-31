import { defineComponent, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import AccountScreenSVGComponent from './AccountScreenSVGComponent'
import ReportScreenSVGComponent from './ReportScreenSVGComponent'

const CTAButton = defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { label, link, outline } = props

    return () => (
      <a
        href={link}
        class="relative inline-block overflow-hidden border-2 border-purple-500 rounded-md  group focus:outline-none focus:ring focus:ring-purple-500 focus:ring-offset-1 dark:focus:ring-offset-gray-800"
      >
        <div aria-hidden="true" class="absolute inset-0 flex items-center">
          <div
            class={[
              'w-1/2 h-full transition-all bg-purple-500',
              { 'group-hover:-translate-x-full': !outline, '-translate-x-full group-hover:translate-x-0': outline },
            ]}
          ></div>
          <div
            class={[
              'w-1/2 h-full transition-all bg-purple-500',
              { 'group-hover:translate-x-full': !outline, 'translate-x-full group-hover:translate-x-0': outline },
            ]}
          ></div>
        </div>
        <span
          class={[
            'relative inline-block px-4 py-2 transition-colors',
            {
              'text-white group-hover:text-purple-600 dark:group-hover:text-white': !outline,
              'text-gray-900 dark:text-white group-hover:text-white': outline,
            },
          ]}
        >
          {label}
        </span>
      </a>
    )
  },
})

const CTAButtons = defineComponent({
  setup() {
    return () => (
      <div class="relative z-10 flex items-center justify-center w-full space-x-6">
        <CTAButton label={'Contact us'} link={'#'} />
        <CTAButton label={'About us'} link={'#'} outline />
      </div>
    )
  },
})

export default defineComponent({
  name: 'IntroSection',

  setup() {
    onMounted(() => {
      gsap.from(['#reportScreenImage', '#accountScreenImage'], {
        rotateZ: 0,
        rotateY: 0,
        rotateX: 0,
        duration: 2,
      })
    })

    return () => (
      <section class="min-h-screen intro">
        <div class="px-6 pb-24 md:pt-28 mx-auto max-w-7xl">
          <div class="grid gap-5 grid-rows-2 grid-cols-3 perspective-100vw md:grid-cols-4 md:grid-rows-1">
            <div class="flex items-center justify-center transform-style-3d">
              <div
                id="accountScreenImage"
                class="w-full h-full flex items-center justify-center rotate-x-25 rotate-y-25 -rotate-z-15"
              >
                <AccountScreenSVGComponent class="h-auto w-[70%] drop-shadow-2xl" />
              </div>
            </div>
            {/*  */}
            <div class="-mt-5 pb-2 flex flex-col items-center space-y-6 pt-10 md:pt-20 md:space-y-10 md:pb-18 col-span-3 row-start-2 md:row-start-1 md:col-span-2 md:col-start-2">
              <h2 class="text-[calc(.5vw+24px)] font-extrabold leading-snug text-center text-transparent bg-gradient-to-tr from-pink-500 to-indigo-600 via-blue-600-300 bg-clip-text">
                Make Your Business <br />
                More Powerfull
              </h2>
              <p class="max-w-xl text-[calc(.5vw+12px)] font-medium text-center text-gray-600 dark:text-gray-400">
                Creative way to manage your all digital Businesses from one app.
              </p>

              <CTAButtons />
            </div>
            {/*  */}
            <div class="col-start-3 flex items-center justify-center transform-style-3d md:col-start-auto">
              <div
                id="reportScreenImage"
                class="w-full h-full flex items-center justify-center rotate-x-25 -rotate-y-25 rotate-z-15"
              >
                <ReportScreenSVGComponent class="h-auto w-[70%] drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  },
})
