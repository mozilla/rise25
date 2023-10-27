import './main.css';
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import persist from '@alpinejs/persist';
import focus from '@alpinejs/focus';

// data
import { groups } from './winners';

// components
import hero from './components/hero';
import slider from './components/slider';
import slide from './components/slide';
import header from './components/header';
import footer from './components/footer';

window.Alpine = Alpine;

// Plugins
Alpine.plugin(intersect);
Alpine.plugin(persist);
Alpine.plugin(focus);

// Data Store
Alpine.store('winners', { groups });

// Components
Alpine.data('header', header);
Alpine.data('hero', hero);
Alpine.data('slider', slider);
Alpine.data('slide', slide);
Alpine.data('footer', footer);

// Start Alpine
Alpine.start();

(() => {
  window.onbeforeunload = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  };
})();
