(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.getElementById("nav-bar"),d=document.querySelector("main > header:first-child"),g=i.getBoundingClientRect().height,f=new IntersectionObserver(n=>{const[r]=n;r.isIntersecting?i.classList.contains("nav-bg")||i.classList.add("nav-bg"):i.classList.contains("nav-bg")&&i.classList.remove("nav-bg")},{root:null,threshold:0,rootMargin:`-${g}px`});f.observe(d);document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".navbar-burger");n.addEventListener("click",()=>{const r=n.dataset.target,s=document.getElementById(r);n.classList.toggle("is-active"),s.classList.toggle("is-active")})});function m(n,r,s,a){let e=null;const t=o=>{e||(e=o);const c=Math.min((o-e)/a,1),l=navigator.languages!=null?navigator.languages[0]:navigator.language,u=n.hasAttribute("data-plus")?"+":"";n.innerHTML=Math.floor(c*(s-r)+r).toLocaleString(l)+u,c<1&&window.requestAnimationFrame(t)};window.requestAnimationFrame(t)}document.querySelectorAll("p[data-value]").forEach(n=>{const r=Number.parseInt(n.getAttribute("data-value"));m(n,0,r,1e3)});
