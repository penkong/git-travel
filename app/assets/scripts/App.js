import $ from 'jquery';

import MobileMenu from './module/MobileMenu';
import RevealOnScroll from './module/RevealOnScroll';
import StickyHeader from './module/StickyHeader';



const mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "65%");
const stickyHeader = new StickyHeader();