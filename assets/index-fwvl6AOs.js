(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function i(t){const s=document.getElementById(t),r=new Date("2025-03-01T00:00:00").getTime();function o(a,c=!1){return`<span class="countdown-number ${c?"green":""}">${a.toString().padStart(2,"0")}</span>`}function e(){const a=new Date().getTime(),c=r-a,d=Math.floor(c/(1e3*60*60*24)),u=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),f=Math.floor(c%(1e3*60*60)/(1e3*60)),m=Math.floor(c%(1e3*60)/1e3);s&&(s.innerHTML=`
          <div class="countdown-item">${o(d)}<span class="label">днів</span></div>
          <span class="colon">:</span>
          <div class="countdown-item">${o(u)}<span class="label">годин</span></div>
          <span class="colon">:</span>
          <div class="countdown-item">${o(f)}<span class="label">хвилин</span></div>
          <span class="colon">:</span>
          <div class="countdown-item">${o(m,!0)}<span class="label">секунд</span></div>
        `),c<0&&(clearInterval(n),s&&(s.innerHTML="Час вичерпано!"))}const n=setInterval(e,1e3)}function p(){const t=document.getElementById("modal"),s=document.getElementById("registerBtn"),r=document.getElementById("closeModal");s.addEventListener("click",()=>{t.setAttribute("aria-hidden","false"),t.style.display="block";const o=t.querySelector("input");o&&o.focus()}),r.addEventListener("click",()=>{t.setAttribute("aria-hidden","true"),t.style.display="none"}),window.addEventListener("keydown",o=>{o.key==="Escape"&&t.getAttribute("aria-hidden")==="false"&&(t.setAttribute("aria-hidden","true"),t.style.display="none")})}function l(t){t.addEventListener("submit",s=>{s.preventDefault();let r=!0;if(t.querySelectorAll(".error-message").forEach(e=>{e.textContent=""}),t.querySelectorAll(".error").forEach(e=>{e.classList.remove("error")}),t.querySelectorAll('input[type="tel"]').forEach(e=>{const n=document.getElementById(e.getAttribute("aria-describedby")),a=e.value.replace(/\D/g,"");e.required&&!e.value.trim()?(e.classList.add("error"),n&&(n.textContent="Заповніть це поле"),r=!1):/^380\d{9}$/.test(a)||(e.classList.add("error"),n&&(n.textContent="Неправильний формат телефону. Використовуйте формат +380123456789"),r=!1)}),r){const e=new FormData(t);fetch("https://example.com/register",{method:"POST",body:e}).then(n=>{n.ok?(alert("Реєстрація успішна!"),t.reset()):alert("Помилка при відправленні форми.")}).catch(()=>{alert("Помилка з’єднання.")})}})}document.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.addEventListener("change",s=>{const r=s.target,o=r.nextElementSibling;o&&o.classList.toggle("checked",r.checked)})});i("countdown");i("modal-countdown");p();l(document.getElementById("registrationForm"));l(document.getElementById("modalForm"));
