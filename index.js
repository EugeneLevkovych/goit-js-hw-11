import{i as a,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=t=>`<li class="gallery-card">
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
  `,h=t=>{const i=new URLSearchParams({key:"48247224-415eb498da8da81883dddb739",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},u=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),c=document.querySelector(".loader"),p=t=>{t.preventDefault();const i=t.currentTarget.elements.user_query.value.trim();if(i===""){a.error({position:"topRight",message:"Field must be filled in!"});return}n.innerHTML="",c.classList.remove("is-hidden"),u.reset(),h(i).then(s=>{if(s.total===0){c.classList.add("is-hidden"),a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const o=s.hits.map(r=>m(r)).join("");n.innerHTML=o,new d(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250}).refresh()}).catch(s=>{a.error({title:"Error",message:"BAD REQUEST",position:"topRight"}),console.log(s)}).finally(()=>{c.classList.add("is-hidden")})};u.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
