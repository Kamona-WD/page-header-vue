import { defineComponent, onMounted } from 'vue'
import { gsap } from 'gsap'
import Navbar from './components/navbar/Navbar'
import IntroSection from './components/home/IntroSection'
import Footer from './components/global/Footer'

export default defineComponent({
  name: 'App',

  setup() {
    onMounted(() => {
      gsap.to('#loading .logo', { y: -50, opacity: 0, duration: 0.5 })
      gsap.to('#loading .left', { rotateY: 45, x: '-130%', duration: 1, delay: 0.6 })
      gsap.to('#loading .right', {
        rotateY: -45,
        x: '130%',
        duration: 1,
        delay: 0.6,
        onComplete: () => {
          document.getElementById('loading')?.remove()
        },
      })
    })

    return () => (
      <div class="antialiased text-gray-900 bg-gray-100">
        <Navbar />
        <main>
          {/* Header section wrapper */}
          <div class="relative overflow-hidden min-h-screen bg-gradient-to-tr from-purple-500 via-blue-300 to-indigo-400 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-800">
            {/* bg */}
            <div class="absolute inset-x-[-10vw] top-0 bottom-20 md:bottom-0 md:top-24 rounded-[77vw/50vw] rounded-t-none md:rounded-b-none md:rounded-[77vw/50vw] bg-white dark:bg-gray-800"></div>
            <div>
              <IntroSection />
            </div>
          </div>

          {/*  */}
        </main>
        <Footer />
      </div>
    )
  },
})
