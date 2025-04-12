import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade in animation on scroll
export const fadeInOnScroll = (element: HTMLElement, delay: number = 0) => {
  gsap.from(element, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
};

// Staggered fade in for children elements
export const staggerFadeIn = (parent: HTMLElement, children: HTMLElement[], delay: number = 0) => {
  gsap.from(children, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay,
    scrollTrigger: {
      trigger: parent,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
};

// Parallax scroll effect
export const parallaxScroll = (element: HTMLElement, yPercent: number = 20) => {
  gsap.to(element, {
    yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: element.parentElement || element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

// Float animation
export const floatAnimation = (element: HTMLElement, intensity: number = 15, duration: number = 2.5) => {
  gsap.to(element, {
    y: -intensity,
    duration,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
};

// Product image tilt on hover
export const productTilt = (element: HTMLElement) => {
  const xTo = gsap.quickTo(element, "x", { duration: 0.6, ease: "power3" });
  const yTo = gsap.quickTo(element, "y", { duration: 0.6, ease: "power3" });
  const rotateTo = gsap.quickTo(element, "rotation", { duration: 0.6, ease: "power3" });
  
  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    xTo(x / 10);
    yTo(y / 10);
    rotateTo(x / 50);
  });
  
  element.addEventListener("mouseleave", () => {
    xTo(0);
    yTo(0);
    rotateTo(0);
  });
};
