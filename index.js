import{S as u,i as d}from"./assets/vendor-BrddEoy-.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=t=>`<li class="gallery-card">
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
  `,h=t=>{const l=new URLSearchParams({key:"48247224-415eb498da8da81883dddb739",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${l.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),p=t=>{t.preventDefault();const l=t.currentTarget.elements.user_query.value.trim();console.log(l),n.reset(),i.classList.remove("is-hidden"),h(l).then(s=>{if(console.log(s.hits),s.hits.length===0){i.style.display="none",d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="";return}const o=s.hits.map(e=>m(e)).join();c.innerHTML=o}).catch(s=>{console.log(s)}).finally(()=>{i.classList.add("is-hidden")})};n.addEventListener("submit",p);new u(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250});
//# sourceMappingURL=index.js.map
