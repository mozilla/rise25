export default () => ({
  visible: true,

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
    // slowly fade out the header as the user scrolls down
    const { scrollY, innerHeight } = window;
    const { offsetHeight } = document.body;
    const bottomOfPage = scrollY + innerHeight >= offsetHeight - 1; // -1 to account for rounding errors

    if (window.innerWidth < 768) {
      return;
    }

    // @ts-ignore - $refs is an Alpine object
    const header = this.$refs.header as HTMLElement;

    if (bottomOfPage) {
      // check if slider has scrolled X amount to the right and if so, show the header
      const slider = document.getElementById('winners');
      if (!slider) return;

      const { scrollLeft } = slider;

      if (scrollLeft > 700) {
        header.style.opacity = '1';
        return;
      }

      header.style.opacity = '0';
      return;
    }

    const opacity = 1 - scrollY / 125;

    header.style.opacity = opacity.toString();
  },

  jumpToWinners() {
    const jumpEvent = new CustomEvent('jump-to');
    window.dispatchEvent(jumpEvent);
  },
});
