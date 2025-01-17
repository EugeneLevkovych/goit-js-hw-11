import{i as u,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h=t=>`<li class="gallery-card">
  <a href="${t.largeImageURL}" class="gallery-item">
  <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"/>
  </a>
  <ul class="text-list">
               <li class="text-item">
                        <h2 class="text-title">Likes:</h2>
                        <p class="text-values">${t.likes}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Views:</h2>
                        <p class="text-values">${t.views}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Comments:</h2>
                        <p class="text-values">${t.comments}</p>
                    </li>
                    <li class="text-item">
                        <h2 class="text-title">Downloads:</h2>
                        <p class="text-values">${t.downloads}</p>
                    </li>
       
          </ul>
  
  </li>
  `,m=t=>{const l=new URLSearchParams({key:"48247224-415eb498da8da81883dddb739",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${l.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},n=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),p=t=>{t.preventDefault();const l=t.currentTarget.elements.user_query.value.trim();n.reset(),c.classList.remove("is-hidden"),m(l).then(s=>{if(s.hits.length===0){u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML="";return}const a=s.hits.map(r=>h(r)).join();i.innerHTML=a,new d(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250}).refresh()}).catch(s=>{console.log(s)}).finally(()=>{c.classList.add("is-hidden")})};n.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
