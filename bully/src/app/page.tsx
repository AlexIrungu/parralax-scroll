"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaDiscord,
  FaSpotify,
  FaYoutube,
  FaApple,
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  // Refs for different sections
  const heroImageRef = useRef(null);
  const heroNavRef = useRef(null);
  const heroTitleRef = useRef(null);
  const projectImage1Ref = useRef(null);
  const projectImage2Ref = useRef(null);
  const projectListRef = useRef(null);
  const portraitRef = useRef(null);
  const bannerImageRef = useRef(null);
  const bannerCopyRef = useRef(null);
  const heroCtaRef = useRef(null);

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
      gsap.to(heroImageRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(heroNavRef.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroNavRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // Title fade effect
      gsap.to(heroTitleRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });

      // CTA fade effect
      gsap.to(heroCtaRef.current, {
        opacity: 0,
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroCtaRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });

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

      gsap.fromTo(
        projectListRef.current,
        { y: 100 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: projectListRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      // About section parallax
      gsap.fromTo(
        portraitRef.current,
        { y: 100 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: portraitRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );

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
    <div className="App">
      {/* Hero Section */}
      <section className="artist" style={{ backgroundColor: "#5D3FD3" }}>
      {/* Top section with artist name */}
      <div className="social-icons" style={{ top: "1.5rem", left: "1.5rem" }}>
        <div className="icon">
          <FaInstagram size={24} />
        </div>
        <div className="icon">
          <FaTiktok size={24} />
        </div>
        <div className="icon">
          <FaDiscord size={24} />
        </div>
      </div>

      <div className="streaming-icons" style={{ top: "1.5rem", right: "1.5rem" }}>
        <div className="icon">
          <FaSpotify size={24} />
        </div>
        <div className="icon">
          <FaApple size={24} />
        </div>
        <div className="icon">
          <FaYoutube size={24} />
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <h1 className="artist-name" style={{ fontSize: "2.5rem", letterSpacing: "0.1em" }}>DAVID KUSHNER</h1>
      </div>
      
      {/* Main content area */}
      <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "0 2rem" }}>
        {/* Optional: Artist portrait area - use if you want to keep the portrait */}
        <div className="artist-image" ref={portraitRef} style={{ width: "100%", height: "30vh", position: "relative", marginBottom: "2rem" }}>
          <Image
            src="/images/portraits/potrait1.jpg"
            alt="David Kushner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        
        {/* Album title and info */}
        <div style={{ marginBottom: "auto", textAlign: "left" }}>
          <h1 style={{ fontSize: "5rem", marginBottom: "1.5rem", letterSpacing: "0.05em" }}>20 YEARS FROM NOW</h1>
          
          <div>
            <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Listen now on:</p>
            <div className="platforms" style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
              <span style={{ textDecoration: "underline" }}>APPLE MUSIC</span>
              <span style={{ textDecoration: "underline" }}>SPOTIFY</span>
              <span style={{ textDecoration: "underline" }}>YOUTUBE</span>
            </div>
            <h2 style={{ fontSize: "3rem", lineHeight: "1" }}>OUT</h2>
            <h2 style={{ fontSize: "3rem", lineHeight: "1.2" }}>VALENTINE'S DAY</h2>
          </div>
        </div>
        
        {/* Navigation at the bottom */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          width: "100%", 
          padding: "3rem 0",
          fontSize: "2rem",
          letterSpacing: "0.05em"
        }}>
          <div className="nav-item">TOUR</div>
          <div className="nav-item">UPDATES</div>
          <div className="nav-item">CONTACT</div>
          <div className="nav-item">MERCH</div>
        </div>
      </div>
    </section>


      

      

      {/* Release Section */}
      <section className="release">
        <div className="achievement-banner">
          DAVID KUSHNER'S 2023 HIT "DAYLIGHT" REACHED THE BILLBOARD HOT 100,
          EARNED MULTI-PLATINUM CERTIFICATIONS, AND SURPASSED 1 BILLION STREAMS
          WITHIN A YEAR OF ITS RELEASE.
        </div>

        <div className="release-content">
          <div className="music-video">
            <div className="release-date">01/03</div>
            <h2>DARKERSIDE</h2>
            <p>Official Music Video</p>

            <div className="video-thumbnail" ref={projectImage1Ref}>
              <div className="play-button">(WATCH)</div>
              <Image
                src="/images/portraits/potrait1.jpg"
                alt="Darkerside Music Video"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="navigation">
              <button className="nav-btn">BACK</button>
              <button className="nav-btn">NEXT</button>
            </div>
          </div>

          <div className="artist-portrait" ref={projectImage2Ref}>
            <Image
              src="/images/portraits/potrait1.jpg"
              alt="David Kushner Portrait"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-background" ref={bannerImageRef}>
          <Image
            src="/images/portraits/potrait1.jpg"
            alt="Newsletter Background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="newsletter-content" ref={bannerCopyRef}>
          <h3>Be the</h3>
          <h1>FIRST TO KNOW</h1>
          <p>
            WANT TO HEAR THE LATEST NEWS ON MY UPCOMING MUSIC RELEASES, TOURING,
            AND MERCH?
          </p>
          <button className="newsletter-btn">JOIN THE NEWSLETTER</button>

          <div className="signature">
            <Image
              src="/images/portraits/potrait1.jpg"
              alt="David Kushner Signature"
              width={120}
              height={60}
            />
            <p>DAVID KUSHNER</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <div className="social-links">Instagram/TikTok/Facebook</div>
            <div className="footer-nav">
              <p>Menu</p>
              <div className="footer-links">
                <h3>Tour</h3>
                <h3>Updates</h3>
                <h3>Merch</h3>
                <h3>Contact</h3>
              </div>
            </div>
            <div className="copyright">&copy; Designed by Alex Irungu</div>
          </div>

          <div className="footer-col">
            <div className="newsletter-footer">
              <p>Join the newsletter</p>
              <button>Subscribe</button>
            </div>

            <div className="shop-preview">
              <div className="shop-image">
                <Image
                  src="/images/portraits/potrait1.jpg"
                  alt="Shop Preview"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="streaming-links">Spotify/Apple/YouTube</div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="hero-content">
          <div className="menu-shop">
            <div className="menu">MENU</div>
            <div className="shop">SHOP</div>
          </div>

          <div className="nav" ref={heroNavRef}>
            <div className="nav-item">TOUR</div>
            <div className="nav-item">UPDATES</div>
            <div className="nav-item">MERCH</div>
            <div className="nav-item">CONTACT</div>
          </div>

          <div className="album-title" ref={heroTitleRef}>
            <h1>THE DICHOTOMY</h1>
          </div>

          <div className="hero-cta" ref={heroCtaRef}>
            <h3>BE THE FIRST TO KNOW</h3>
            <button className="newsletter-btn">JOIN THE NEWSLETTER</button>
          </div>

          <div className="copyright">
            &copy; ALEX IRUNGU 2025. ALL RIGHTS RESERVED.
            <div className="made-by">MADE BY ALEX</div>
          </div>
        </div>

        <div className="hero-background" ref={heroImageRef}>
          <div className="overlay"></div>
          <Image
            src="/images/portraits/potrait1.jpg"
            alt="Album cover"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>
      
    </div>
  );
}
