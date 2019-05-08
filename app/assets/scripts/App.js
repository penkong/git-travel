import MobileMenu from './module/MobileMenu';

import RevealOnScroll from './module/RevealOnScroll';
import $ from 'jquery';



const mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "65%");