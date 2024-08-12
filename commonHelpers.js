import{i as l,S as d}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="45375111-d1e8183fd09326f55157dfb1e",m="https://pixabay.com/api/";function h(s){const t=`${m}?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).then(r=>r.hits).catch(r=>(console.error("Error fetching images:",r),[]))}let a;function g(s,t){if(t.innerHTML="",s.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=s.map(n=>`
      <li class="gallery__item">
        <a href="${n.largeImageURL}" data-lightbox="gallery">
          <img class="gallery__image" src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
        </a>
        <div class="gallery__info">
          <p><b>Likes:</b> ${n.likes}</p>
          <p><b>Views:</b> ${n.views}</p>
          <p><b>Comments:</b> ${n.comments}</p>
          <p><b>Downloads:</b> ${n.downloads}</p>
        </div>
      </li>
    `).join("");t.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new d(".gallery a",{captionsData:"alt",captionDelay:250})}const p=document.querySelector("#search-form"),c=document.querySelector(".gallery"),u=document.querySelector(".loading-spinner");function y(){c.innerHTML=""}function b(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}p.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(t===""){l.warning({title:"Warning",message:"Please enter a search query!"});return}y(),b(),h(t).then(r=>{g(r,c)}).catch(r=>{console.error("Error handling images:",r),l.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{L()})});
//# sourceMappingURL=commonHelpers.js.map
