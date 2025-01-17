import{S as c,i as p}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),d=t=>`<li class="gallery-card">
  <a href="${t.largeImageURL}" class="gallery-item">
  <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}"/>
  <div class="text-info">
             <p>
                <span>Likes</span>
                <span>${t.likes}</span>
                
            </p>
            <p>
                <span>Views</span>
                <span>${t.views}</span>
                
            </p>
            <p>
                
                <span>Comments</span>
                <span>${t.comments}</span>
            </p>
            <p>
                
                <span>Downloads</span>
                <span>${t.downloads}</span>
            </p>
       
          </div>
  </a>
  </li>
  `,m=t=>{t.preventDefault();const o=t.currentTarget.elements.user_query.value.trim();console.log(o),l.reset(),u.classList.remove("is-hidden"),fetch(`https://pixabay.com/api/?key=48247224-415eb498da8da81883dddb739&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(console.log(r.hits),r.hits.length===0){p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML="";return}const a=r.hits.map(e=>d(e)).join();i.innerHTML=a}).catch(r=>{console.log(r)})};l.addEventListener("submit",m);new c(".js-gallery a",{captionsData:"alt",captionPosition:"bottom",animationSpeed:250});
//# sourceMappingURL=index.js.map
