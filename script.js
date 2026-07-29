const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    // The ChatGPT embedded preview can delay the window load event while remote assets are blocked.
    // Close the intro independently, with a second safety fallback.
    const closeLoader=()=>{const el=$('.loader');if(el)el.classList.add('done')};
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(closeLoader,300),{once:true});
    else setTimeout(closeLoader,300);
    addEventListener('load',()=>setTimeout(closeLoader,120),{once:true});
    setTimeout(closeLoader,1800);
    $('#year').textContent=new Date().getFullYear();

    const header=$('#header'), progress=$('.progress');
    const onScroll=()=>{
      header.classList.toggle('scrolled',scrollY>30);
      const h=document.documentElement.scrollHeight-innerHeight;
      progress.style.width=(h?scrollY/h*100:0)+'%';
    }; addEventListener('scroll',onScroll,{passive:true});onScroll();

    const revealObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target)}}),{threshold:.12});
    $$('.reveal').forEach(el=>revealObs.observe(el));

    const countObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=+el.dataset.count,suffix=el.dataset.suffix||'';let start=performance.now();const dur=1100;function tick(t){const p=Math.min((t-start)/dur,1),v=Math.floor(target*(1-Math.pow(1-p,3)));el.textContent=v+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick);countObs.unobserve(el)}),{threshold:.7});
    $$('[data-count]').forEach(el=>countObs.observe(el));

    const sectionEls=$$('[data-section]'), railLinks=$$('.side-rail a');
    const secObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){railLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-40% 0px -50%'});
    sectionEls.forEach(s=>secObs.observe(s));

    const menu=$('.mobile-menu'), burger=$('.hamburger');
    burger.addEventListener('click',()=>menu.classList.toggle('open'));
    $$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

    if(matchMedia('(pointer:fine)').matches){
      const cursor=$('.cursor');addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
      $$('a,button,.service,.value-card,.eco-row,.platform').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('active'));el.addEventListener('mouseleave',()=>cursor.classList.remove('active'))});
    }

    if(!reduce){
      $$('[data-tilt]').forEach(card=>{const amt=+card.dataset.tilt||5;card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateX(${-y*amt}deg) rotateY(${x*amt}deg)`});card.addEventListener('mouseleave',()=>card.style.transform='')});
      $$('.magnetic').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
    }

    const canvas=$('#motionCanvas'),ctx=canvas.getContext('2d');let w,h,dpr,nodes=[];
    function resize(){dpr=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);const count=Math.min(48,Math.floor(w/28));nodes=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,r:Math.random()*1.3+.35,a:Math.random()*.45+.08}))}
    function draw(t){ctx.clearRect(0,0,w,h);const sy=scrollY*.05;for(const p of nodes){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,(p.y+sy)%h,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(190,155,255,${p.a})`;ctx.fill()}for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);if(d<125){ctx.beginPath();ctx.moveTo(a.x,(a.y+sy)%h);ctx.lineTo(b.x,(b.y+sy)%h);ctx.strokeStyle=`rgba(128,93,210,${(1-d/125)*.08})`;ctx.stroke()}}
      const x=w*(.52+Math.sin(t*.00022)*.03);const grd=ctx.createLinearGradient(0,0,0,h);grd.addColorStop(0,'rgba(142,77,255,0)');grd.addColorStop(.2,'rgba(142,77,255,.12)');grd.addColorStop(.5,'rgba(93,167,255,.11)');grd.addColorStop(.8,'rgba(201,86,255,.09)');grd.addColorStop(1,'rgba(201,86,255,0)');ctx.beginPath();ctx.moveTo(x-90,0);ctx.bezierCurveTo(x+170,h*.28,x-220,h*.64,x+70,h);ctx.strokeStyle=grd;ctx.lineWidth=1.2;ctx.shadowColor='#8d59ff';ctx.shadowBlur=14;ctx.stroke();ctx.shadowBlur=0;
      requestAnimationFrame(draw)}
    resize();addEventListener('resize',resize);if(!reduce)requestAnimationFrame(draw);

