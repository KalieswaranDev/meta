import React from 'react';
import '../Style/Section03.css';
import metaLogo from '../Asset/meta.png';
import facebookLogo from '../Asset/facebook.png';
import twitterLogo from '../Asset/twitter.png';
import InstagramLogo from '../Asset/instagram.png';
import NikeLogo from '../Asset/nike.png';
import Youtupe from '../Asset/youtube.png';
import Tiktok from '../Asset/tik-tok.png';

const brands = [
  { name: 'META', logo: metaLogo },
  { name: 'Facebook', logo: facebookLogo },
  { name: 'Twitter', logo: twitterLogo },
  { name: 'Instagram', logo: InstagramLogo },
  { name: 'Nike', logo: NikeLogo },
  { name: 'Tiktok', logo: Tiktok },
  { name: 'Youtube', logo: Youtupe },
];

const BrandScroller = () => {
  return (
    <section className="brand-section" id="FEATURED">
      <p className="brand-title">As Featured On</p>
      <div className="scroll-wrapper">
        <div className="scroll-content">
          {[...brands, ...brands].map((brand, idx) => (
            <div className="brand-item" key={idx}>
              <img src={brand.logo} alt={brand.name} />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandScroller;
