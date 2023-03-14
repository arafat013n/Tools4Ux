const scrollTopBtn = document.getElementById('scroll-top-btn');

window.onscroll = function() {
   if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      scrollTopBtn.classList.add('show');
   } else {
      scrollTopBtn.classList.remove('show');
   }
};

scrollTopBtn.onclick = function() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
};