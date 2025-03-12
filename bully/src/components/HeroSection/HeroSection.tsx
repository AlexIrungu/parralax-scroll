// components/HeroSection/HeroSection.tsx
import { useRef } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { Button } from '../ui/button';

type HeroSectionProps = {
  imageUrl: string;
  title: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl, title }) => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroNavRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.menuShop}>
          <div className={styles.menu}>MENU</div>
          <div className={styles.shop}>SHOP</div>
        </div>

        <div className={styles.nav} ref={heroNavRef}>
          <div className={styles.navItem}>TOUR</div>
          <div className={styles.navItem}>UPDATES</div>
          <div className={styles.navItem}>MERCH</div>
          <div className={styles.navItem}>CONTACT</div>
        </div>

        <div className={styles.albumTitle} ref={heroTitleRef}>
          <h1>{title}</h1>
        </div>

        <div className={styles.heroCta} ref={heroCtaRef}>
          <h3>BE THE FIRST TO KNOW</h3>
          <Button>JOIN THE NEWSLETTER</Button>
        </div>

        <div className={styles.copyright}>
          &copy; ALEX IRUNGU 2025. ALL RIGHTS RESERVED.
          <div className={styles.madeBy}>MADE BY ALEX</div>
        </div>
      </div>

      <div className={styles.heroBackground} ref={heroImageRef}>
        <div className={styles.overlay}></div>
        <Image
          src={imageUrl}
          alt="Album cover"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </section>
  );
};