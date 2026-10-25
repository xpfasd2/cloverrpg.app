'use strict';
const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('#mobile-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Open menu':'Close menu');menu.hidden=open;});
const search=document.querySelector('#guide-search');let filter='all';
function filterGuides(){let count=0;document.querySelectorAll('[data-guide]').forEach(card=>{const match=(filter==='all'||card.dataset.category===filter)&&card.textContent.toLowerCase().includes(search.value.toLowerCase().trim());card.hidden=!match;if(match)count++;});document.querySelector('#empty-search').hidden=count>0;document.querySelector('#search-count').textContent=`${count} ${count===1?'guide':'guides'} found`;}
const directory=document.querySelector('#guides');
function revealGuides(scroll=false){if(!directory)return;directory.hidden=false;if(scroll)directory.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
search?.addEventListener('input',()=>{filterGuides();revealGuides();});
document.querySelector('#guide-search-form')?.addEventListener('submit',e=>{e.preventDefault();filterGuides();revealGuides(true);});
document.querySelectorAll('a[href="/#guides"]').forEach(a=>a.addEventListener('click',e=>{if(!directory)return;e.preventDefault();history.replaceState(null,'','#guides');revealGuides(true);if(menu){menu.hidden=true;toggle?.setAttribute('aria-expanded','false');}}));
if(location.hash==='#guides')revealGuides(true);

document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});filterGuides();}));
document.addEventListener('keydown',e=>{if(e.key==='/'&&search&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){e.preventDefault();search.focus();}});
const steps=[...document.querySelectorAll('[data-step]')],key='clover-field-guide-progress-v1';let saved=[];try{const value=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(value))saved=value;}catch{}
function progress(){document.querySelector('#progress-text').textContent=`${steps.filter(x=>x.checked).length} of ${steps.length} complete`;}
steps.forEach(x=>{x.checked=saved.includes(x.dataset.step);x.addEventListener('change',()=>{try{localStorage.setItem(key,JSON.stringify(steps.filter(s=>s.checked).map(s=>s.dataset.step)));}catch{}progress();});});if(steps.length)progress();
document.querySelector('#reset-progress')?.addEventListener('click',()=>{steps.forEach(x=>x.checked=false);try{localStorage.removeItem(key);}catch{}progress();});
const magic=document.querySelector('#magic-choice'),rolls=document.querySelector('#roll-count');
function calculate(){const n=Number(rolls.value),p=Number(magic.value)/100;const output=document.querySelector('#probability'),caption=document.querySelector('#probability-caption');if(!Number.isInteger(n)||n<1||n>1000){output.textContent='—';caption.textContent='Enter a whole number from 1 to 1,000.';return;}output.textContent=`${((1-Math.pow(1-p,n))*100).toFixed(2)}%`;caption.textContent=`${n} rolls at a ${magic.value}% chance per roll`;}
magic?.addEventListener('change',calculate);rolls?.addEventListener('input',calculate);
const quest=document.querySelector('#quest-filter');quest?.addEventListener('input',()=>{let count=0;document.querySelectorAll('tbody tr').forEach(row=>{row.hidden=!row.textContent.toLowerCase().includes(quest.value.toLowerCase().trim());if(!row.hidden)count++;});document.querySelector('#quest-empty').hidden=count>0;});

document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu&&!menu.hidden){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');toggle.focus();}});
