const root=document.documentElement;
const saved=localStorage.getItem('raghib-theme');
if(saved) root.dataset.theme=saved;
const themeBtn=document.querySelector('.theme-toggle');
themeBtn?.addEventListener('click',()=>{const next=root.dataset.theme==='light'?'dark':'light';root.dataset.theme=next;localStorage.setItem('raghib-theme',next)});
const dot=document.querySelector('.cursor-dot'), ring=document.querySelector('.cursor-ring');
window.addEventListener('pointermove',e=>{dot?.animate({left:e.clientX+'px',top:e.clientY+'px'},{duration:100,fill:'forwards'});ring?.animate({left:e.clientX+'px',top:e.clientY+'px'},{duration:350,fill:'forwards'})});
document.querySelectorAll('a,button,.tech-card,.featured-project').forEach(el=>{el.addEventListener('mouseenter',()=>ring?.classList.add('hover'));el.addEventListener('mouseleave',()=>ring?.classList.remove('hover'))});
document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px, ${(e.clientY-r.top-r.height/2)*.12}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
const sections=[...document.querySelectorAll('section[id]')], nav=[...document.querySelectorAll('.main-nav a')];
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>observer.observe(s));
const grid=document.getElementById('calendarGrid');
if(grid){for(let i=1;i<=35;i++){const c=document.createElement('div');c.className='cal-cell'+([5,12,19,27].includes(i)?' active':'');c.textContent=i<=30?i:'';grid.appendChild(c)}}
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!reduce){document.querySelectorAll('.tech-card').forEach((card,i)=>{card.style.transitionDelay=(i*18)+'ms'})}
