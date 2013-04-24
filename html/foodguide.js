(function(){var N,ea,pa=30,r=16*pa,pa=r/16,fa=3*r,n=6*r,l=10*r,u=15*r,F=20*r,qa=40*r,Wa=0.6666*pa,j={butter:{name:"Butter",fat:1,dairy:1,health:40,hunger:25,perish:qa,stack:40},butterflywings:{name:"Butterfly Wings",isveggie:!0,decoration:2,health:8,hunger:9.375,perish:n,stack:40},deerclopseyeball:{name:"Deerclops Eyeball",uncookable:!0,health:60,hunger:75,sanity:-15},bird_egg:{name:"Egg",egg:1,health:0,hunger:9.375,sanity:0,perish:l,stack:40,rot:"rottenegg"},bird_egg_cooked:{name:"Cooked Egg",egg:1,
precook:1,health:0,hunger:12.5,sanity:0,perish:n,stack:40},rottenegg:{name:"Rotten Egg",uncookable:!0,health:-1,hunger:-10,stack:40},fish:{name:"Fish",ismeat:!0,meat:0.5,fish:1,health:1,hunger:12.5,perish:fa,stack:40},fish_cooked:{name:"Cooked Fish",ismeat:!0,meat:0.5,fish:1,precook:1,health:1,hunger:12.5,perish:n,stack:40},froglegs:{name:"Frog Legs",ismeat:!0,meat:0.5,health:1,hunger:12.5,perish:n,sanity:-10,stack:40},froglegs_cooked:{name:"Cooked Frog Legs",ismeat:!0,meat:0.5,precook:1,health:3,
hunger:12.5,perish:l,sanity:-10,stack:40},flowerhat:{name:"Garland",health:3,hunger:0,sanity:10,perish:n,stack:1,uncookable:!0},hambat:{name:"Ham Bat",health:-8,hunger:25,sanity:-15,perish:l,stack:1,uncookable:!0},honey:{name:"Honey",sweetener:!0,health:3,hunger:9.375,perish:qa,stack:40},honeycomb:{name:"Honeycomb",sweetener:!0},mandrake:{name:"Mandrake",veggie:1,magic:1,health:60,hunger:75,stack:40},mandrake_cooked:{name:"Cooked Mandrake",uncookable:!0,veggie:1,magic:1,precook:1,health:100,hunger:150,
stack:40},monstermeat:{name:"Monster Meat",ismeat:!0,meat:1,monster:!0,health:-20,hunger:18.75,sanity:-15,perish:n,stack:20,dry:"monstermeat_dried",drytime:r},monstermeat_cooked:{name:"Cooked Monster Meat",ismeat:!0,meat:1,monster:!0,precook:1,health:-3,hunger:18.75,sanity:-10,perish:u,stack:20},monstermeat_dried:{name:"Monster Jerky",ismeat:!0,meat:1,monster:!0,dried:1,health:-3,hunger:18.75,sanity:-5,perish:F,stack:20},meat:{name:"Meat",ismeat:!0,meat:1,health:1,hunger:25,sanity:-10,perish:n,stack:20,
dry:"meat_dried",drytime:2*r},meat_cooked:{name:"Cooked Meat",ismeat:!0,meat:1,precook:1,health:3,hunger:25,sanity:0,perish:l,stack:20},meat_dried:{name:"Jerky",ismeat:!0,meat:1,dried:1,health:20,hunger:25,sanity:15,perish:F,stack:20},morsel:{name:"Morsel",ismeat:!0,meat:0.5,health:0,hunger:12.5,sanity:-10,perish:n,stack:40,drytime:r,dry:"smallmeat_dried"},morsel_cooked:{name:"Cooked Morsel",ismeat:!0,meat:0.5,precook:1,health:1,hunger:12.5,sanity:0,perish:l,stack:40},smallmeat_dried:{name:"Small Jerky",
ismeat:!0,meat:0.5,dried:1,health:8,hunger:12.5,sanity:10,perish:F,stack:40},drumstick:{name:"Drumstick",ismeat:!0,ideal:!0,meat:0.5,health:0,hunger:12.5,sanity:-10,perish:n,stack:20,drytime:r,dry:"smallmeat_dried"},drumstick_cooked:{name:"Fried Drumstick",ismeat:!0,meat:0.5,precook:1,health:1,hunger:12.5,perish:l,stack:20},red_mushroom:{name:"Red Cap",veggie:0.5,health:-20,hunger:12.5,sanity:0,perish:l,stack:40},red_mushroom_cooked:{name:"Cooked Red Cap",veggie:0.5,health:1,hunger:0,sanity:-10,perish:l,
stack:40},green_mushroom:{name:"Green Cap",veggie:0.5,health:0,hunger:12.5,sanity:-50,perish:l,stack:40},green_mushroom_cooked:{name:"Cooked Green Cap",veggie:0.5,health:-1,hunger:0,sanity:15,perish:l,stack:40},blue_mushroom:{name:"Blue Cap",veggie:0.5,health:20,hunger:12.5,sanity:-15,perish:l,stack:40},blue_mushroom_cooked:{name:"Cooked Blue Cap",veggie:0.5,health:-3,hunger:0,sanity:10,perish:l,stack:40},petals:{name:"Petals",uncookable:!0,health:1,hunger:0,sanity:-2.5,perish:n,stack:40},petals_evil:{name:"Dark Petals",
uncookable:!0,health:0,hunger:0,sanity:-5,perish:n,stack:40},seeds:{name:"Seeds",uncookable:!0,health:0,hunger:4.6875,perish:qa,stack:40},seeds_cooked:{name:"Toasted Seeds",uncookable:!0,health:1,hunger:4.6875,perish:l,stack:40},spoiled_food:{name:"Rot",uncookable:!0,health:-1,hunger:-10,stack:40},tallbirdegg:{name:"Tallbird Egg",egg:4,health:3,hunger:25},tallbirdegg_cooked:{name:"Fried Tallbird Egg",egg:4,precook:1,health:0,hunger:37.5,perish:n},trunk_summer:{name:"Koalefant Trunk",uncookable:!0,
ismeat:!0,health:30,hunger:37.5,perish:n,stack:20},trunk_summer_cooked:{name:"Koalefant Trunk Steak",uncookable:!0,ismeat:!0,health:40,hunger:75,perish:u,stack:20},twigs:{name:"Twigs",inedible:1},carrot:{name:"Carrot",isveggie:!0,veggie:1,health:1,hunger:12.5,perish:l,sanity:0,stack:40},carrot_cooked:{name:"Roasted Carrot",isveggie:!0,veggie:1,precook:1,health:3,hunger:12.5,perish:n,sanity:0,stack:40},corn:{name:"Corn",ideal:!0,isveggie:!0,veggie:1,health:3,hunger:25,perish:l,sanity:0,stack:40},corn_cooked:{name:"Popcorn",
isveggie:!0,veggie:1,precook:1,health:3,hunger:12.5,perish:u,sanity:0,stack:40},pumpkin:{name:"Pumpkin",isveggie:!0,veggie:1,health:3,hunger:37.5,perish:l,sanity:0,stack:20},pumpkin_cooked:{name:"Hot Pumpkin",isveggie:!0,veggie:1,precook:1,health:8,hunger:37.5,perish:n,sanity:0,stack:20},eggplant:{name:"Eggplant",isveggie:!0,veggie:1,health:8,hunger:25,perish:l,sanity:0,stack:20},eggplant_cooked:{name:"Braised Eggplant",isveggie:!0,veggie:1,precook:1,health:20,hunger:25,perish:n,sanity:0,stack:20},
durian:{name:"Durian",isfruit:!0,monster:1,fruit:1,health:-3,hunger:25,perish:l,sanity:-5,stack:20},durian_cooked:{name:"Extra Smelly Durian",isfruit:!0,monster:1,fruit:1,precook:1,health:0,hunger:25,perish:n,sanity:-5,stack:20},pomegranate:{name:"Pomegranate",isfruit:!0,fruit:1,health:3,hunger:9.375,perish:n,sanity:0,stack:40},pomegranate_cooked:{name:"Sliced Pomegranate",isfruit:!0,fruit:1,precook:1,health:20,hunger:12.5,perish:fa,sanity:0,stack:40},dragonfruit:{name:"Dragon Fruit",isfruit:!0,fruit:1,
health:3,hunger:9.375,perish:n,sanity:0,stack:40},dragonfruit_cooked:{name:"Prepared Dragon Fruit",isfruit:!0,fruit:1,precook:1,health:20,hunger:12.5,perish:fa,sanity:0,stack:40},berries:{name:"Berries",isfruit:!0,fruit:0.5,health:0,hunger:9.375,perish:n,sanity:0,stack:40},berries_cooked:{name:"Roasted Berries",isfruit:!0,fruit:0.5,precook:1,health:1,hunger:12.5,perish:fa,sanity:0,stack:40}},Xa=function(){return this.op+this.qty},Ya={"=":function(a){return a===this.qty},">":function(a){return a>this.qty},
"<":function(a){return a<this.qty},">=":function(a){return a>=this.qty},"<=":function(a){return a<=this.qty}},ra={test:function(a){return!!a},toString:function(){return""}},t=function(a,b){return{op:a,qty:b,test:Ya[a],toString:Xa}},Za=function(a,b,c){return this.item1.test(a,b,c)||this.item2.test(a,b,c)},$a=function(){return this.item1+" or "+this.item2},Ca=function(a,b){return{item1:a,item2:b,test:Za,toString:$a,cancel:a.cancel||b.cancel}},ab=function(a,b,c){return!this.item.test(a,b,c)},bb=function(){return this.item.toString().substring(0,
this.item.toString().length-1)+"|strike]"},q=function(a){return{item:a,test:ab,toString:bb,cancel:!0}},cb=function(a,b){return(b[this.name]||0)+(b[this.name+"_cooked"]||0)},db=function(){return"[*"+j[this.name].name+"|"+j[this.name].img+" "+j[this.name].name+"]"+(j[this.name].cook?"[*"+j[this.name].cook.name+"|"+j[this.name].cook.img+"]":"")+(j[this.name].raw?"[*"+j[this.name].raw.name+"|"+j[this.name].raw.img+"]":"")+(this.qty?this.qty:"")},B=function(a,b){return{name:a,qty:b||ra,test:cb,toString:db}},
eb=function(a,b){return b[this.name]},fb=function(){return"[*"+j[this.name].name+"|"+j[this.name].img+" "+j[this.name].name+"]"+(this.qty?this.qty:"")},C=function(a,b){return{name:a,qty:b||ra,test:eb,toString:fb}},gb=function(a,b,c){return c[this.tag]},hb=function(){return"[tag:"+this.tag+"|"+this.tag+"]"+(this.qty?this.qty:"")},f=function(a,b){return{tag:a,qty:b||ra,test:gb,toString:hb}},g={butterflymuffin:{name:"Butter Muffin",test:function(a,b,c){return b.butterflywings&&!c.meat&&c.veggie},requires:"Butterfly Wings, veggie",
requirements:[B("butterflywings"),q(f("meat")),f("veggie")],priority:1,weight:1,foodtype:"veggie",health:20,hunger:37.5,perish:u,sanity:5,cooktime:2},frogglebunwich:{name:"Froggle Bunwich",test:function(a,b,c){return(b.froglegs||b.froglegs_cooked)&&c.veggie},requirements:[B("froglegs"),f("veggie")],priority:1,foodtype:"meat",health:20,hunger:37.5,perish:u,sanity:5,cooktime:2},taffy:{name:"Taffy",test:function(a,b,c){return c.sweetener&&3<=c.sweetener&&!c.meat},requirements:[f("sweetener",t(">=",3),
q(f("meat")))],priority:10,foodtype:"veggie",health:-3,hunger:25,perish:u,sanity:15,cooktime:2},pumpkincookie:{name:"Pumpkin Cookie",test:function(a,b,c){return(b.pumpkin||b.pumpkin_cooked)&&c.sweetener&&2<=c.sweetener},requirements:[B("pumpkin"),f("sweetener",t(">=",2))],priority:10,foodtype:"veggie",health:0,hunger:37.5,perish:l,sanity:15,cooktime:2},stuffedeggplant:{name:"Stuffed Eggplant",test:function(a,b,c){return(b.eggplant||b.eggplant_cooked)&&c.veggie&&1<c.veggie},requirements:[B("eggplant"),
f("veggie",t(">",1))],priority:1,foodtype:"veggie",health:3,hunger:37.5,perish:u,sanity:5,cooktime:2},fishsticks:{name:"Fishsticks",test:function(a,b,c){return c.fish&&b.twigs&&c.inedible&&1>=c.inedible},requirements:[f("fish"),C("twigs"),f("inedible"),f("inedible",t("<=",1))],priority:10,foodtype:"meat",health:40,hunger:37.5,perish:l,sanity:5,cooktime:2},honeynuggets:{name:"Honey Nuggets",test:function(a,b,c){return b.honey&&c.meat&&1.5>=c.meat&&!c.inedible},requirements:[C("honey"),f("meat",t("<=",
1.5)),q(f("inedible"))],priority:2,foodtype:"meat",health:20,hunger:37.5,perish:u,sanity:5,cooktime:2},honeyham:{name:"Honey Ham",test:function(a,b,c){return b.honey&&c.meat&&1.5<c.meat&&!c.inedible},requirements:[C("honey"),f("meat",t(">",1.5)),q(f("inedible"))],priority:2,foodtype:"meat",health:30,hunger:75,perish:u,sanity:5,cooktime:2},dragonpie:{name:"Dragonpie",test:function(a,b,c){return(b.dragonfruit||b.dragonfruit_cooked)&&!c.meat},requirements:[B("dragonfruit"),q(f("meat"))],priority:1,foodtype:"veggie",
health:40,hunger:75,perish:u,sanity:5,cooktime:2},kabobs:{name:"Kabobs",test:function(a,b,c){return c.meat&&b.twigs&&(!c.monster||1>=c.monster)&&c.inedible&&1>=c.inedible},requirements:[f("meat"),C("twigs"),Ca(q(f("monster")),f("monster",t("<=",1))),f("inedible"),f("inedible",t("<=",1))],priority:5,foodtype:"meat",health:3,hunger:37.5,perish:u,sanity:5,cooktime:2},mandrakesoup:{name:"Mandrake Soup",test:function(a,b){return b.mandrake},requirements:[C("mandrake")],priority:10,foodtype:"veggie",health:100,
hunger:150,perish:n,sanity:5,cooktime:3},baconeggs:{name:"Bacon and Eggs",test:function(a,b,c){return c.egg&&1<c.egg&&c.meat&&1<c.meat&&!c.veggie},requirements:[f("egg",t(">",1)),f("meat",t(">",1)),q(f("veggie"))],priority:10,foodtype:"meat",health:20,hunger:75,perish:F,sanity:5,cooktime:2},meatballs:{name:"Meatballs",test:function(a,b,c){return c.meat&&!c.inedible},requirements:[f("meat"),q(f("inedible"))],priority:-1,foodtype:"meat",health:3,hunger:62.5,perish:l,sanity:5,cooktime:0.75},bonestew:{name:"Meaty Stew",
test:function(a,b,c){return c.meat&&3<=c.meat&&!c.inedible},requirements:[f("meat",t(">=",3)),q(f("inedible"))],priority:0,foodtype:"meat",health:12,hunger:150,perish:l,sanity:5,cooktime:0.75},perogies:{name:"Pierogi",test:function(a,b,c){return c.egg&&c.meat&&c.veggie&&!c.inedible},requirements:[f("egg"),f("meat"),f("veggie"),q(f("inedible"))],priority:5,foodtype:"meat",health:40,hunger:37.5,perish:F,sanity:5,cooktime:1},turkeydinner:{name:"Turkey Dinner",test:function(a,b,c){return b.drumstick&&
1<b.drumstick&&c.meat&&1<c.meat&&(c.veggie||c.fruit)},requirements:[C("drumstick",t(">",1)),f("meat",t(">",1)),Ca(f("veggie"),f("fruit"))],priority:10,foodtype:"meat",health:20,hunger:75,perish:n,sanity:5,cooktime:3},ratatouille:{name:"Ratatouille",test:function(a,b,c){return!c.meat&&c.veggie&&!c.inedible},requirements:[q(f("meat")),f("veggie"),q(f("inedible"))],priority:0,foodtype:"veggie",health:3,hunger:25,perish:u,sanity:5,cooktime:1},jammypreserves:{name:"Fist Full of Jam",test:function(a,b,
c){return c.fruit&&!c.meat&&!c.veggie&&!c.inedible},requirements:[f("fruit"),q(f("meat")),q(f("veggie")),q(f("inedible"))],priority:0,foodtype:"veggie",health:3,hunger:37.5,perish:u,sanity:5,cooktime:0.5},fruitmedley:{name:"Fruit Medley",test:function(a,b,c){return c.fruit&&3<=c.fruit&&!c.meat&&!c.veggie},requirements:[f("fruit",t(">=",3)),q(f("meat")),q(f("veggie"))],priority:0,foodtype:"veggie",health:20,hunger:25,perish:n,sanity:5,cooktime:0.5},fishtacos:{name:"Fish Tacos",test:function(a,b,c){return c.fish&&
(b.corn||b.corn_cooked)},requirements:[f("fish"),B("corn")],priority:10,foodtype:"meat",health:20,hunger:37.5,perish:n,sanity:5,cooktime:0.5},waffles:{name:"Waffles",test:function(a,b,c){return b.butter&&(b.berries||b.berries_cooked)&&c.egg},requirements:[C("butter"),B("berries"),f("egg")],priority:10,foodtype:"veggie",health:60,hunger:37.5,perish:n,sanity:5,cooktime:0.5},monsterlasagna:{name:"Monster Lasagna",test:function(a,b,c){return c.monster&&2<=c.monster&&!c.inedible},requirements:[f("monster",
t(">=",2)),q(f("inedible"))],priority:10,foodtype:"meat",health:-20,hunger:37.5,perish:n,sanity:-20,cooktime:0.5},wetgoop:{name:"Wet Goop",test:function(){return!0},requirements:[],trash:!0,priority:-2,health:0,hunger:0,perish:n,sanity:0,cooktime:0.25}},O,k,Da,ib=/^tag[: ]/,jb=/^tag:? */,H,kb=/^recipe[: ]/,lb=/^recipe:? */,sa,mb=/^ingredient[: ]/,nb=/^ingredient:? */,Ea,Fa,Ga=!1,ob=function(a){a.match=!Ga&&a.uncookable?0:0===a.lowerName.indexOf(k)||a.raw&&0===a.raw.lowerName.indexOf(k)?3:0===Fa.test(a.lowerName)?
2:Ea.test(a.lowerName)?1:0;return a.match},pb=function(a){return a.match=a[Da]+0||0},qb=function(a){for(var b=0,c,e=!0;b<H.length;){c=H[b].test(null,a.nameObject,a);if(H[b].cancel){if(!c){e=!0;break}}else c&&(e=!1);b++}return a.match=e?0:1},rb=function(a){for(var b=0,c,e=!0;b<a.requirements.length;){c=a.requirements[b].test(null,sa.nameObject,sa);if(a.requirements[b].cancel){if(!c){e=!0;break}}else c&&(e=!1);b++}return a.match=e?0:1},sb=function(a){return a.match=a.lowerName===k?1:0},tb=function(a){return a.match=
a.lowerName===k||a.raw&&a.raw.lowerName===k||a.cook&&a.cook.lowerName===k?1:0},S=function(a,b){var c,e;return a.match===b.match?(c=a.raw?a.raw.name:a.name,e=b.raw?b.raw.name:b.name,c!==e?c>e?1:c<e?-1:0:a.name===b.name?0:a.raw===b?1:-1):b.match-a.match};O=function(a,b,c){Ga=!!c;k=b.toLowerCase();if(ib.test(k))return Da=k.split(jb)[1],a.filter(pb).sort(S);if(kb.test(k))return(H=g.byName(k.split(lb)[1].toLowerCase()))?(H=H.requirements,a.filter(qb).sort(S)):[];if(mb.test(k))return(sa=j.byName(k.split(nb)[1].toLowerCase()))?
a.filter(rb).sort(S):[];if(0===k.indexOf("*"))return k=k.substring(1),a.filter(sb).sort(S);if(0===k.indexOf("~"))return k=k.substring(1),a.filter(tb).sort(S);Fa=RegExp("\\b"+k+".*");Ea=RegExp("\\b"+k.split("").join(".*")+".*");return a.filter(ob).sort(S)};var ta=function(a,b,c){var e,d,f;for(e=0;e<a.length;e++)if(f=a[e],null!==f)for(d in b[f.id]=1+(b[f.id]||0),f)f.hasOwnProperty(d)&&"perish"!==d&&!isNaN(f[d])?c[d]=f[d]+(c[d]||0):"perish"===d&&(c[d]=Math.min(c[d]||F,f[d]))},ua,va,T;ua=function(a,b,
c,e){var d,f;a.length=0;va={};T={};ta(b,va,T);for(b=0;b<g.length;b++){f=!1;for(d=0;d<g[b].requirements.length;d++)if(g[b].requirements[d].test(null,va,T))g[b].requirements[d].cancel||(f=!0);else if(!e&&g[b].requirements[d].cancel){f=!1;break}else if(e&&!g[b].requirements[d].cancel){f=!1;break}f&&(!c||-1===c.indexOf(g[b]))&&a.push(g[b])}T.img="";T.name="Combined";return a};var Ha,W=[],wa,Q;Ha=function(a){W.length=0;wa={};Q={};ta(a,wa,Q);for(a=0;a<g.length;a++)g[a].test(null,wa,Q)&&W.push(g[a]);W.sort(function(a,
c){return c.priority-a.priority});Q.img="";Q.name="Combined";W.unshift(Q);return W};var R=document.createElement("canvas"),xa=R.getContext&&R.toDataURL&&R.getContext("2d"),X=document.createElement("canvas"),Ia=X.getContext&&X.getContext("2d"),K={},ya={},Ja=!!xa,ga=[],ub=function(a){return function(b){b=b.target;xa.clearRect(0,0,64,64);xa.drawImage(b,0,0,64,64);Ia.clearRect(0,0,32,32);Ia.drawImage(b,0,0,32,32);try{K[a]=R.toDataURL(),ya[a]=X.toDataURL()}catch(c){Ja=!1}ga.filter(function(b){return b.url===
a}).forEach(function(b){b.url===a&&(delete b.img.dataset.pending,ha&&b.img.removeAttribute("data-pending"),b.img.src=32===b.d?ya[a]||a:K[a]||a)});ga=ga.filter(function(b){return b.url!==a})}},Ka=function(a,b,c){a.dataset.pending=b;ha&&a.setAttribute("data-pending",b);ga.push({url:b,img:a,d:c})},U=function(a,b){var c=new Image,e;Ja?K[a]?c.src=32===b?ya[a]:K[a]:(null!==K[a]&&(K[a]=null,e=new Image,e.addEventListener("load",ub(a),!1),e.src=a),Ka(c,a,b)):c.src=a;return c};R.width=64;R.height=64;X.width=
32;X.height=32;U.queue=Ka;var ia,vb=/\[([^\|]*)\|([^\|\]]*)\|?([^\|\]]*)\]/,La=/([^\|]\]\[[^\|]+\|[^\|\]]+)\|?([^\|\](?:left)]*)(?=\])/g,wb=/(\[[^\|]+\|[^\|\]]+)\|?([^\|\]]*)(?=\]\[)(?!\]\[\|)/g,Ma=function(a,b,c){return b+"|"+(0===c.length?"left":c+" left")},xb=function(a,b,c){return b+"|"+(0===c.length?"right":c+" right")};ia=function(a){var b=a&&a.replace(La,Ma).replace(La,Ma).replace(wb,xb);a=b&&b.split(vb);var c,e;if(!a||1===a.length)return b;b=document.createDocumentFragment();b.appendChild(document.createTextNode(a[0]));
for(c=1;c<a.length;c+=4)""===a[c]&&""===a[c+1]?b.appendChild(document.createElement("br")):(e=document.createElement("span"),e.className=""===a[c+2]?"link":"link "+a[c+2],e.dataset.link=a[c],ha&&e.setAttribute("data-link",a[c]),a[c+1]&&0===a[c+1].indexOf("img/")?(e.appendChild(document.createTextNode(a[c+1].split(" ").slice(1).join(" "))),e.appendChild(U(a[c+1].split(" ")[0],32))):e.appendChild(document.createTextNode(a[c+1]?a[c+1]:a[c])),b.appendChild(e)),b.appendChild(document.createTextNode(a[c+
3]));return b};var h,ba=0,Na=document.getElementById("main"),yb=document.getElementById("food"),zb=document.getElementById("recipes"),Ab=document.getElementById("navbar"),ha=!1;document.documentElement.dataset||(ha=!0,Object.defineProperty(Element.prototype,"dataset",{get:function(){this.ds||(this.ds={},Array.prototype.forEach.call(this.attributes,function(a){0===a.name.indexOf("data-")&&(this.ds[a.name.substring(5)]=a.value)},this));return this.ds}}));document.getElementById("stalehealth").appendChild(document.createTextNode(Math.round(333)/
10+"%"));document.getElementById("stalehunger").appendChild(document.createTextNode(Math.round(667)/10+"%"));document.getElementById("spoiledhunger").appendChild(document.createTextNode(Math.round(500)/10+"%"));document.getElementById("spoiledsanity").appendChild(document.createTextNode(10));document.getElementById("perishground").appendChild(document.createTextNode(Math.round(1500)/10+"%"));document.getElementById("perishwinter").appendChild(document.createTextNode(Math.round(750)/10+"%"));document.getElementById("perishfridge").appendChild(document.createTextNode(Math.round(500)/
10+"%"));var p,w=function(a,b){return"[tag:"+a+"|"+(b||a)+"]"};for(h in j)if(j.hasOwnProperty(h)){var d=j[h];d.match=0;d.lowerName=d.name.toLowerCase();d.id=h;d.nameObject={};d.nameObject[h]=1;d.img="img/"+d.name.replace(/ /g,"_").toLowerCase()+".png";-1!==h.indexOf("_cooked")&&(d.cooked=!0);j[h+"_cooked"]&&(d.cook=j[h+"_cooked"],j[h+"_cooked"].raw=d);d.info=[];p=d.info;d.fruit&&p.push(w("fruit")+(1===d.fruit?"":"\u00d7"+d.fruit));d.veggie&&p.push(w("veggie","vegetable")+(1===d.veggie?"":"\u00d7"+
d.veggie));d.meat&&p.push(w("meat")+(1===d.meat?"":"\u00d7"+d.meat));d.egg&&p.push(w("egg")+(1===d.egg?"":"\u00d7"+d.egg));d.fish&&p.push(w("fish"));d.magic&&p.push(w("magic"));d.decoration&&p.push(w("decoration"));d.inedible&&p.push(w("inedible"));d.monster&&p.push(w("monster","monster food"));d.sweetener&&p.push(w("sweetener"));d.fat&&p.push(w("fat"));d.dairy&&p.push(w("dairy"));d.comment&&p.push(d.comment);j[ba++]=d}j.length=ba;ba=0;for(h in g)g.hasOwnProperty(h)&&(g[h].match=0,g[h].name=g[h].name||
h,g[h].id=h,g[h].lowerName=g[h].name.toLowerCase(),g[h].weight=g[h].weight||1,g[h].priority=g[h].priority||0,g[h].img="img/"+g[h].name.replace(/ /g,"_").toLowerCase()+".png",g[h].requirements&&(g[h].requires=ia(g[h].requirements.join("; "))),g[ba++]=g[h]);g.length=ba;g.forEach=Array.prototype.forEach;g.filter=Array.prototype.filter;g.sort=Array.prototype.sort;g.byName=function(a){for(var b=this.length;b--;)if(this[b].lowerName===a)return this[b]};var Bb=function(a,b){return a+"[recipe:"+b.name+"|"+
b.img+"]"};for(h in j)j.hasOwnProperty(h)&&(isNaN(h)&&isNaN(j[h]))&&(d=j[h],p=d.info,d.cooked&&p.push("from [*"+d.raw.name+"|"+d.raw.img+"]"),d.cook&&p.push("cook: [*"+d.cook.name+"|"+d.cook.img+"]"),d.dry&&(d.dry instanceof Object||(d.dry=j[d.dry]),p.push("dry in "+d.drytime/r+" "+(1===d.drytime/r?"day":"days")+": [*"+d.dry.name+"|"+d.dry.img+"]")),d.info=p.join("; "),d.uncookable?d.info+="[|]cannot be added to crock pot":(d.recipes=[],g.forEach(function(a){for(var b=!1,c=a.requirements,e=c.length;e--;)if(c[e].test(null,
d.nameObject,d))!c[e].cancel&&!b&&(b=!0);else if(c[e].cancel){b=!1;break}b&&d.recipes.push(a)}),0<d.recipes.length&&(d.ingredient=!0,d.info+=d.recipes.reduce(Bb,"[|][ingredient:"+d.name+"|Recipes] "))),d.info=ia(d.info));j.forEach=Array.prototype.forEach;j.filter=Array.prototype.filter;j.sort=Array.prototype.forEach;j.byName=function(a){for(var b=this.length;b--;)if(this[b].lowerName===a)return this[b]};var ja="id health hunger fruit veggie meat egg fish magic decoration inedible monster sweetener fat dairy".split(" ");
ea=N=void 0;j.filter(function(a){return!a.uncookable&&!a.skip&&(a.ideal||!a.cook&&(!a.raw||!a.raw.ideal))}).map(function(a){for(var b={},c=ja.length;c--;)a.hasOwnProperty(ja[c])&&(b[ja[c]]=a[ja[c]]);return b});N=g.filter(function(a){return!a.trash}).sort(function(a,b){return b.priority-a.priority});ea=N.map(function(a){return a.test});N.map(function(a){return a.test.toString()});N.map(function(a){return a.priority});var ka,Oa=Ab.getElementsByTagName("li"),ca={},da={},G,P,L,Cb=function(a){ka(a.target.dataset.tab)},
E;ka=function(a){L.className="";L=ca[a];P.style.display="none";P=da[a];L.className="selected";P.style.display="block"};for(h=0;h<Oa.length;h++)E=Oa[h],E.dataset.tab&&(ca[E.dataset.tab]=E,da[E.dataset.tab]=document.getElementById(E.dataset.tab),da[E.dataset.tab].style.display="none",E.addEventListener("selectstart",function(a){a.preventDefault()},!1),E.addEventListener("click",Cb,!1));L=ca.simulator;P=da.simulator;window.localStorage&&localStorage.foodGuideState&&("["===localStorage.foodGuideState[0]?
(G={},G.pickers=JSON.parse(localStorage.foodGuideState),localStorage.foodGuideState=JSON.stringify(G)):G=JSON.parse(localStorage.foodGuideState),G.activeTab&&ca[G.activeTab]&&(L=ca[G.activeTab],P=da[G.activeTab]));L.className="selected";P.style.display="block";window.addEventListener("beforeunload",function(){var a;window.localStorage&&(localStorage.foodGuideState||(localStorage.foodGuideState="{}"),a=JSON.parse(localStorage.foodGuideState),a.activeTab=L.dataset.tab,localStorage.foodGuideState=JSON.stringify(a))});
var Db=function(a){a.dataset.pending&&U.queue(a,a.dataset.pending,32)},za=function(a){var b,c,e,d=document.createElement("tr"),f;for(b=1;b<arguments.length;b++)c=document.createElement(a),f=(e=arguments[b])&&e.indexOf?e:e.toString(),e instanceof DocumentFragment?(c.appendChild(e.cloneNode(!0)),Array.prototype.forEach.call(c.getElementsByTagName("img"),Db)):0===f.indexOf("img/")?(e=U(f),c.appendChild(e)):c.appendChild(document.createTextNode(f)),d.appendChild(c);return d},Y=function(a,b,c,e,d,f,j,
g,h,n){var x,l,s,k=!1,p,q,m,r=function(a){var b;if((!n||m<n)&&(!g||g(a)))b=c(a),j&&j(a)&&(b.className="highlighted",p||(p=b),q=b),x.appendChild(b),m++},y=function(c,e,j){var g,h;if(e||c&&""!==c.target.dataset.sort||s){g=e||c&&c.target.dataset.sort||s;d&&(h=b.shift());"name"===g?b.sort(function(a,b){var c=a.raw?a.raw.name:a.name,e=b.raw?b.raw.name:b.name;return c!==e?c>e?1:c<e?-1:0:a.name===b.name?0:a.raw===b?1:-1}):b.sort(function(a,b){var c=a[g],e=b[g];return!isNaN(c)&&!isNaN(e)?e-c:isNaN(c)&&isNaN(e)?
0:isNaN(c)?1:-1});if(e||c)s===g?k=!k:(s=g,k=!1);k&&b.reverse();d&&b.unshift(h)}c=document.createElement("tr");for(l in a)e=document.createElement("th"),e.appendChild(document.createTextNode(l)),a[l]&&(a[l]===s&&(e.style.background=k?"#555":"#ccc",e.style.color=k?"#ccc":"#555",e.style.borderRadius="4px"),e.style.cursor="pointer",e.dataset.sort=a[l],e.addEventListener("click",y,!1)),c.appendChild(e);e=x;x=document.createElement("table");x.appendChild(c);q=p=null;m=0;b.forEach(r);f&&(x.className="links",
Array.prototype.forEach.call(x.getElementsByClassName("link"),function(a){a.addEventListener("click",f,!1)}));e&&e.parentNode.replaceChild(x,e);j&&(p&&p.offsetTop+x.offsetTop+Na.offsetTop+p.offsetHeight>window.scrollY+window.innerHeight?p.scrollIntoView(!0):q&&q.offsetTop+x.offsetTop+Na.offsetTop<window.scrollY&&q.scrollIntoView(!1))};e?y(null,e):y();x.update=function(a){y(null,null,a)};x.setMaxRows=function(a){n=a;this.update()};return x},z=function(a){return isNaN(a)?"":0<a?"+"+a:a},Pa=function(a,
b){return a<b?(b-a)/Math.abs(a):a>b?-(a-b)/Math.abs(a):0},Qa=function(a,b){return!isNaN(a)&&a!==b?" ("+z((100*(a<b?(b-a)/Math.abs(a):a>b?-(a-b)/Math.abs(a):0)).toFixed(0))+"%)":""},Ra=function(a){return za("td",a.img?a.img:"",a.name,z(a.health),z(a.hunger),isNaN(a.sanity)?"":z(a.sanity),isNaN(a.perish)?"Never":a.perish/r+" "+(1===a.perish/r?"day":"days"),a.info||"")},ma=function(a,b,c){return za("td",a.img?a.img:"",a.name,z(a.health)+Qa(b,a.health),z(a.hunger)+Qa(c,a.hunger),isNaN(a.sanity)?"":z(a.sanity),
isNaN(a.perish)?"Never":a.perish/r+" "+(1===a.perish/r?"day":"days"),(a.cooktime*Wa+0.5|0)+" secs",a.priority||"0",a.requires||"")},na,oa=[],Sa=[],Aa=Y({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish",Info:""},Array.prototype.slice.call(j),Ra,"name",!1,function(a){a=!a.target?a:"IMG"===a.target.tagName?a.target.parentNode.dataset.link:a.target.dataset.link;"recipe:"===a.substring(0,7)||"ingredient:"===a.substring(0,11)?(ka("crockpot"),"recipe:"===a.substring(0,7)&&
(a="*"+a.substring(7)),Sa=O(g,a),Ta.update(!0)):(na!==a?(na=a,oa=O(j,a)):(na="",oa.length=0),Aa.update(!0))},function(a){return-1!==oa.indexOf(a)}),Ta=Y({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish","Cook Time":"cooktime",Priority:"priority",Requires:""},Array.prototype.slice.call(g),ma,"name",!1,function(a){a=!a.target?a:"IMG"===a.target.tagName?a.target.parentNode.dataset.link:a.target.dataset.link;ka("foodlist");na=a;oa=O(j,a);Aa.update(!0)},function(a){return-1!==
Sa.indexOf(a)});yb.appendChild(Aa);zb.appendChild(Ta);var Eb=function(a,b){return a+"[ingredient:"+j[b.id].name+"|"+j[b.id].img+"]"},Ua=function(a){var b=document.createElement("button");b.appendChild(document.createTextNode("Calculate efficient recipes (may take some time)"));b.className="makablebutton";b.addEventListener("click",function(){var c=[],e=a?a.length:null,d,f,h=[],n,l,k,x,p=[],s=[],q,r,t,m=function(a){return-1!==s.indexOf(a.id)},u=function(a){return-1!==this.indexOf(j[a])},y=function(a){-1!==
s.indexOf(a.target.dataset.id)&&s.splice(s.indexOf(a.target.dataset.id),1);-1!==p.indexOf(a.target.dataset.id)?(p.splice(p.indexOf(a.target.dataset.id),1),a.target.className=""):(p.push(a.target.dataset.id),a.target.className="selected");t.update()},w=function(a){-1!==p.indexOf(a.target.dataset.id)&&p.splice(p.indexOf(a.target.dataset.id),1);-1!==s.indexOf(a.target.dataset.id)?(s.splice(s.indexOf(a.target.dataset.id),1),a.target.className=""):(s.push(a.target.dataset.id),a.target.className="excluded");
t.update();a.preventDefault()},E=function(a){f&&(f.className="");d===a.target.dataset.recipe?d=f=null:(d=a.target.dataset.recipe,f=a.target,a.target.className="selected");t.update()};null===e&&(e=j.length,a=j);for(;e--;)a[e].cook&&(-1===c.indexOf(a[e].cook)&&!a[e].cook.uncookable)&&c.push(a[e].cook),!a[e].uncookable&&((a[e].ideal||!a[e].cook||a[e].cook.uncookable)&&-1===c.indexOf(a[e]))&&c.push(a[e]);q=[];t=Y({"":"",Name:"name",Health:"health","Health+":"healthpls",Hunger:"hunger","Hunger+":"hungerpls",
Ingredients:""},q,function(a){var b=a.recipe;return za("td",b.img?b.img:"",b.name,z(b.health),z(a.healthpls)+" ("+z(100*a.healthpct|0)+"%)",z(b.hunger),z(a.hungerpls)+" ("+z(100*a.hungerpct|0)+"%)",ia(a.ingredients.reduce(Eb,"")))},"hungerpls",!1,null,null,function(a){return(!d||a.recipe.name===d)&&(!s.length||!a.ingredients.some(m))&&(!p.length||p.every(u,a.ingredients))},0,15);r=document.createElement("div");l=document.createElement("div");l.appendChild(document.createTextNode("Computing combinations.."));
r.appendChild(l);n=document.createElement("div");n.className="recipeFilter";r.appendChild(n);k=document.createElement("div");k.className="foodFilter";c.forEach(function(a){var b=U(a.img,32);b.dataset.id=a.id;b.addEventListener("click",y,!1);b.addEventListener("contextmenu",w,!1);b.title=a.name;k.appendChild(b)});r.appendChild(k);e=document.createElement("div");x=document.createElement("input");x.type="text";x.placeholder="use custom filter";x.className="customFilterInput";e.appendChild(x);r.appendChild(t);
b.parentNode.replaceChild(r,b);var O=function(){l.firstChild.textContent="Found "+q.length+" valid recipes.."},M=function(){t.setMaxRows(30);l.firstChild.textContent="Found "+q.length+" valid recipes. Showing top 30 for selected recipe using all selected ingredients. Right-click to exclude ingredients."},G=ea.length,J=[],la=0,B,C=60,L=function(a){return c[a]},F,$=c.length,I=[0,0,0,0],V,D=0,v=0;F=function(a){for(var b;a--&&1<$;){b=I.map(L);var c=void 0,e=null,d={},f={};ta(b,d,f);for(c=0;c<G&&(null===
e||N[c].priority>=e);c++)ea[c](null,d,f)&&(J.push({recipe:N[c],ingredients:b,tags:{health:f.health,hunger:f.hunger}}),e=N[c].priority);I[0]++;for(b=0;I[b]>=$;)b++,I[b]++;V=4;for(D=0;V--;)I[V]>=$?I[V]=D:I[V]>D&&(D=I[V]);if(4===b)return!1;v++}return!0};var H=function(){var a=!1,b=Date.now();for(F(C)?setTimeout(H,0):a=!0;la<J.length&&J[la];la++){var c=J[la],e=void 0,d=void 0;if(-1===h.indexOf(c.recipe.name)){for(e=0;e<h.length&&!(c.recipe.name<h[e]);e++);h.splice(e,0,c.recipe.name);d=U(g.byName(h[e].toLowerCase()).img);
d.dataset.recipe=h[e];d.addEventListener("click",E,!1);d.title=c.recipe.name;e<n.childNodes.length?n.insertBefore(d,n.childNodes[e]):n.appendChild(d)}c.name||(c.name=c.recipe.name,c.health=c.recipe.health,c.ihealth=c.tags.health,c.healthpls=c.recipe.health-c.tags.health,c.hunger=c.recipe.hunger,c.ihunger=c.tags.hunger,c.hungerpls=c.recipe.hunger-c.tags.hunger,c.healthpct=Pa(c.tags.health,c.recipe.health),c.hungerpct=Pa(c.tags.hunger,c.recipe.hunger),c.sanity=c.recipe.sanity,c.perish=c.recipe.perish);
q.push(c)}B!==Date.now()-b&&(B=Date.now()-b+1,C=38/B*C+1|0);O&&O();a&&M&&M()};H()},!1);return b};document.getElementById("statistics").appendChild(Ua());window.food=j;window.recipes=g;window.matchingNames=O;for(var aa=function(a,b){var c=!1;null!==b?a.dataset.id=b.id:a.nextSibling&&null!==J(a.nextSibling)?(aa(a,J(a.nextSibling)),aa(a.nextSibling,null),c=!0):a.dataset.id=null;c||(null!==b?a.firstChild?a.replaceChild(U(b.img),a.firstChild):a.appendChild(U(b.img)):a.firstChild&&a.removeChild(a.firstChild),
a.title=b?b.name:"")},J=function(a){return j[a.dataset.id]||g[a.dataset.id]||null},Va=document.getElementsByClassName("ingredientpicker"),Ba=Va.length;Ba--;)(function(){var a=document.createElement("span"),b,c=document.createElement("div"),e=document.createElement("ul"),d=Va[Ba],f=Ba,h,n="recipes"===d.dataset.type?g:j,p=!d.dataset.cookable,l=d.nextSibling,k=l.getElementsByClassName("ingredient"),q,s=[],r,t=[],u=[],m=null,w=!1,y=document.getElementById("results"),z=document.getElementById("discoverfood"),
B=document.getElementById("discover"),C=document.getElementById("makable"),M=document.createElement("span"),E=function(a,b){for(var c=a;c.previousSibling;)if(c=c.previousSibling,b(c))return c;return null},G=function(a,c){for(var b=a;b.nextSibling;)if(b=b.nextSibling,c(b))return b;return null},F=!1,H=function(a){var b=j[a]||g[a]||null;if(q){for(a=0;a<k.length;a++)if(null===J(k[a]))return aa(k[a],b),w&&r(),a;return-1}-1===k.indexOf(a)&&(k.push(a),a=document.createElement("span"),a.className="ingredient",
aa(a,b),a.addEventListener("click",$,!1),l.appendChild(a),w&&r());return 1},L=function(a){-1!==H(("IMG"===a.target.tagName?a.target.parentNode:a.target).dataset.id)&&a&&a.preventDefault&&a.preventDefault()},N=function(a){var b=U(a.img,32),c=document.createElement("span");c.appendChild(b);c.appendChild(document.createTextNode(a.name));c.dataset.id=a.id;-1!==s.indexOf(a)&&(c.style.opacity=0.5);c.addEventListener("mousedown",L,!1);this.appendChild(c);this.dataset.length++},S=function(a){-1!==s.indexOf(j[a.dataset.id])?
a.style.opacity||(a.style.opacity=0.5):a.style.opacity&&a.style.removeProperty("opacity")},$=function(a){var b="IMG"===a.target.tagName?a.target.parentNode:a.target;if(q){if(null!==J(b))return aa(b,null),r(),b.dataset.id}else return a=k.indexOf(b.dataset.id),k.splice(a,1),l.removeChild(b),r(),k[a]||null},I=function(){var a;b.splitTag();a=O(n,b.getSearch(),p);c.removeChild(e);e=document.createElement("div");e.dataset.length=0;a.forEach(N,e);c.appendChild(e);m=null},V=function(a){a="IMG"===a.target.tagName?
a.target.parentNode.dataset.link:a.target.dataset.link;var b=O(n,a,p);1===b.length?H(b[0].id):(d.value=a,I())},D;"ingredients"===l.id?r=function(){var a,b,c,d;s=Array.prototype.map.call(k,function(a){return J(a)});a=Ha(s);b=a[0].health;c=a[0].hunger;d=Y({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish","Cook Time":"cooktime",Priority:"priority",Requires:""},a,function(a){return ma(a,b,c)},"priority",!0,V);y.firstChild&&y.removeChild(y.firstChild);y.firstChild&&(y.removeChild(y.firstChild),
y.removeChild(y.firstChild));y.appendChild(d);null!==s[0]&&(ua(t,s,a),0<t.length&&(y.appendChild(document.createTextNode("Add more ingredients to make:")),d=Y({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish","Cook Time":"cooktime",Priority:"priority",Requires:""},t,function(a){return ma(a,b,c)},"priority",!1,V),y.appendChild(d)));e&&e.firstChild&&Array.prototype.forEach.call(e.getElementsByTagName("span"),S)}:"inventory"===l.id&&(r=function(){var a;s=Array.prototype.map.call(l.getElementsByClassName("ingredient"),
function(a){return J(a)});z.firstChild&&z.removeChild(z.firstChild);B.firstChild&&B.removeChild(B.firstChild);C.firstChild&&C.removeChild(C.firstChild);0<s.length&&(a=Y({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish",Info:""},s,Ra,"name"),z.appendChild(a),ua(u,s,null,!0),0<u.length&&(a=Y({"":"",Name:"name",Health:"health",Hunger:"hunger",Sanity:"sanity",Perish:"perish","Cook Time":"cooktime",Priority:"priority",Requires:""},u,ma,"name"),B.appendChild(a),C.appendChild(Ua(s))));
e&&e.firstChild&&Array.prototype.forEach.call(e.getElementsByTagName("span"),S)});0!==k.length?(q=!0,Array.prototype.forEach.call(k,function(a){aa(a,null);a.addEventListener("click",$,!1)})):(k=[],q=!1);window.localStorage&&localStorage.foodGuideState&&(h=JSON.parse(localStorage.foodGuideState).pickers)&&h[f]&&h[f].forEach(function(a){j[a]&&H(a)});w=!0;a.className="searchselector retracted";a.appendChild(document.createTextNode("name"));var v=document.createElement("div"),Q=!1,R=null,Z=[{title:"name",
prefix:"",placeholder:"Filter ingredients"},{title:"tag",prefix:"tag:",placeholder:"Meat, veggie, fruit, egg, monster..."},{title:"recipe",prefix:"recipe:",placeholder:"Find ingredients used in a recipe"}],K=Z[0],A=null,P=function(){Q=!1;v.style.height="0px";a.style.borderBottomLeftRadius="3px";v.style.borderTopLeftRadius="3px";null!==A&&(clearTimeout(A),A=null);a.className="searchselector retracted"},T=function(b){K=b;d.placeholder=K.placeholder;a.firstChild.textContent=K.title},W=function(a){T(Z[a.target.dataset.typeIndex]);
I();P()},X=/: */;a.addEventListener("click",function(){Q?P():(null===R&&(v.style.height="auto",v.style.left=a.offsetLeft,v.style.top=a.offsetTop+a.offsetHeight,R=v.offsetHeight+"px",v.style.height="0px"),Q=!0,v.style.height=R,a.style.borderBottomLeftRadius="0px",v.style.borderTopLeftRadius="0px",v.style.width="auto",v.style.width=Math.max(v.offsetWidth,a.offsetWidth+1)+"px",null!==A&&(clearTimeout(A),A=null),a.className="searchselector extended")},!1);a.addEventListener("selectstart",function(a){a.preventDefault()},
!1);a.addEventListener("mouseout",function(){null!==A&&clearTimeout(A);A=setTimeout(P,500)},!1);a.addEventListener("mouseover",function(){null!==A&&(clearTimeout(A),A=null)},!1);v.addEventListener("mouseout",function(){null!==A&&clearTimeout(A);A=setTimeout(P,500)},!1);v.addEventListener("mouseover",function(){null!==A&&(clearTimeout(A),A=null)},!1);Z.forEach(function(a,b){var c=document.createElement("div");c.appendChild(document.createTextNode(a.title));c.dataset.typeIndex=b;c.addEventListener("click",
W,!1);a.element=c;v.appendChild(c)});d.parentNode.insertBefore(a,d);v.className="searchdropdown";d.parentNode.insertBefore(v,d);b={getTag:function(){return K.title},setSearchType:function(a){T(Z[a])},getSearch:function(){return K.prefix+d.value},splitTag:function(){var a;a=d.value.split(X);var b,c;if(2===a.length){b=a[0].toLowerCase()+":";c=a[1];for(a=0;a<Z.length;a++)if(b===Z[a].prefix){T(Z[a]);d.value=c;break}}}};c.className="ingredientdropdown";c.appendChild(e);c.addEventListener("mousedown",function(a){a.preventDefault()},
!1);h=O(n,b.getSearch(),p);c.removeChild(e);e=document.createElement("div");e.dataset.length=0;h.forEach(N,e);c.appendChild(e);M.className="clearingredients";M.appendChild(document.createTextNode("clear"));M.addEventListener("click",function(){if(""===d.value&&"name"===b.getTag())for(;J(l.firstChild);)$({target:l.firstChild});else d.value="",b.setSearchType(0),I()},!1);M.addEventListener("mouseover",function(){""===d.value&&"name"===b.getTag()&&(M.firstChild.textContent="clear chosen ingredients")},
!1);M.addEventListener("mouseout",function(){"clear"!==M.firstChild.textContent&&(M.firstChild.textContent="clear")},!1);l.parentNode.insertBefore(M,l);l.parentNode.insertBefore(c,l);d.addEventListener("keydown",function(a){var b;-1!==[16,17,37,38,39,40,13].indexOf(a.keyCode)&&(b=m,13===a.keyCode?(null===m&&(m=e.firstChild||null),null!==m&&L({target:m})):null===m?40===a.keyCode&&(m=e.childNodes[1]||e.firstChild||null,null!==m&&(D=m.offsetLeft+m.offsetWidth/2,a.preventDefault())):(a.preventDefault(),
37===a.keyCode?(m=m.previousSibling&&m.previousSibling.offsetTop===m.offsetTop?m.previousSibling:(a=G(m,function(a){return a.offsetTop!==m.offsetTop}))?a.previousSibling:e.lastChild,null!==m&&(D=m.offsetLeft+m.offsetWidth/2)):39===a.keyCode?(m=m.nextSibling&&m.nextSibling.offsetTop===m.offsetTop?m.nextSibling:(a=E(m,function(a){return a.offsetTop!==m.offsetTop}))?a.nextSibling:e.firstChild,null!==m&&(D=m.offsetLeft+m.offsetWidth/2)):38===a.keyCode?((a=E(m,function(a){return D>=a.offsetLeft-1&&D<=
a.offsetLeft+a.offsetWidth+1}))||(a=E(e.lastChild,function(a){return D>=a.offsetLeft-1&&D<=a.offsetLeft+a.offsetWidth+1})),m=a?a:e.firstChild):40===a.keyCode&&((a=G(m,function(a){return D>=a.offsetLeft-1&&D<=a.offsetLeft+a.offsetWidth+1}))||(a=G(e.firstChild,function(a){return D>=a.offsetLeft-1&&D<=a.offsetLeft+a.offsetWidth+1})),m=a?a:e.lastChild)),m!==b&&(null!==b&&(b.className=""),null!==m&&(m.className="selected")))},!1);d.addEventListener("keyup",function(a){-1===[16,17,37,38,39,40,13].indexOf(a.keyCode)?
I():null!==m&&a.preventDefault()},!1);d.addEventListener("focus",function(){F||(F=!0)},!1);d.addEventListener("blur",function(){F&&(F=!1)},!1);r();window.addEventListener("beforeunload",function(){var a,b;window.localStorage&&(localStorage.foodGuideState||(localStorage.foodGuideState="{}"),a=JSON.parse(localStorage.foodGuideState),a.pickers||(a.pickers=[]),q?(b=[],b=Array.prototype.map.call(k,function(a){return(a=J(a))?a.id:null}),a.pickers[f]=b):a.pickers[f]=k,localStorage.foodGuideState=JSON.stringify(a))})})()})();