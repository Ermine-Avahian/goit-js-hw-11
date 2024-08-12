import{i as u,S as f}from"./assets/vendor-3fe00192.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const m="45375111-d1e8183fd09326f55157dfb1e",p="https://pixabay.com/api/";async function g(e,o=1,a=12){const n=`${p}?key=${m}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${a}`;try{const t=await(await fetch(n)).json();if(t.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please, try again!");return t}catch(r){throw r}}function h(e,o){const a=e.map(n=>y(n)).join("");o.insertAdjacentHTML("beforeend",a)}function y({webformatURL:e,largeImageURL:o,tags:a,likes:n,views:r,comments:t,downloads:s}){return`
    <a href="${o}" class="gallery__item">
      <img
        src="${e}"
        alt="${a}"
        loading="lazy"
        class="gallery__image"
      />
      <div class="gallery__info">
        <p>
          <b>Likes:</b> ${n}
        </p>
        <p>
          <b>Views:</b> ${r}
        </p>
        <p>
          <b>Comments:</b> ${t}
        </p>
        <p>
          <b>Downloads:</b> ${s}
        </p>
      </div>
    </a>
  `}function b(){const e=document.querySelector(".gallery");e.innerHTML=""}function i(e,o="info"){u[o]({title:o.charAt(0).toUpperCase()+o.slice(1),message:e,position:"topRight",backgroundColor:"#ef4040",titleColor:"#fafafb",messageColor:"#fafafb",borderBottom:"2px solid #ffbebe",borderRadius:"4px",padding:"20px",width:"432px",height:"88px",fontSize:"16px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0.03em",messageMaxWidth:"100%",messageOverflow:"hidden",wordBreak:"break-word",wordWrap:"break-word"})}function w(){document.querySelector(".loader").classList.add("visible")}function L(){document.querySelector(".loader").classList.remove("visible")}const v=document.querySelector("#search-form"),S=document.querySelector(".gallery");document.querySelector(".loader");const q=document.querySelector(".load-more");let c="",l=1,$=new f(".gallery a");v.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.currentTarget.elements.searchQuery.value.trim(),c===""){i("Please enter a search query","warning");return}b(),l=1,await d()});async function d(){try{w();const e=await g(c,l);if(e.hits.length===0){i("Sorry, there are no images matching your search query. Please, try again!","error");return}h(e.hits,S),$.refresh(),e.totalHits>12&&x()}catch(e){i(e.message,"error")}finally{L()}}function x(){const e={root:null,rootMargin:"0px",threshold:.5};new IntersectionObserver(async a=>{a[0].isIntersecting&&(l+=1,await d())},e).observe(q)}
//# sourceMappingURL=commonHelpers.js.map
