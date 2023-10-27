export default () => ({
  atBottom: false,

  init() {
    window.addEventListener(
      'wheel',
      (event) => {
        this.scroll(event);
      },
      { passive: false }
    );

    // Force the slider and hero to be reset if user somehow jumps out of the slider experience.
    // @ts-ignore - $watch is an Alpine method
    this.$watch('atBottom', (atBottom) => {
      if (!atBottom) {
        // @ts-ignore - $refs is an Alpine object
        this.$refs.slider.scrollLeft = 0;
        document.getElementById('hero')?.style.removeProperty('opacity');
      }
    });

    window.addEventListener(
      'jump-to',
      () => {
        this.jumpTo('activists');
      },
      { passive: true }
    );
  },

  jumpTo(hash: string) {
    // find element with matching id
    const ref = document.getElementById(hash);
    if (!ref) return;

    // smooth scroll to ref in the slider and scroll down to the slider
    // @ts-ignore - $refs is an Alpine object
    const slider = this.$refs.slider as HTMLElement;

    const movement = ref.offsetLeft - 8;

    if (window.innerWidth >= 768) {
      window.scrollTo({
        top: document.body.scrollHeight - window.innerHeight,
        behavior: 'smooth',
      });
    } else if (!this.atBottom) {
      const sliderHeight = slider.offsetHeight;
      const sliderTopRelativeToWindow = slider.getBoundingClientRect().top;
      const sliderBottomRelativeToWindow = sliderTopRelativeToWindow + sliderHeight - 60;

      window.scrollTo({
        top: sliderBottomRelativeToWindow - window.innerHeight,
        behavior: 'smooth',
      });
    }

    this.atBottom = true;

    slider.scrollTo({
      left: movement, // account for gap between slides
      behavior: 'smooth',
    });

    // Update the slider container as well
    // @ts-ignore - $refs is an Alpine object
    const sliderContainer = this.$refs.sliderContainer as HTMLElement;
    // @ts-ignore - $refs is an Alpine object
    const sliderParallax = this.$refs.sliderParallax as HTMLElement;

    sliderContainer.style.transition = 'transform 1s ease';
    sliderParallax.style.transition = 'transform 0.5s ease';

    sliderContainer.style.transform = `translate3d(0, 0 ,0)`;
    sliderParallax.style.transform = `translate3d(0, 0 ,0)`;

    // Update the hero as well
    const hero = document.getElementById('hero');

    // smoothly transition the hero opacity/transformation
    if (hero && window.innerWidth >= 768) {
      hero.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
      hero.style.transform = `translate3d(-${movement}px, ${window.scrollY * 0.45}px, 0)`;

      // reduce the opacity of the hero as it moves off the screen
      const opacity = 1 - movement / 1000;
      hero.style.opacity = opacity.toString();

      // wait for the transition to finish
      setTimeout(() => {
        // remove the transition so it doesn't interfere with the scroll
        hero.style.transition = '';
      }, 500);
    }

    setTimeout(() => {
      // remove the transition so it doesn't interfere with the scroll
      sliderContainer.style.transition = '';
      sliderParallax.style.transition = '';

      // show footer
      const footerVisible = new CustomEvent('footer-at-bottom');
      window.dispatchEvent(footerVisible);
    }, 1000);
  },

  scroll(event: WheelEvent) {
    const deltaY = event.deltaY;

    // still allow natural horizontal scrolling
    if (event.deltaY === 0) {
      return;
    }

    // ignore if mobile
    if (window.innerWidth < 768) {
      return;
    }

    // @ts-ignore - $refs is an Alpine object
    const slider = this.$refs.slider as HTMLElement;

    const { scrollY, innerHeight } = window;
    const { offsetHeight } = document.body;

    const { scrollLeft, offsetWidth, scrollWidth } = slider;

    const bottomOfPage = scrollY + innerHeight >= offsetHeight - 1; // -1 to account for rounding errors
    const sliderAtBeginning = scrollLeft <= 0;
    const sliderAtEnd = scrollLeft + offsetWidth >= scrollWidth;

    if (bottomOfPage) {
      // Revert to natural scrolling if the slider is at the beginning
      // else prevent the default scroll behavior
      if (scrollLeft === 0 && deltaY < 0) {
        return;
      } else {
        event.preventDefault();
      }

      this.atBottom = true;

      if (deltaY > 0) {
        if (!sliderAtEnd) {
          slider.scrollLeft += deltaY;
        } else {
          window.scrollBy(0, deltaY);
        }
      } else {
        if (sliderAtBeginning) {
          window.scrollBy(0, deltaY);
        } else {
          slider.scrollLeft += deltaY;
        }
      }
    } else {
      this.atBottom = false;
    }

    // * Left offset effect
    const SLIDER_OFFSET = 40;
    // translate the sliderContainer ref to SLIDER_OFFSET% to hide it partially off the screen
    // @ts-ignore - $refs is an Alpine object
    const sliderContainer = this.$refs.sliderContainer as HTMLElement;
    sliderContainer.style.transform = `translate3d(${SLIDER_OFFSET}%, 0 ,0)`;

    // figure out the percentage scrolled down the page
    const percentageScrolled = scrollY / (offsetHeight - innerHeight);

    // Calculates the percentage of the slider that should be hidden
    // SLIDER_OFFSET% is the amount the slider is translated off the screen by default
    let xTransform = percentageScrolled * SLIDER_OFFSET;

    // Forces to SLIDER_OFFSET to stop blurry text
    if (xTransform > SLIDER_OFFSET - 0.02) {
      xTransform = SLIDER_OFFSET;
    }

    xTransform = SLIDER_OFFSET - xTransform; // SLIDER_OFFSET% default offset - the percentage scrolled down the page

    const transform = {
      x: `${xTransform}%`,
      y: '0',
    };

    // * Parallax effect / Y offset
    // @ts-ignore - $refs is an Alpine object
    const sliderParallax = this.$refs.sliderParallax as HTMLElement;

    if (!bottomOfPage) {
      // As page scrolls down, translate the sliderParallax y to 0 from -20%
      let yTransform = percentageScrolled * 20;

      // Forces to 20 to stop blurry text
      if (yTransform > 19) {
        yTransform = 20;
      }

      yTransform = 20 - yTransform; // 20% default offset - the percentage scrolled down the page
      sliderParallax.style.transform = `translate3d(0, -${yTransform}%, 0)`;
    } else {
      sliderParallax.style.transform = `translate3d(0, 0, 0)`;
    }

    sliderContainer.style.transform = `translate3d(${transform.x}, ${transform.y}, 0)`;
  },
});
