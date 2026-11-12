const S=i=>"https://store.steampowered.com/app/"+i+"/";
const C={
rpg:{n:"RPG – Role Playing Games",k:"RPG",t:"Fantasia medieval, magia, dragões e mundos abertos",a:"#8b5cf6",b:"#fbbf24",s:"#1b1245",i:"🐉"},
fps:{n:"FPS – First Person Shooter",k:"FPS",t:"Militar, futurista e combate tático",a:"#ef4444",b:"#fb923c",s:"#1a0a0a",i:"🎯"},
adv:{n:"Aventura e Mundo Aberto",k:"Aventura",t:"Exploração, natureza e descobertas",a:"#22c55e",b:"#facc15",s:"#062a3a",i:"🧭"},
str:{n:"Estratégia",k:"Estratégia",t:"Guerras, impérios, planejamento e construção",a:"#94a3b8",b:"#f5b301",s:"#0f1d3a",i:"♟️"},
hor:{n:"Terror e Sobrevivência",k:"Terror",t:"Suspense, ambientes sombrios e criaturas assustadoras",a:"#dc2626",b:"#a855f7",s:"#0a0a0c",i:"💀"},
rac:{n:"Corrida e Esportes",k:"Corrida",t:"Velocidade, competição e adrenalina",a:"#2f6bff",b:"#ef4444",s:"#0b1230",i:"🏎️"},
ind:{n:"Indies e Casuais",k:"Indies",t:"Criatividade, diversão e estética artística",a:"#ff4fa3",b:"#22d3ee",s:"#2a1038",i:"🎨"}};
// nome, categoria, descrição, link oficial, ano, plataformas, flags (p=popular, d=destaque)
const G=[
["Melvor Idle","rpg","RPG idle inspirado em RuneScape: treine habilidades, lute e evolua sem parar.","https://melvoridle.com/",0,"Navegador","d"],
["Hordes.io","rpg","MMORPG de ação com classes, grupos e combates em massa direto no navegador.","https://hordes.io/",0,"Navegador",""],
["Dungeon Crawl Stone Soup","rpg","Roguelike clássico de masmorras com dezenas de raças e classes, jogável online.","https://crawl.develz.org/",2006,"Navegador",""],
["Fallen London","rpg","RPG narrativo gótico numa Londres subterrânea, cheio de escolhas e mistérios.","https://www.fallenlondon.com/",2009,"Navegador",""],
["Legends of Idleon","rpg","MMO idle com vários personagens e um mundo enorme para evoluir aos poucos.","https://www.legendsofidleon.com/",0,"Navegador",""],
["Krunker","fps","FPS rápido em blocos, com classes, mapas da comunidade e partidas instantâneas.","https://krunker.io/",2018,"Navegador","p"],
["Shell Shockers","fps","FPS multiplayer em que você é um ovo armado: ação rápida e muito caos.","https://shellshock.io/",0,"Navegador","p"],
["Venge.io","fps","FPS de heróis em 3D com habilidades únicas, direto no navegador.","https://venge.io/",0,"Navegador",""],
["Zombs Royale","fps","Battle royale 2D de tiro com partidas rápidas e modo em equipe.","https://zombsroyale.io/",0,"Navegador",""],
["Minecraft Classic","adv","A versão original do Minecraft no navegador: construa com blocos e explore.","https://classic.minecraft.net/",2009,"Navegador",""],
["Bloxd.io","adv","Mundo de blocos com construção e minigames, no estilo Minecraft.","https://bloxd.io/",0,"Navegador","d"],
["Mope.io","adv","Comece como um ratinho e evolua até virar predador no ecossistema do jogo.","https://mope.io/",2016,"Navegador",""],
["Forge of Empires","str","Construa sua cidade e avance da Idade da Pedra até eras futuristas.","https://forgeofempires.com/",2012,"Navegador",""],
["Lichess","str","Xadrez online gratuito e sem anúncios, contra jogadores do mundo todo.","https://lichess.org/",2010,"Navegador","p"],
["Pokémon Showdown","str","Simulador de batalhas Pokémon: monte times e enfrente jogadores online.","https://play.pokemonshowdown.com/",2011,"Navegador","d"],
["Freeciv","str","Estratégia de código aberto no estilo Civilization, jogável no navegador.","https://play.freeciv.org/",0,"Navegador",""],
["A Dark Room","hor","Aventura em texto sombria: acenda o fogo, sobreviva ao frio e explore.","https://adarkroom.doublespeakgames.com/",2013,"Navegador",""],
["Starve.io","hor","Sobrevivência 2D multiplayer: colete, construa e fuja do frio e dos predadores.","https://starve.io/",0,"Navegador",""],
["Taming.io","hor","Sobrevivência com animais: domestique, construa uma base e defenda seu território.","https://taming.io/",0,"Navegador",""],
["Smash Karts","rac","Corrida de kart com itens e armas, multiplayer rápido e caótico.","https://smashkarts.io/",0,"Navegador","p"],
["Slow Roads","rac","Passeio de carro relaxante por estradas geradas infinitamente.","https://slowroads.io/",0,"Navegador","d"],
["8 Ball Pool","rac","Sinuca online da Miniclip, com partidas contra jogadores de todo o mundo.","https://www.miniclip.com/games/8-ball-pool-multiplayer/en/",0,"Navegador",""],
["Cookie Clicker","ind","Clique, compre melhorias e construa um império de biscoitos.","https://orteil.dashnet.org/cookieclicker/",2013,"Navegador",""],
["2048","ind","Combine blocos numerados até chegar ao 2048 neste quebra-cabeça viciante.","https://play2048.co/",2014,"Navegador","p"],
["Little Alchemy 2","ind","Combine elementos e descubra centenas de itens, do fogo ao universo.","https://littlealchemy2.com/",2017,"Navegador",""],
["Slither.io","ind","Controle uma cobra, devore pontos e cresça sem bater nas outras.","https://slither.io/",2016,"Navegador","p"],
["Skribbl.io","ind","Desenhe e adivinhe com amigos: o clássico jogo de desenho online.","https://skribbl.io/",2017,"Navegador",""],
["Wordle","ind","Quebra-cabeça diário: descubra a palavra de cinco letras em seis tentativas.","https://www.nytimes.com/games/wordle/index.html",2021,"Navegador",""]
].map(([n,c,d,u,y,p,f],i)=>({n,c,d,u,y,p,f,i}));

