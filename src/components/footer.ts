export default () => ({
  atBottom: false,

  init() {
    window.addEventListener(
      'wheel',
      () => {
        this.scroll();
      },
      { passive: true }
    );

    // Custom event listener to hide/show the footer
    window.addEventListener(
      'footer-at-bottom',
      () => {
        this.atBottom = true;
      },
      { passive: true }
    );
  },

  scroll() {
    // slowly fade in the header as the user scrolls down
    const { scrollY, innerHeight } = window;
    const { offsetHeight } = document.body;
    const bottomOfPage = scrollY + innerHeight >= offsetHeight - 1; // -1 to account for rounding errors

    if (window.innerWidth < 768) {
      return;
    }

    this.atBottom = bottomOfPage;
  },
});
