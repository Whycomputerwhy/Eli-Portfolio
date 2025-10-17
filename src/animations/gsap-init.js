import { gsap } from 'gsap'

export function initHeroAnimation() {
  gsap.fromTo(
    'h1',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  )
}


