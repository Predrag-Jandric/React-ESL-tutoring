// THIS FILE CONTAINS ANIMATIONS FOR ALL SECTIONS.
// MODIFY ANIMATIONS HERE AND NOWHERE ELSE.

// animations for HERO section
export const heroVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

// animations for staucimo section
export const staucimoVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: (index) => {
    return {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        delay: 0.140 * index,
      },
    };
  },
};

// strategija variants
export const strategijaVariants = {
  initial: {
    opacity: 0,
  },
  animate: (customDelay) => {
    return {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: customDelay,
      },
    };
  },
};

// strategija ARROW variants
export const strategijaArrowVariants = {
  initial: () => {
    const isMobile = window.innerWidth <= 768;
    return {
      opacity: 0,
      x: isMobile ? 0 : -70,
      y: isMobile ? -70 : 0,
    };
  },
  animate: (customDelay) => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        delay: customDelay,
      },
    };
  },
};

// GENERAL animations
export const generalVariants = {
  initial: {
    y: 70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};
