import { defineComponent, ref, onMounted, onUnmounted, Transition } from 'vue'
import { isDark, toggleDark, isMobileMenuOpen } from '../../states/globalStates'
import { gsap } from 'gsap'
import { BrandLogo } from '../global/Brand'
import { MenuAltRightIcon, XIcon, MoonIcon, SunIcon } from '../icons/reqular'

const navigationLinks = [
  {
    label: 'Platform',
    link: '#',
  },
  {
    label: 'Pricing',
    link: '#',
  },
  {
    label: 'Contents',
    link: '#',
  },
  {
    label: 'About',
    link: '#',
  },
]

const NavbarUnderlineLink = defineComponent({
  name: 'NavbarUnderlineLink',

  props: {
    link: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const underline = ref(null)

    const {
      link: { link, label },
    } = props

    const handelMouseEnter = () => {
      gsap.to(underline.value, {
        opacity: 1,
        translateX: 0,
        duration: 1.5,
        ease: 'elastic',
      })
    }

    const handelMouseLeave = () => {
      gsap.to(underline.value, {
        opacity: 0,
        translateX: '102%',
        duration: 1.5,
        ease: 'elastic',
      })
    }

    return () => (
      <a
        href={link}
        onmouseenter={handelMouseEnter}
        onmouseleave={handelMouseLeave}
        class="inline-block px-4 py-2 transition-colors text-gray-800 rounded-md hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 focus-visible:outline-none focus-visible:ring focus-visible:ring-purple-500"
      >
        <div class="overflow-hidden">
          <span>{label}</span>
          <div ref={underline} class="h-0.5 w-full bg-purple-600 translate-x-[102%]"></div>
        </div>
      </a>
    )
  },
})

export default defineComponent({
  name: 'Navbar',

  setup() {
    const scrollingUp = ref(false)
    const scrollingDown = ref(false)
    let lastScrollTop = 0

    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop) {
        // downscroll
        scrollingDown.value = true
        scrollingUp.value = false
      } else {
        // upscroll
        scrollingDown.value = false
        scrollingUp.value = true
        if (st == 0) {
          //  reset
          scrollingDown.value = false
          scrollingUp.value = false
        }
      }
      lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
    }

    const handleMobileMenuEntering = (el) => {
      gsap.fromTo(el, { height: 0 }, { height: el.scrollHeight, duration: 2, ease: 'elastic' })
    }
    const handleMobileMenuLeaving = (el) => {
      gsap.to(el, { height: 0 })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return () => (
      <nav
        class={[
          'fixed bottom-0 md:top-0 md:bottom-auto inset-x-0 duration-500 transition-all z-20',
          {
            'shadow-t-lg md:shadow-lg bg-white dark:bg-gray-700 translate-y-full md:-translate-y-full':
              scrollingDown.value,
          },
          { 'shadow-t-lg md:shadow-lg bg-white dark:bg-gray-700': scrollingUp.value },
        ]}
      >
        <div
          class={[
            'relative max-w-7xl mx-auto flex flex-row-reverse md:flex-row items-center justify-between p-4 md:h-24',
            {
              'shadow-t-lg bg-white dark:bg-gray-700': isMobileMenuOpen.value,
            },
          ]}
        >
          {/* Mobile menu button */}
          <button
            onClick={() => {
              isMobileMenuOpen.value = !isMobileMenuOpen.value
            }}
            class="md:hidden text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <MenuAltRightIcon v-show={!isMobileMenuOpen.value} class="w-8 h-8" />
            <XIcon v-show={isMobileMenuOpen.value} class="w-8 h-8" />
          </button>

          {/* Logo */}
          <a href="#" class="inline-block rounded-md">
            <span class="sr-only">Home</span>
            <BrandLogo class="w-10 h-auto md:w-12" />
          </a>

          {/* Navigation links */}
          <ul class="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <li>
                <NavbarUnderlineLink link={link} />
              </li>
            ))}
          </ul>

          {/* Dark mode button */}
          <button
            onClick={toggleDark}
            class="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <MoonIcon v-show={!isDark.value} class="w-8 h-8" />
            <SunIcon v-show={isDark.value} class="w-8 h-8" />
          </button>
        </div>

        {/* Mobile navigation links */}
        <Transition onEnter={handleMobileMenuEntering} onLeave={handleMobileMenuLeaving}>
          {isMobileMenuOpen.value && (
            <div class="bg-white dark:bg-gray-900 md:hidden">
              <ul class="py-4">
                {navigationLinks.map(({ link, label }) => (
                  <li>
                    <a href={link} class="block px-4 py-2 text-gray-600 dark:text-gray-400">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Transition>
      </nav>
    )
  },
})
