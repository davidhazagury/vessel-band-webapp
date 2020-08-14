import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Ready to Rock and Roll?"/*"Learn to code"*/],
    typeSpeed: 70,
    loop: false
  });
}

export { loadDynamicBannerText };
