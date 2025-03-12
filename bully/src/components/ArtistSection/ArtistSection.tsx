// components/ArtistSection/ArtistSection.tsx
import { useRef } from 'react';
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaDiscord, FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import styles from './ArtistSection.module.css';

type ArtistSectionProps = {
  imageUrl: string;
  artistName: string;
  albumTitle: string;
  releaseDate: string;
};

export const ArtistSection: React.FC<ArtistSectionProps> = ({ 
  imageUrl, 
  artistName, 
  albumTitle,
  releaseDate 
}) => {
  const portraitRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.artist}>
      <div className={styles.socialIcons}>
        <div className={styles.icon}>
          <FaInstagram size={24} />
        </div>
        <div className={styles.icon}>
          <FaTiktok size={24} />
        </div>
        <div className={styles.icon}>
          <FaDiscord size={24} />
        </div>
      </div>

      <div className={styles.streamingIcons}>
        <div className={styles.icon}>
          <FaSpotify size={24} />
        </div>
        <div className={styles.icon}>
          <FaApple size={24} />
        </div>
        <div className={styles.icon}>
          <FaYoutube size={24} />
        </div>
      </div>

      <div className={styles.artistHeader}>
        <h1 className={styles.artistName}>{artistName}</h1>
      </div>
      
      <div className={styles.artistContent}>
        <div className={styles.artistImage} ref={portraitRef}>
          <Image
            src={imageUrl}
            alt={artistName}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        
        <div className={styles.albumInfo}>
          <h1>{albumTitle}</h1>
          
          <div className={styles.streaming}>
            <p>Listen now on:</p>
            <div className={styles.platforms}>
              <span>APPLE MUSIC</span>
              <span>SPOTIFY</span>
              <span>YOUTUBE</span>
            </div>
            <h2>OUT</h2>
            <h2>{releaseDate}</h2>
          </div>
        </div>
        
        <div className={styles.artistNav}>
          <div className={styles.navItem}>TOUR</div>
          <div className={styles.navItem}>UPDATES</div>
          <div className={styles.navItem}>CONTACT</div>
          <div className={styles.navItem}>MERCH</div>
        </div>
      </div>
    </section>
  );
};

