import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as c}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("[data-start]");let s=null,i;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(c.warning({title:"Caution",message:"Please choose a date in the future"}),r.disabled=!0):(s=t,r.disabled=!1)}};f("#datetime-picker",h);r.addEventListener("click",function(){s&&(r.disabled=!0,i=setInterval(()=>{const{days:e,hours:t,minutes:n,seconds:o}=y(s-new Date);S(e,t,n,o)},1e3))});function y(e){const u=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}function S(e,t,n,o){document.querySelector("[data-days]").textContent=a(e),document.querySelector("[data-hours]").textContent=a(t),document.querySelector("[data-minutes]").textContent=a(n),document.querySelector("[data-seconds]").textContent=a(o),e===0&&t===0&&n===0&&o===0&&(clearInterval(i),c.success({title:"Success",message:"Timer has finished!"}))}function a(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=01-timer.js.map
