import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './NewsletterSection.module.css';

const NewsletterSection: React.FC = () => {
  const bannerImageRef = useRef<HTMLDivElement>(null);
  const bannerCopyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;

      const scrollTriggerModule = await import("gsap/dist/ScrollTrigger");
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Banner section parallax
      gsap.to(bannerImageRef.current, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: bannerImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.fromTo(
        bannerCopyRef.current,
        { y: 50 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: bannerCopyRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );

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
  }, []);

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletterBackground} ref={bannerImageRef}>
        <Image
          src="/images/newsletter-background.jpg"
          alt="Newsletter Background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.newsletterContent} ref={bannerCopyRef}>
        <h3>Be the</h3>
        <h1>FIRST TO KNOW</h1>
        <p>
          WANT TO HEAR THE LATEST NEWS ON MY UPCOMING MUSIC RELEASES, TOURING,
          AND MERCH?
        </p>
        <button className={styles.newsletterBtn}>JOIN THE NEWSLETTER</button>

        <div className={styles.signature}>
          <Image
            src="/images/signature.png"
            alt="David Kushner Signature"
            width={120}
            height={60}
          />
          <p>DAVID KUSHNER</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;