import { gsap } from 'gsap';

const t1 = gsap.timeline();
export const navOpen = (el) => {
  t1.fromTo(el, { y: '0' }, { y: '80px' });
};
