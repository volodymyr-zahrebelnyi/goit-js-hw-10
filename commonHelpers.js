import"./assets/styles-c2d76240.js";import{f as y,i as S}from"./assets/vendor-77e16229.js";const n=document.getElementById("datetime-picker"),e=document.querySelector("[data-start]"),g=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),k=document.querySelector("[data-seconds]");let u,i;e.disabled=!0;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<=Date.now()?(S.error({title:"Error",message:"Please choose a date in the future"}),e.disabled=!0):(u=t[0].getTime(),e.disabled=!1)}},M=y(n,v);n.addEventListener("click",()=>{M.open()});e.addEventListener("click",q);function o(t){return t.toString().padStart(2,"0")}function q(){n.disabled=!0,e.disabled=!0,i=setInterval(()=>{const t=u-Date.now(),{days:s,hours:a,minutes:c,seconds:d}=r(t);g.textContent=o(s),b.textContent=o(a),p.textContent=o(c),k.textContent=o(d),t<1e3&&(clearInterval(i),n.disabled=!1)},1e3)}function r(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));
//# sourceMappingURL=commonHelpers.js.map