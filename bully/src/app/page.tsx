"use client";

import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ArtistSection } from "@/components/ArtistSection";
import ReleaseSection from "@/components/ReleaseSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export default function Home() {
  // Refs for different sections with correct typing
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroNavRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const projectImage1Ref = useRef<HTMLImageElement>(null);
  const projectImage2Ref = useRef<HTMLImageElement>(null);
  const projectListRef = useRef<HTMLUListElement>(null);
  const portraitRef = useRef<HTMLImageElement>(null);
  const bannerImageRef = useRef<HTMLImageElement>(null);
  const bannerCopyRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLButtonElement>(null);

  // Use the GSAP animation hook
  useGSAPAnimation({
    refs: {
      heroImage: heroImageRef,
      heroNav: heroNavRef,
      heroTitle: heroTitleRef,
      projectImage1: projectImage1Ref,
      projectImage2: projectImage2Ref,
      projectList: projectListRef,
      portrait: portraitRef,
      bannerImage: bannerImageRef,
      bannerCopy: bannerCopyRef,
      heroCta: heroCtaRef,
    },
  });

  return (
    <div className="App">
      <HeroSection 
        imageUrl="/images/portraits/potrait1.jpg"
        title="THE DICHOTOMY"
        imageRef={heroImageRef}
        navRef={heroNavRef}
        titleRef={heroTitleRef}
        ctaRef={heroCtaRef}
      />
      
      <ArtistSection 
        imageUrl="/images/portraits/potrait1.jpg"
        artistName="DAVID KUSHNER"
        albumTitle="20 YEARS FROM NOW"
        releaseDate="VALENTINE'S DAY"
        portraitRef={portraitRef}
      />
      
      <ReleaseSection 
        videoThumbnailUrl="/images/portraits/potrait1.jpg"
        artistPortraitUrl="/images/portraits/potrait1.jpg"
        videoTitle="DARKERSIDE"
        releaseDate="01/03"
        projectImageRefs={{
          image1: projectImage1Ref,
          image2: projectImage2Ref,
          list: projectListRef,
        }}
      />
      
      <NewsletterSection 
        backgroundImageUrl="/images/portraits/potrait1.jpg"
        signatureImageUrl="/images/portraits/potrait1.jpg"
        refs={{
          bannerImage: bannerImageRef, 
          bannerCopy: bannerCopyRef
        }}
      />
      
      <FooterSection 
        shopImageUrl="/images/portraits/potrait1.jpg"
      />
    </div>
  );
}