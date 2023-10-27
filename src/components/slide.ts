export default () => ({
  open: false,
  visible: false,

  // Trigger for the bio overlay
  openBio(open: boolean) {
    if (window.innerWidth <= 768) return;
    this.open = open;
  },
});
