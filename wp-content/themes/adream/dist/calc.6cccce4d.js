import{p as k,a as H,_ as T}from"./params.d089f16f.js";import{m as i,t as u}from"./functions.e62da874.js";import"./_commonjsHelpers.442273fa.js";const L=()=>{const n=document.getElementById("auction"),t=document.getElementById("auctionCity"),o=g.auctions.find(l=>l.name==n.value).price.find(l=>l.city==t.value),a=document.getElementById("faster_shipping"),c=a.closest(".form-check");let s=[],d=[];for(const l in o)l.startsWith("port_")&&o[l]>0&&(s.push(l),d.push(o[l]));s.includes("port_CA")&&s.includes("port_TX")?c.classList.add("!block"):(c.classList.remove("!block"),a.checked=!1)};wp.i18n;var g,q,_=!0,N=new IntersectionObserver(async n=>{if(g||n[0].intersectionRatio<=0)return;let e=await(await fetch(theme.api.endpoint+"adream/v1/auctions")).json();g=e;const o=new CustomEvent("auctionsLoaded",{detail:{data:e}});document.dispatchEvent(o)});document.getElementById("formCalc")&&N.observe(document.getElementById("formCalc"));const M=n=>{const t=document.getElementById("auction"),e=document.getElementById("auctionCity");if(document.getElementById("costOfTheCar"),!e||!t)return;if(!g){setTimeout(M,1e3);return}e.innerHTML="",e.tomselect&&(e.tomselect.clear(),e.tomselect.clearOptions()),g.auctions.find(a=>a.name==t.value).price.forEach(a=>{let c=document.createElement("option");c.setAttribute("value",a.price),c.dataset.port=a.port,c.innerHTML=a.city,c.value=a.city,e.insertAdjacentElement("beforeend",c)}),e.tomselect&&(e.tomselect.sync(),e.tomselect.enable())};document.addEventListener("auctionsLoaded",L);var x;(x=document.querySelectorAll("[name=portTo]"))==null||x.forEach(n=>{n.addEventListener("input",t=>{if(n.value==="klaipeda"){const e=document.getElementById("faster_shipping");e.checked=!1}b()})});const b=()=>{const n=document.getElementById("faster_shipping"),t=document.getElementById("auctionCity"),e=document.getElementById("portFrom"),o=document.querySelector("[name=portTo]:checked");if(!e||!t)return;if(!g){setTimeout(b,1e3);return}if(o.value==="bremen"&&n.checked){e.value="\u0422\u0435\u0445\u0430\u0441";return}if(o.value==="bremen"&&e.value==="\u0422\u0435\u0445\u0430\u0441"){e.value="\u041A\u0430\u043B\u0456\u0444\u043E\u0440\u043D\u0456\u044F";return}const a=t.options[t.selectedIndex].dataset.port;e.value=a},W=()=>{const n=document.getElementById("turnkeyService");n.parentNode.classList.toggle("hidden"),n.toggleAttribute("required"),n.value=""};var $;($=document.getElementById("turnkeyServiceCheckbox"))==null||$.addEventListener("input",W);var S;(S=document.getElementById("auction"))==null||S.addEventListener("input",M);var A;(A=document.getElementById("auction"))==null||A.addEventListener("input",L);var D;(D=document.getElementById("auctionCity"))==null||D.addEventListener("input",b);var P;(P=document.getElementById("auctionCity"))==null||P.addEventListener("input",L);var O;(O=document.getElementById("engineType"))==null||O.addEventListener("input",G);var j;(j=document.getElementById("faster_shipping"))==null||j.addEventListener("input",n=>{const t=document.getElementById("bremen");t.checked=!0,b()});function G(n){const t=document.getElementById("engineVolume"),e=document.getElementById("enginePower");n.target.value=="electric"?(t.parentNode.classList.add("hidden"),e.parentNode.classList.remove("hidden"),e.setAttribute("required",!0)):(t.parentNode.classList.remove("hidden"),e.parentNode.classList.add("hidden"),e.removeAttribute("required"),e.value="")}[document.getElementById("engineVolume"),document.getElementById("enginePower")].forEach(n=>n.addEventListener("input",U));function U(n){const t=document.getElementById("engineParam");t.value=n.target.value}window.addEventListener("DOMContentLoaded",b);var R;(R=document.getElementById("formCalc"))==null||R.addEventListener("submit",F);let C=new AbortController;async function F(n){n.preventDefault(),C.abort(),C=new AbortController;const t=document.getElementById("formCalc"),e=t.querySelector('[type="submit"]'),o=new FormData(document.getElementById("formCalc"));o.append("wpnonce",theme.api.nonce),o.set("costOfTheCar",i.from(o.get("costOfTheCar"))),o.get("turnkeyService")?o.set("turnkeyService",i.from(o.get("turnkeyService"))):o.set("turnkeyService",0);const a=document.getElementById("auctionCity");a&&o.set("auctionCity",a.options[a.selectedIndex].text),o.delete("engineVolume"),o.delete("enginePower"),o.delete("isTurnkeyService");const c=new URLSearchParams(o),s=new Headers;s.append("Content-Type","application/x-www-form-urlencoded"),u(e),u(t);try{let l=await(await fetch(theme.api.endpoint+"adream/v1/calc?"+c,{method:"GET",headers:s,signal:C.signal})).json();if(l){q=l,Y(l);const r=new CustomEvent("calucalated",{detail:{data:l}});document.dispatchEvent(r),console.log("\u041F\u0456\u0448\u043B\u043E")}else console.log("\u041D\u0415 \u041F\u0456\u0448\u043B\u043E");u(e),u(t)}catch{u(e),u(t)}}function Y(n){const t=n.payments_by.invoices,e=document.getElementById("table12"),o=document.getElementById("table34");let a=t[0],c=t[1],s=t[2],d=t[3];e.innerHTML="",o.innerHTML="";let l,r,I,p;l=`
		<div class="calc-table calc-table-1">
			<table>
				<thead>
					<tr>
						<th colspan="3" class="w-full h3">\u041F\u043B\u0430\u0442\u0456\u0436 \u21161. \u0412\u0438\u0442\u0440\u0430\u0442\u0438 \u0432 \u0421\u0428\u0410 (\u043E\u043F\u043B\u0430\u0442\u0430 invoice)</th>
					</tr>
				</thead>
				<tbody>
					${v(a)}
				</tbody>
				<tfoot>
					<th class="!text-base" colspan="2"><b>\u0420\u0430\u0437\u043E\u043C \u0432\u0438\u0442\u0440\u0430\u0442\u0438 \u043F\u043E \u0421\u0428\u0410</b></th>
					<th class="!text-base">${i.to(a.value)}</th>
				</tfoot>
			</table>
			${h(a)}
		</div>
	`,r=`
		<div class="calc-table calc-table-2">
			<table>
				<thead>
					<tr>
						<th colspan="3" class="w-full h3">\u041F\u043B\u0430\u0442\u0456\u0436 \u21162. \u0412\u0438\u0442\u0440\u0430\u0442\u0438 \u0432 \u043F\u043E\u0440\u0442\u0443 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</th>
					</tr>
				</thead>
				<tbody>
					${v(c)}
					<tr>
						<td colspan="2" class="pl-40 !text-base"><b>\u0420\u0410\u0417\u041E\u041C \u0432\u0438\u0442\u0440\u0430\u0442\u0438 \u0432 \u043F\u043E\u0440\u0442\u0443 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</b></td>
						<td class="!text-base">${i.to(c.value)}</td>
					</tr>
				</tbody>
				<tfoot>
					<th class="!text-base" colspan="2"><b>\u0417\u0410\u0413\u0410\u041B\u041E\u041C \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0430\u0432\u0442\u043E</b></th>
					<th class="!text-base">${i.to(a.value+c.value)}</th>
				</tfoot>
			</table>
			${h(c)}
		</div>
	`,I=`
		<div class="calc-table calc-table-3">
			<table>
				<thead>
					<tr>
						<th colspan="3" class="w-full h3">\u041F\u043B\u0430\u0442\u0456\u0436 \u21163. \u041C\u0438\u0442\u043D\u0456 \u043F\u043B\u0430\u0442\u0435\u0436\u0456</th>
					</tr>
				</thead>
				<tbody>
					${v(s)}
					<tr>
						<td colspan="2" class="pl-40 !text-base"><b>\u0420\u0410\u0417\u041E\u041C \u0440\u043E\u0437\u043C\u0438\u0442\u043D\u0435\u043D\u043D\u044F (\u0431\u0435\u0437 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u0432\u0438\u0442\u0440\u0430\u0442)</b></td>
						<td class="!text-base">${i.to(s.value)}</td>
					</tr>
				</tbody>
				<tfoot>
					<th class="!text-base" colspan="2"><b>\u0417\u0410\u0413\u0410\u041B\u041E\u041C \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0430\u0432\u0442\u043E</b></th>
					<th class="!text-base">${i.to(a.value+c.value+s.value)}</th>
				</tfoot>
			</table>
			${h(s)}
		</div>
	`,p=`
		<div class="calc-table calc-table-4">
			<table>
				<thead>
					<tr>
						<th colspan="3" class="w-full h3">\u041F\u043B\u0430\u0442\u0456\u0436 \u21164. \u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u0432\u0438\u0442\u0440\u0430\u0442\u0438 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456</th>
					</tr>
				</thead>
				<tbody>
					${v(d)}
					<tr>
						<td colspan="2" class="pl-40 !text-base"><b>\u0420\u0410\u0417\u041E\u041C \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u0432\u0438\u0442\u0440\u0430\u0442\u0438</b></td>
						<td class="!text-base">${i.to(d.value)}</td>
					</tr>
				</tbody>
				<tfoot>
					<th class="!text-base" colspan="2"><b>\u041A\u0456\u043D\u0446\u0435\u0432\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u0430\u0432\u0442\u043E:</b></th>
					<th class="!text-base">${i.to(n.total)}</th>
				</tfoot>
			</table>
			<div class="calc__notification">
				<b><span style="color: red;">\u0423\u0412\u0410\u0413\u0410:</span> \u0426\u0456\u043D\u0430 \u0432\u043A\u0430\u0437\u0430\u043D\u0430 \u0411\u0415\u0417 \u0420\u0415\u041C\u041E\u041D\u0422\u0423</b>
			</div>
			${h(d)}
		</div>
	`,e.insertAdjacentHTML("beforeend",`
			${l}
			${r}
		`),o.insertAdjacentHTML("beforeend",`
			${I}
			${p}
		`);function h(m){let y="";for(const f in m.subpayments)m.subpayments[f].notice&&(y+=`
					<li>${m.subpayments[f].notice}</li>
				`);return y?`<ul class="calc__notification text-sm">${y}</ul>`:""}function v(m){let y="",f=1;for(const B in m.subpayments)y+=`
				<tr>
					<td class="pl-40 br-1-grey">${f}</td>
					<td class="br-1-grey">${m.subpayments[B].name}</td>
					<td id="${B}">${i.to(m.subpayments[B].value)}</td>
				</tr>
			`,f++;return y}}document.addEventListener("calucalated",n=>{var t,e,o;(t=document.getElementById("calculations"))==null||t.classList.remove("hidden"),(e=document.getElementById("calculationActions"))==null||e.classList.remove("hidden"),_&&((o=document.getElementById("calculations"))==null||o.scrollIntoView(),[document.getElementById("costOfTheCar"),document.getElementById("auction"),document.getElementById("auctionCity"),...document.querySelectorAll("[name=portTo]"),document.getElementById("insurance"),document.getElementById("turnkeyServiceCheckbox"),document.getElementById("turnkeyService"),document.getElementById("portFrom"),document.getElementById("engineType"),document.getElementById("graduationYear"),...document.querySelectorAll("[name=bodyType]"),document.getElementById("engineVolume"),document.getElementById("enginePower"),document.getElementById("faster_shipping")].forEach(a=>{a.addEventListener("input",c=>{J()&&F(c)})}),_=!1)});function J(){let n=[document.getElementById("costOfTheCar"),document.getElementById("auction"),document.getElementById("auctionCity"),...document.querySelectorAll("[name=portTo]"),document.getElementById("insurance"),document.getElementById("portFrom"),document.getElementById("engineType"),document.getElementById("graduationYear"),...document.querySelectorAll("[name=bodyType]")];return document.getElementById("turnkeyServiceCheckbox").checked&&n.push(document.getElementById("turnkeyService")),document.querySelector("input[name='bodyType']:checked").value=="electric"?n.push(document.getElementById("enginePower")):n.push(document.getElementById("engineVolume")),!n.find(t=>!t.validity.valid)}var E,w,V;(V=document.getElementById("btnDownloadCalculations"))==null||V.addEventListener("click",n=>{n.preventDefault(),u(document.getElementById("btnDownloadCalculations"));const t=q,e={Roboto:{normal:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.3.0-beta.1/fonts/Roboto/Roboto-Regular.ttf",bold:"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.3.0-beta.1/fonts/Roboto/Roboto-Medium.ttf"}};k.addFonts(e),k.createPdf(H(t)).getDataUrl().then(async o=>{const a=document.getElementById("iframeContainer"),c=document.createElement("iframe");c.src=o,a.innerHTML="",a.appendChild(c),a.classList.remove("hidden"),a.scrollIntoView(),(E==null||w==null)&&(E=await T(()=>import("./pdf.cfde6e20.js").then(s=>s.p),["pdf.cfde6e20.js","_commonjsHelpers.442273fa.js"]),w=await T(()=>import("./pdf.worker.entry.03ad1a2b.js").then(s=>s.p),[])),E.GlobalWorkerOptions.workerSrc=w,E.getDocument(o).promise.then(function(s){s.getPage(1).then(function(d){const l=document.createElement("canvas"),r=d.getViewport({scale:2});l.height=r.height,l.width=r.width,d.render({canvasContext:l.getContext("2d"),viewport:r}).promise.then(function(){const p=document.createElement("a");p.href=l.toDataURL("image/jpg",1),p.download="adream-"+t.total+"$.jpg",p.click(),u(document.getElementById("btnDownloadCalculations"))})})})})});
