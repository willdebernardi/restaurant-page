(()=>{"use strict";!function(){console.log("no");let e=document.getElementById("content");const t=document.createElement("div");t.id="image-logo";const n=document.createElement("p");n.textContent="Vaffanculo's",t.appendChild(n);const d=document.createElement("div");d.id="navbar";const a=document.createElement("ul");for(let e=0;e<5;e++){const t=document.createElement("li"),n=document.createElement("a");0==e?n.innerText="Home":1==e?n.innerText="Menu":2==e?n.innerText="Locations":3==e?(t.classList.add("last-child"),n.innerText="Contact"):4==e&&(t.classList.add("red","last-child"),n.innerText="Order"),n.href="",t.appendChild(n),a.appendChild(t)}d.appendChild(a);const o=document.createElement("div");o.id="image-container";const c=document.createElement("h3");c.textContent="Rated Top 100 Italian Restaurants in the Country";const i=document.createElement("h1");i.textContent="The Taste of Italy";const l=document.createElement("div");l.id="italy-flag",o.appendChild(c),o.appendChild(i),o.appendChild(l);const r=document.createElement("div");r.id="table-container";const s=document.createElement("div");s.id="left-pane";const m=document.createElement("h3");m.textContent="Dine With Us";const p=document.createElement("h4");p.innerHTML="Sunday: Closed <br> Monday-Thursday: 12:00PM - 10:00PM <br> Friday-Saturday: 2:00PM - 11:00PM";const h=document.createElement("h1");h.textContent="Book A Table";const u=document.createElement("div");u.id="button-container";const C=document.createElement("button");C.id="book-button",C.classList.add("hvr-shadow"),C.textContent="Book Now";const E=document.createElement("button");E.id="menu-button",E.classList.add("hvr-shadow"),E.textContent="Menu",u.appendChild(C),u.appendChild(E),s.appendChild(m),s.appendChild(l),s.appendChild(p),s.appendChild(h),s.appendChild(u);const x=document.createElement("div");x.id="right-pane",r.appendChild(s),r.appendChild(x),e.appendChild(t),e.appendChild(d),e.appendChild(o),e.appendChild(r)}()})();