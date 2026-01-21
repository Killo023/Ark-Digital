import { Variants } from "framer-motion"

export const fadeIn: Variants = {
  hidden: { opacity: 0.01 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const slideUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const slideDown: Variants = {
  hidden: { 
    opacity: 0,
    y: -20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Hull-inspired curved reveal
export const revealCurve: Variants = {
  hidden: { 
    opacity: 0,
    scaleY: 0,
    transformOrigin: "bottom",
    y: 20
  },
  visible: { 
    opacity: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] // cubic-bezier for smooth curve
    }
  }
}

// Scale in with slight rotation (premium feel)
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.9,
    rotate: -2
  },
  visible: { 
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

// For image reveals
export const imageReveal: Variants = {
  hidden: { 
    opacity: 0,
    scale: 1.1,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