let fav=new Set(),cat="all",q="",mi=-1;
try{fav=new Set(JSON.parse(localStorage.getItem("gv")||"[]"))}catch(e){}
const save=()=>{try{localStorage.setItem("gv",JSON.stringify([...fav]))}catch(e){}};
const $=s=>document.querySelector(s);
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g,"");
const st=c=>`--a:${c.a};--b:${c.b};--s:${c.s}`;
const heart=g=>`<button class="ib${fav.has(g.n)?" on":""}" data-fav="${g.i}" aria-label="Favoritar ${g.n}">${fav.has(g.n)?"♥":"♡"}</button>`;
const play=g=>`<a class="btn" href="${g.u}" target="_blank" rel="noopener noreferrer">JOGAR AGORA</a>`;
const card=g=>{const c=C[g.c];return `<article class="card" style="${st(c)}"><div class="cov ${g.c}" style="--g:${120+(g.i*17)%90}deg"><span class="fr">NO NAVEGADOR</span><span class="ic">${c.i}</span><h3>${g.n}</h3></div><div class="bd"><span class="tag">${c.k}</span><p>${g.d}</p><div class="act">${play(g)}<button class="ib" data-info="${g.i}" aria-label="Mais informações sobre ${g.n}">ℹ</button>${heart(g)}</div></div></article>`};
const fill=(el,l,empty="")=>{$(el).innerHTML=l.length?l.map(card).join(""):empty};

