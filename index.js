import{i as c,S as d}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=t=>`<li class="gallery-card">
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
  `,h=t=>{const o=new URLSearchParams({key:"48247224-415eb498da8da81883dddb739",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},u=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),p=t=>{t.preventDefault(),l.classList.remove("is-hidden");const o=t.currentTarget.elements.user_query.value.trim();if(o===""){c.error({position:"topRight",message:"Field must be filled in!"}),l.classList.add("is-hidden");return}u.reset(),h(o).then(s=>{if(console.dir(s),s.total===0){l.style.display="none",c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="";return}const i=s.hits.map(r=>m(r)).join();n.innerHTML=i,new d(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250}).refresh()}).catch(s=>{c.error({title:"Error",message:"BAD REQUEST",position:"topRight"}),console.log(s)}).finally(()=>{l.classList.add("is-hidden")})};u.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
