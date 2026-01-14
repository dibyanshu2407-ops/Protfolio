<script>
window.addEventListener('load',()=>document.getElementById('loader').style.display='none')

const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'})

const roles=['Multipurpose Discord Bot','Music • Moderation • Utility','Fast • Reliable • Powerful'];let r=0,i=0;
setInterval(()=>{document.querySelector('.typing').textContent=roles[r].slice(0,i++);if(i>roles[r].length){i=0;r=(r+1)%roles.length}},100)

const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>reveals.forEach(el=>{if(el.getBoundingClientRect().top<innerHeight-100)el.classList.add('active')}))

let s=0,u=0;
setInterval(()=>{if(s<120)s++;if(u<45000)u+=200;document.getElementById('servers').innerText=s;document.getElementById('users').innerText=u},50)

const c=document.getElementById('bg'),x=c.getContext('2d');
c.width=innerWidth;c.height=innerHeight;
let p=Array.from({length:80},()=>({x:Math.random()*c.width,y:Math.random()*c.height,dx:Math.random(),dy:Math.random()}));
(function anim(){x.clearRect(0,0,c.width,c.height);p.forEach(o=>{x.fillStyle='#8b5cf6';x.fillRect(o.x,o.y,2,2);o.x+=o.dx;o.y+=o.dy;if(o.x<0||o.x>c.width)o.dx*=-1;if(o.y<0||o.y>c.height)o.dy*=-1});requestAnimationFrame(anim)})();
</script>
