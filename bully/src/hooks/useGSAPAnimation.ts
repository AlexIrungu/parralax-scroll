import { useEffect, RefObject } from 'react';

type GSAPAnimationConfig = {
  refs: Record<string, RefObject<HTMLElement>>;
};

export const useGSAPAnimation = ({ refs }: GSAPAnimationConfig) => {
  useEffect(() => {
    // Dynamically import GSAP and ScrollTrigger
    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;

      const scrollTriggerModule = await import("gsap/dist/ScrollTrigger");
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Hero section parallax
      if (refs.heroImage?.current) {
        gsap.to(refs.heroImage.current, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: refs.heroImage.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      if (refs.heroNav?.current) {
        gsap.to(refs.heroNav.current, {
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: refs.heroNav.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      // Title fade effect
      if (refs.heroTitle?.current) {
        gsap.to(refs.heroTitle.current, {
          opacity: 0,
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: refs.heroTitle.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }

      // CTA fade effect
      if (refs.heroCta?.current) {
        gsap.to(refs.heroCta.current, {
          opacity: 0,
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: refs.heroCta.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }

      // Projects section parallax
      if (refs.projectImage1?.current) {
        gsap.fromTo(
          refs.projectImage1.current,
          { y: 0 },
          {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: refs.projectImage1.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      }

      if (refs.projectImage2?.current) {
        gsap.fromTo(
          refs.projectImage2.current,
          { y: 100 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: refs.projectImage2.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      }

      if (refs.projectList?.current) {
        gsap.fromTo(
          refs.projectList.current,
          { y: 100 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: refs.projectList.current,
              start: "top bottom",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }

      // About section parallax
      if (refs.portrait?.current) {
        gsap.fromTo(
          refs.portrait.current,
          { y: 100 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: refs.portrait.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      }

      // Banner section parallax
      if (refs.bannerImage?.current) {
        gsap.to(refs.bannerImage.current, {
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: refs.bannerImage.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      if (refs.bannerCopy?.current) {
        gsap.fromTo(
          refs.bannerCopy.current,
          { y: 50 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: refs.bannerCopy.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      }

      // Return cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    };

    // Initialize GSAP
    const cleanup = initGSAP();

    // Cleanup function
    return () => {
      cleanup.then((cleanupFn) => cleanupFn && cleanupFn());
    };
  }, [refs]);
};