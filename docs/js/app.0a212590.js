(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],p=0,b=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/pokeapp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"4d99":function(e,t,n){"use strict";n("70fc")},6425:function(e,t,n){"use strict";n("ddb0")},"70fb":function(e,t,n){},"70fc":function(e,t,n){},abe0:function(e,t,n){},b284:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={key:0,class:"full_screen_loader"},c=Object(r["g"])("p",null,"Loading",-1);function a(e,t,n,a,i,u){var s=Object(r["q"])("Pokemon-List"),l=Object(r["q"])("Pokemon-Modal");return e.loadingList?(Object(r["j"])(),Object(r["d"])("div",o,[c])):(Object(r["j"])(),Object(r["d"])(r["a"],{key:1},[Object(r["g"])(s),e.toggleModal?(Object(r["j"])(),Object(r["d"])(l,{key:0})):Object(r["e"])("",!0)],64))}var i=n("5502"),u=(n("b0c0"),Object(r["w"])("data-v-405bee90"));Object(r["l"])("data-v-405bee90");var s={class:"card-list"},l={key:0};Object(r["k"])();var p=u((function(e,t,n,o,c,a){var i=Object(r["q"])("Pokemon-Filter"),u=Object(r["q"])("Pokemon-List-Item");return Object(r["j"])(),Object(r["d"])(r["a"],null,[Object(r["g"])(i),Object(r["g"])("div",s,[(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.pokemonStore,(function(e){return Object(r["j"])(),Object(r["d"])(u,{key:e.id,sprite:e.sprite,name:e.name,type1:e.type1,type2:e.type2,id:e.id},null,8,["sprite","name","type1","type2","id"])})),128)),0===e.pokemonStore.length?(Object(r["j"])(),Object(r["d"])("p",l,"NOTHING TO SHOW")):Object(r["e"])("",!0)])],64)})),b=Object(r["w"])("data-v-416a8a10");Object(r["l"])("data-v-416a8a10");var j={class:"card-id"},d={key:0};Object(r["k"])();var f=b((function(e,t,n,o,c,a){return Object(r["j"])(),Object(r["d"])("div",{class:"card-item",onClick:t[1]||(t[1]=function(){return e.switchToggleTrue.apply(e,arguments)})},[Object(r["g"])("span",j,"# "+Object(r["r"])(e.id),1),Object(r["g"])("img",{src:e.sprite,alt:""},null,8,["src"]),Object(r["g"])("span",null,Object(r["r"])(e.nameToUpperCase),1),Object(r["g"])("p",null,[Object(r["f"])(Object(r["r"])(e.type1),1),e.type2?(Object(r["j"])(),Object(r["d"])("span",d,", "+Object(r["r"])(e.type2),1)):Object(r["e"])("",!0)])])})),O=(n("a9e3"),Object(r["h"])({name:"PokemonListItem",props:{name:String,sprite:String,type1:String,type2:String,id:Number},setup:function(e){var t=Object(i["b"])(),n=Object(r["b"])((function(){return t.state.modalActive})),o=Object(r["b"])((function(){return e.name?e.name.toUpperCase():""})),c=function(){!1===n.value&&(t.dispatch("fetchSinglePokemon",e.name),t.commit("switchModalTrue"))};return{toggleStore:n,switchToggleTrue:c,nameToUpperCase:o}}}));n("4d99");O.render=f,O.__scopeId="data-v-416a8a10";var m=O,v=Object(r["w"])("data-v-5fc5a4c1");Object(r["l"])("data-v-5fc5a4c1");var g={class:"pokmeon-filter"},k=Object(r["g"])("label",{for:"type1"},"Type 1: ",-1),h=Object(r["g"])("option",{value:""},"Any",-1),y=Object(r["g"])("label",{for:"type2"},"Type 2: ",-1),P=Object(r["g"])("option",{value:""},"Any",-1),w=Object(r["g"])("label",{for:"generation"},"Generation: ",-1),L=Object(r["g"])("option",{value:-1},"Any",-1);Object(r["k"])();var x=v((function(e,t,n,o,c,a){return Object(r["j"])(),Object(r["d"])("div",g,[Object(r["v"])(Object(r["g"])("input",{type:"text",name:"name","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.pokemonName=t}),placeholder:"Search by Name -",id:""},null,512),[[r["t"],e.pokemonName]]),Object(r["g"])("div",null,[k,Object(r["v"])(Object(r["g"])("select",{name:"type1","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.pokemonType1=t}),id:""},[h,(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.types,(function(e,t){return Object(r["j"])(),Object(r["d"])("option",{key:t,value:e},Object(r["r"])(e),9,["value"])})),128))],512),[[r["s"],e.pokemonType1]])]),Object(r["g"])("div",null,[y,Object(r["v"])(Object(r["g"])("select",{name:"type2","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.pokemonType2=t}),id:""},[P,(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.types,(function(e,t){return Object(r["j"])(),Object(r["d"])("option",{key:t,value:e},Object(r["r"])(e),9,["value"])})),128))],512),[[r["s"],e.pokemonType2]])]),Object(r["g"])("div",null,[w,Object(r["v"])(Object(r["g"])("select",{name:"generation","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.pokemonGeneration=t}),id:""},[L,(Object(r["j"])(!0),Object(r["d"])(r["a"],null,Object(r["o"])(e.generations,(function(e,t){return Object(r["j"])(),Object(r["d"])("option",{key:t,value:t+1},Object(r["r"])(e),9,["value"])})),128))],512),[[r["s"],e.pokemonGeneration,void 0,{number:!0}]])]),Object(r["g"])("button",{onClick:t[5]||(t[5]=function(){return e.clearFilter.apply(e,arguments)})},"CLEAR")])})),S=Object(r["h"])({name:"PokemonList",setup:function(){var e=Object(i["b"])(),t=e.state,n=["Gen 1","Gen 2"],o=Object(r["n"])(""),c=Object(r["n"])(""),a=Object(r["n"])(""),u=Object(r["n"])(-1),s=Object(r["b"])((function(){return t.pokemonTypes})),l=function(){e.dispatch("filterPokemons",{name:o.value,type1:c.value,type2:a.value,generation:u.value})},p=function(){o.value="",c.value="",a.value="",u.value=-1};return Object(r["u"])(o,l),Object(r["u"])(c,l),Object(r["u"])(a,l),Object(r["u"])(u,l),{pokemonName:o,pokemonType1:c,pokemonType2:a,types:s,clearFilter:p,pokemonGeneration:u,generations:n}}});n("ebdf");S.render=x,S.__scopeId="data-v-5fc5a4c1";var _=S,T=Object(r["h"])({name:"PokemonList",components:{PokemonListItem:m,PokemonFilter:_},setup:function(){var e=Object(i["b"])(),t=e.state,n=Object(r["b"])((function(){return t.pokeListFiltered.sort((function(e,t){return e.id-t.id}))}));return{pokemonStore:n}}});n("d766");T.render=p,T.__scopeId="data-v-405bee90";var F=T,R=Object(r["w"])("data-v-46fccfe0");Object(r["l"])("data-v-46fccfe0");var M={key:0},C={key:1,class:"pokemon_modal"},A={class:"main_info"},I={class:"types"},G={key:0},N={class:"extra_info"},E={key:2};Object(r["k"])();var U=R((function(e,t,n,o,c,a){var i=Object(r["q"])("Modal");return Object(r["j"])(),Object(r["d"])(i,null,{default:R((function(){return[e.fetchingPokemon?(Object(r["j"])(),Object(r["d"])("p",M,"Loading")):e.activePokemon?(Object(r["j"])(),Object(r["d"])("div",C,[Object(r["g"])("div",A,[Object(r["g"])("img",{src:e.activePokemon.sprite,alt:""},null,8,["src"]),Object(r["g"])("div",null,[Object(r["g"])("span",null,Object(r["r"])(e.activePokemon.name),1),Object(r["g"])("span",null,"Base expreience: "+Object(r["r"])(e.activePokemon.baseExperience),1)])]),Object(r["g"])("div",I,[Object(r["g"])("p",null,Object(r["r"])(e.activePokemon.type1),1),e.activePokemon.type2?(Object(r["j"])(),Object(r["d"])("p",G,Object(r["r"])(e.activePokemon.type2),1)):Object(r["e"])("",!0)]),Object(r["g"])("div",N,[Object(r["g"])("p",null,"Order: "+Object(r["r"])(e.activePokemon.order),1),Object(r["g"])("p",null,"Height: "+Object(r["r"])(e.activePokemon.height),1),Object(r["g"])("p",null,"Weight: "+Object(r["r"])(e.activePokemon.weight),1)])])):(Object(r["j"])(),Object(r["d"])("p",E,"No pokemon selected"))]})),_:1})})),q=Object(r["w"])("data-v-05810fa9");Object(r["l"])("data-v-05810fa9");var V={class:["modal"]},H=Object(r["f"])("Loading slot");Object(r["k"])();var J=q((function(e,t,n,o,c,a){return Object(r["j"])(),Object(r["d"])("div",V,[Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return e.toggleFalse.apply(e,arguments)})},"x"),Object(r["p"])(e.$slots,"default",{},(function(){return[H]}))])})),W=Object(r["h"])({name:"Modal",props:{},setup:function(){var e=Object(i["b"])(),t=function(){e.commit("switchModalFalse")};return{toggleFalse:t}}});n("e826");W.render=J,W.__scopeId="data-v-05810fa9";var B=W,$=Object(r["h"])({name:"PokemonModal",props:{},components:{Modal:B},setup:function(){var e=Object(i["b"])(),t=e.state,n=Object(r["b"])((function(){return t.fetchingSinglePokemon})),o=Object(r["b"])((function(){return t.selectedPokemon}));return{activePokemon:o,fetchingPokemon:n}}});n("f859");$.render=U,$.__scopeId="data-v-46fccfe0";var z=$,D=Object(r["h"])({name:"App",components:{PokemonList:F,PokemonModal:z},setup:function(){var e=Object(i["b"])(),t=Object(r["b"])((function(){return e.state.modalActive})),n=Object(r["b"])((function(){return e.state.fetchingPokemonList}));return e.dispatch("createPokemonList"),{toggleModal:t,loadingList:n}}});n("6425");D.render=a;var K=D,Q=(n("4de4"),n("7db0"),n("4160"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("841c"),n("159b"),n("96cf"),n("1da1")),X=function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n).then((function(e){return e.ok?e:404===e.status?Promise.reject("error 404"):void 0}));case 2:if(r=e.sent,!r){e.next=9;break}return e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return","fail");case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X("https://pokeapi.co/api/v2/".concat(t),n);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e["catch"](0),e.abrupt("return",Promise.reject(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y("generation/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.pokemon_species);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(Q["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y("pokemon/".concat(t));case 3:return r=e.sent,e.abrupt("return",{id:r.id,name:r.name,baseExperience:r.base_experience,type1:r.types[0].type.name,order:r.order,height:r.height,weight:r.weight,type2:r.types[1]?r.types[1].type.name:void 0,generation:n,sprite:r.sprites.front_default});case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",Promise.reject(e.t0).then((function(e){return console.log("entra"),e}),(function(e){return console.log("fail"),null})));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),te={pokeList:[],modalActive:!1,selectedPokemon:null,fetchingSinglePokemon:!1,fetchingPokemonList:!1,pokeListFiltered:[],filterOptions:{},pokemonTypes:["bug","dark","dragon","electric","fairy","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"]},ne=Object(i["a"])({state:te,mutations:{addPokemon:function(e,t){e.pokeList.push(t),e.pokeListFiltered.push(t)},switchModalTrue:function(e){e.modalActive=!0},switchModalFalse:function(e){e.modalActive=!1},setSelectedPokemon:function(e,t){e.selectedPokemon=t},setFetchingSinglePokemon:function(e,t){e.fetchingSinglePokemon=t},setFetchingPokemonList:function(e,t){e.fetchingPokemonList=t},setFilterOptions:function(e,t){e.filterOptions=t},setFilteredPokemonList:function(e,t){e.pokeListFiltered=t}},actions:{fetchSinglePokemon:function(e,t){return Object(Q["a"])(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.state,o=e.commit,n.prev=1,o("setFetchingSinglePokemon",!0),c=r.pokeList.find((function(e){return e.name===t})),o("setSelectedPokemon",c),o("setFetchingSinglePokemon",!1),n.abrupt("return",c);case 9:return n.prev=9,n.t0=n["catch"](1),n.abrupt("return",Promise.reject(n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},createPokemonList:function(e){return Object(Q["a"])(regeneratorRuntime.mark((function t(){var n,o,c,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,o=function(e,t,r){console.log("Gen: ",t," Counter value: ",r.value),e.forEach(function(){var o=Object(Q["a"])(regeneratorRuntime.mark((function o(c){var a,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,ee(c.name,t);case 2:a=o.sent,a&&(i=new Image,i.src=a.sprite,i.onload=function(){n("addPokemon",a),r.value++,r.value===Math.ceil(e.length/10)&&n("setFetchingPokemonList",!1)});case 4:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}())},n("setFetchingPokemonList",!0),t.prev=3,t.next=6,Z(1);case 6:return c=t.sent,a=Object(r["n"])(0),o(c,1,a),console.log("contador despues de 1 gen vale: ",a.value),t.next=12,Z(2);case 12:return c=t.sent,o(c,2,a),t.abrupt("return");case 17:return t.prev=17,t.t0=t["catch"](3),t.abrupt("return",Promise.reject(t.t0));case 20:case"end":return t.stop()}}),t,null,[[3,17]])})))()},filterPokemons:function(e,t){var n=e.commit,r=function(e,t){return e&&-1!==e.toLowerCase().search(t)};n("setFilteredPokemonList",te.pokeList.filter((function(e,n,o){var c,a,i,u=RegExp("^".concat(null===(c=t.name)||void 0===c?void 0:c.toLowerCase())),s=RegExp("^".concat(null===(a=t.type1)||void 0===a?void 0:a.toLowerCase())),l=RegExp("^".concat(null===(i=t.type2)||void 0===i?void 0:i.toLowerCase())),p=-1!==e.name.toLowerCase().search(u),b=e.generation===t.generation||-1==t.generation;return p&&(r(e.type1,s)||r(e.type2,s))&&(r(e.type1,l)||r(e.type2,l))&&b})))}},modules:{}});Object(r["c"])(K).use(ne).mount("#app")},d766:function(e,t,n){"use strict";n("f751")},ddb0:function(e,t,n){},e826:function(e,t,n){"use strict";n("b284")},ebdf:function(e,t,n){"use strict";n("abe0")},f751:function(e,t,n){},f859:function(e,t,n){"use strict";n("70fb")}});
//# sourceMappingURL=app.0a212590.js.map