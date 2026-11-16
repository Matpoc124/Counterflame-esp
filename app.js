const arena=document.getElementById('arena');
const boxes=document.getElementById('boxesToggle');
const names=document.getElementById('namesToggle');
const distance=document.getElementById('distanceToggle');
function update(){document.querySelectorAll('.target').forEach(t=>{t.querySelector('.boxmark').style.display=boxes.checked?'block':'none';t.querySelector('b').style.display=names.checked?'block':'none';t.querySelector('small').style.display=distance.checked?'block':'none';});}
[boxes,names,distance].forEach(el=>el.addEventListener('change',update));
document.querySelectorAll('.swatch').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.swatch').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.target').forEach(t=>t.style.color=btn.dataset.color);}));
update();
if('serviceWorker' in navigator && location.protocol.startsWith('http')){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
