import{i as u,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const h=t=>`<li class="gallery-card">
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
  `,m=t=>{const l=new URLSearchParams({key:"48247224-415eb498da8da81883dddb739",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${l.toString()}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),p=t=>{t.preventDefault();const l=t.currentTarget.elements.user_query.value.trim();n.reset(),i.classList.remove("is-hidden"),m(l).then(r=>{if(r.hits.length===0){i.style.display="none",u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="";return}const a=r.hits.map(s=>h(s)).join();c.innerHTML=a,new d(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250}).refresh()}).catch(r=>{console.log(r)}).finally(()=>{i.classList.add("is-hidden")})};n.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
