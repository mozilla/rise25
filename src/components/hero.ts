export default () => ({
  init() {
    window.addEventListener(
      'wheel',
      () => {
        this.scroll();
      },
      { passive: true }
    );
  },

  scroll() {
    // @ts-ignore - $refs is an Alpine object
    const hero = this.$refs.hero as HTMLElement;

    const { scrollY, innerHeight } = window;
    const { offsetHeight } = document.body;
    const bottomOfPage = scrollY + innerHeight >= offsetHeight - 1; // -1 to account for rounding errors

    if (window.innerWidth < 768) {
      return;
    }

    // parallax effect
    // if not at the bottom of the page, translate-y the hero based on percent of page scrolled
    if (!bottomOfPage) {
      hero.style.transform = `translate3d(0, ${window.scrollY * 0.45}px, 0)`;
    }

    // if bottom of the page translate-x the hero off to the left of the screen based on the scrollLeft of the #winners slider
    if (bottomOfPage) {
      const slider = document.getElementById('winners');
      if (!slider) return;

      const { scrollLeft } = slider;

      hero.style.transform = `translate3d(-${scrollLeft}px, ${window.scrollY * 0.45}px, 0)`;

      // reduce the opacity of the hero as it moves off the screen
      const opacity = 1 - scrollLeft / 1000;
      hero.style.opacity = opacity.toString();
    }
  },
});
