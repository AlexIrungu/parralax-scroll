import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ReleaseSection.module.css';

const ReleaseSection: React.FC = () => {
  const projectImage1Ref = useRef<HTMLDivElement>(null);
  const projectImage2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;

      const scrollTriggerModule = await import("gsap/dist/ScrollTrigger");
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Projects section parallax
      gsap.fromTo(
        projectImage1Ref.current,
        { y: 0 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: projectImage1Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        projectImage2Ref.current,
        { y: 100 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: projectImage2Ref.current,
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
    <section className={styles.release}>
      <div className={styles.achievementBanner}>
        DAVID KUSHNER'S 2023 HIT "DAYLIGHT" REACHED THE BILLBOARD HOT 100,
        EARNED MULTI-PLATINUM CERTIFICATIONS, AND SURPASSED 1 BILLION STREAMS
        WITHIN A YEAR OF ITS RELEASE.
      </div>

      <div className={styles.releaseContent}>
        <div className={styles.musicVideo}>
          <div className={styles.releaseDate}>01/03</div>
          <h2>DARKERSIDE</h2>
          <p>Official Music Video</p>

          <div className={styles.videoThumbnail} ref={projectImage1Ref}>
            <div className={styles.playButton}>(WATCH)</div>
            <Image
              src="/images/darkerside-thumbnail.jpg"
              alt="Darkerside Music Video"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.navigation}>
            <button className={styles.navBtn}>BACK</button>
            <button className={styles.navBtn}>NEXT</button>
          </div>
        </div>

        <div className={styles.artistPortrait} ref={projectImage2Ref}>
          <Image
            src="/images/artist-portrait.jpg"
            alt="David Kushner Portrait"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ReleaseSection;