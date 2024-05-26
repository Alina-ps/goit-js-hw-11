import{S as f,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(r){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44002996-fc99192b9f50d4483edb9d78f",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${o}?${s.toString()}`;return fetch(n).then(e=>e.json())}function d(r){return`<li>
    <a href="${r.largeImageURL}">
      <img
        src="${r.webformatURL}" 
        alt="${r.tags}"
      />
    </a>
    <div class='info'>
      <p><span>Likes</span> ${r.likes}</p>
      <p><span>Views</span> ${r.views}</p>
      <p><span>Comments</span> ${r.comments}</p>
      <p><span>Downloads</span> ${r.downloads}</p>
    </div>
  </li>`}function m(r){return r.map(d).join("")}const c=document.querySelector(".search-form"),l=document.querySelector(".loader"),u=document.querySelector(".gallery"),y=new f(".gallery a");c.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.query.value.trim();if(o===""){i.show({title:"Error",message:"Please enter a search query!",backgroundColor:"#EF4040"});return}u.innerHTML="",l.style.display="block",p(o).then(s=>{if(l.style.display="none",s.hits.length===0){i.show({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040"});return}const n=m(s.hits);u.innerHTML=n,y.refresh()}).catch(s=>{l.style.display="none",i.show({title:"Error",message:"Sorry, something went wrong. Please try again later!",backgroundColor:"#EF4040"})}),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
