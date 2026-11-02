(function(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){document.documentElement.className='nojs';return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  els.forEach(function(el){io.observe(el);});
})();