function render(){
  fill("#hf",[G.find(g=>g.n==="Minecraft Classic")]);
  fill("#dest",G.filter(g=>g.f==="d"));
  fill("#pop",G.filter(g=>g.f==="p"));
  fill("#new",G.filter(g=>g.y).sort((a,b)=>b.y-a.y).slice(0,6));
  const ql=norm(q);
  const l=G.filter(g=>(cat==="all"||(cat==="fav"?fav.has(g.n):g.c===cat))&&(!ql||norm(g.n).includes(ql)));
  fill("#cat",l,`<p class="mu">${cat==="fav"&&!ql?"Você ainda não favoritou nenhum jogo. Toque no ♡ de qualquer card.":"Nenhum jogo encontrado. Tente outro nome ou categoria."}</p>`);
  $("#cn").textContent=l.length+(l.length===1?" jogo":" jogos");
  const chips=[["all","Todos"],...Object.entries(C).map(([k,c])=>[k,c.k]),["fav","♥ Favoritos ("+fav.size+")"]]
    .map(([k,t])=>`<button class="chip${cat===k?" on":""}" data-cat="${k}" style="--a:${C[k]?C[k].a:"#7c5cff"}">${t}</button>`).join("");
  $("#nv").innerHTML=chips;$("#fl").innerHTML=chips;
  const c=C[cat],b=$("#cb");b.hidden=!c;
  if(c){b.className=cat;b.style.cssText=st(c);b.innerHTML=`<span style="font-size:42px">${c.i}</span><div><h3>${c.n}</h3><p>${c.t}</p></div>`}
}
$("#cs").innerHTML=Object.entries(C).map(([k,c])=>`<button class="cat ${k}" data-cat="${k}" style="${st(c)}"><i>${c.i}</i><b>${c.k}</b><small>${c.t}</small><small>${G.filter(g=>g.c===k).length} jogos</small></button>`).join("");

function openM(i){
  mi=i;const g=G[i],c=C[g.c],m=$("#md");
  m.innerHTML=`<div class="mb" style="${st(c)}"><div class="cov ${g.c}"><span class="fr">NO NAVEGADOR</span><span class="ic">${c.i}</span><h3>${g.n}</h3></div><div class="bd"><span class="tag">${c.n}</span><p>${g.d}</p><dl><dt>Como jogar</dt><dd>Direto no navegador, sem instalar</dd>${g.y?`<dt>Lançamento</dt><dd>${g.y}</dd>`:""}<dt>Plataformas</dt><dd>${g.p}</dd><dt>Estilo</dt><dd>${c.t}</dd><dt>Link para</dt><dd>${new URL(g.u).hostname}</dd></dl><div class="act">${play(g)}${heart(g)}<button class="ib" data-x aria-label="Fechar">✕</button></div></div></div>`;
  m.classList.add("on");
}
function closeM(){mi=-1;$("#md").classList.remove("on")}

document.addEventListener("click",e=>{
  if(e.target.id==="md")return closeM();
  const t=e.target.closest("[data-cat],[data-info],[data-fav],[data-x],[data-go]");if(!t)return;
  const d=t.dataset;
  if(d.go){document.getElementById(d.go).scrollIntoView()}
  else if(d.cat){cat=d.cat;q="";$("#q").value="";closeM();render();$("#catalogo").scrollIntoView()}
  else if(d.fav!==undefined){const g=G[d.fav];fav.has(g.n)?fav.delete(g.n):fav.add(g.n);save();render();if(mi>=0)openM(mi)}
  else if(d.info!==undefined)openM(+d.info);
  else closeM();
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeM()});
$("#q").addEventListener("input",e=>{const was=!q;q=e.target.value;if(q)cat="all";render();if(was&&q)$("#catalogo").scrollIntoView()});
render();
