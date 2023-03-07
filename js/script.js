window.addEventListener('load', () => {
  const body = document.querySelector('body');
  if (body.offsetWidth <= 375) {
    const partners = document.querySelectorAll('.partner__block');
    let maxHeight = 0;

    partners.forEach((element) => {
      if (element.offsetHeight > maxHeight) maxHeight = element.offsetHeight;
    });

    partners.forEach((element) => (element.style.height = maxHeight + 'px'));
    partners.forEach((element) => console.log(element.offsetHeight));
  }
});
