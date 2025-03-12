import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaTiktok, FaFacebookF, FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import styles from './ FooterSection.module.css';

const FooterSection: React.FC = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <div className={styles.socialLinks}>
            <FaInstagram size={20} className={styles.icon} />
            <FaTiktok size={20} className={styles.icon} />
            <FaFacebookF size={20} className={styles.icon} />
          </div>
          <div className={styles.footerNav}>
            <p>Menu</p>
            <div className={styles.footerLinks}>
              <h3>Tour</h3>
              <h3>Updates</h3>
              <h3>Merch</h3>
              <h3>Contact</h3>
            </div>
          </div>
          <div className={styles.copyright}>&copy; Designed by Alex Irungu</div>
        </div>

        <div className={styles.footerCol}>
          <div className={styles.newsletterFooter}>
            <p>Join the newsletter</p>
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>

          <div className={styles.shopPreview}>
            <div className={styles.shopImage}>
              <Image
                src="/images/merch-preview.jpg"
                alt="Shop Preview"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className={styles.streamingLinks}>
            <FaSpotify size={20} className={styles.icon} />
            <FaApple size={20} className={styles.icon} />
            <FaYoutube size={20} className={styles.icon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;