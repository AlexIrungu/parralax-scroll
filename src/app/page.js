"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;
      
      const scrollTriggerModule = await import('gsap/dist/ScrollTrigger');
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
          scrub: 0.6
        }
      });

      gsap.to(heroNavRef.current, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroNavRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8
        }
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
          scrub: 0.4
        }
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
          scrub: 0.4
        }
      });

      // Projects section parallax
      gsap.fromTo(projectImage1Ref.current, 
        { y: 0 }, 
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: projectImage1Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6
          }
        }
      );

      gsap.fromTo(projectImage2Ref.current, 
        { y: 100 }, 
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: projectImage2Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        }
      );

      gsap.fromTo(projectListRef.current, 
        { y: 100 }, 
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: projectListRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1
          }
        }
      );

      // About section parallax
      gsap.fromTo(portraitRef.current, 
        { y: 100 }, 
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: portraitRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
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
          scrub: 0.6
        }
      });

      gsap.fromTo(bannerCopyRef.current, 
        { y: 50 }, 
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: bannerCopyRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        }
      );

      // Return cleanup function
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    };

    // Initialize GSAP
    const cleanup = initGSAP();
    
    // Cleanup function
    return () => {
      cleanup.then(cleanupFn => cleanupFn && cleanupFn());
    };
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
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
            src="/images/portrats/potrait1.jpg" 
            alt="Album cover" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority 
          />
        </div>
      </section>

      {/* Artist Section */}
      <section className="artist">
        <div className="artist-header">
          <h1 className="artist-name">DAVID KUSHNER</h1>
        </div>
        
        <div className="artist-content">
          <div className="artist-image" ref={portraitRef}>
            <Image 
              src="/images/portraits/potrait2.jpg" 
              alt="David Kushner" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          
          <div className="artist-nav">
            <div className="nav-item">TOUR</div>
            <div className="nav-item">UPDATES</div>
            <div className="nav-item">CONTACT</div>
            <div className="nav-item">MERCH</div>
          </div>
          
          <div className="album-info">
            <h1>20 YEARS FROM NOW</h1>
            <div className="streaming">
              <p>Listen now on:</p>
              <div className="platforms">
                <span>APPLE MUSIC</span>
                <span>SPOTIFY</span>
                <span>YOUTUBE</span>
              </div>
              <h2>OUT</h2>
              <h2 className="release-date">VALENTINE'S DAY</h2>
            </div>
          </div>
        </div>
        
        <div className="social-icons">
          <div className="icon">
            <Image src="/api/placeholder/24/24" alt="Instagram" width={24} height={24} />
          </div>
          <div className="icon">
            <Image src="/api/placeholder/24/24" alt="TikTok" width={24} height={24} />
          </div>
          <div className="icon">
            <Image src="/api/placeholder/24/24" alt="Discord" width={24} height={24} />
          </div>
        </div>
        
        <div className="streaming-icons">
          <div className="icon">
            <Image src="/api/placeholder/24/24" alt="Spotify" width={24} height={24} />
          </div>
          <div className="icon">
            <Image src="/api/placeholder/24/24" alt="Apple Music" width={24} height={24} />
          </div>
          <div className="icon">
            <Image src="/api/placeholder/24/24" alt="YouTube" width={24} height={24} />
          </div>
        </div>
      </section>

      {/* Release Section */}
      <section className="release">
        <div className="achievement-banner">
          DAVID KUSHNER'S 2023 HIT "DAYLIGHT" REACHED THE BILLBOARD HOT 100, EARNED MULTI-PLATINUM CERTIFICATIONS, AND SURPASSED 1 BILLION STREAMS WITHIN A YEAR OF ITS RELEASE.
        </div>
        
        <div className="release-content">
          <div className="music-video">
            <div className="release-date">01/03</div>
            <h2>DARKERSIDE</h2>
            <p>Official Music Video</p>
            
            <div className="video-thumbnail" ref={projectImage1Ref}>
              <div className="play-button">(WATCH)</div>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Darkerside Music Video" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            
            <div className="navigation">
              <button className="nav-btn">BACK</button>
              <button className="nav-btn">NEXT</button>
            </div>
          </div>
          
          <div className="artist-portrait" ref={projectImage2Ref}>
            <Image 
              src="/api/placeholder/800/1200" 
              alt="David Kushner Portrait" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-background" ref={bannerImageRef}>
          <Image 
            src="/api/placeholder/1200/800" 
            alt="Newsletter Background" 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        </div>
        
        <div className="newsletter-content" ref={bannerCopyRef}>
          <h3>Be the</h3>
          <h1>FIRST TO KNOW</h1>
          <p>WANT TO HEAR THE LATEST NEWS ON MY UPCOMING MUSIC RELEASES, TOURING, AND MERCH?</p>
          <button className="newsletter-btn">JOIN THE NEWSLETTER</button>
          
          <div className="signature">
            <Image 
              src="/api/placeholder/120/60" 
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
                  src="/api/placeholder/400/300" 
                  alt="Shop Preview" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>
            
            <div className="streaming-links">Spotify/Apple/YouTube</div>
          </div>
        </div>
      </section>
    </div>
  );
}