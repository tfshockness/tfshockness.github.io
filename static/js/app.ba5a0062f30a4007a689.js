webpackJsonp([0],[,,function(t,e,s){"use strict";s.d(e,"a",function(){return o});var o={i:0,getI:function(){return o.i},incrementI:function(){o.i++},decrementI:function(){o.i--},questions:[{isMultiple:!1,isCorrect:!1,answer:"b",picked:"",question:"Vancouver is also called as?",explanation:"Vancouver is also called “Hollywood of the North”. In North America the city comes second after Los Angeles in TV production and third in feature film production (after Los Angeles and New York). Most productions made in Vancouver are American, whereas most Toronto based productions are Canadian.",setCorrect:function(){this.isCorrect=!0},options:[{option:"a",text:"Sunnycouver"},{option:"b",text:"Hollywood of the North"},{option:"c",text:"The big E"},{option:"d",text:"C-Town"}]},{isMultiple:!1,isCorrect:!1,answer:"a",picked:"",question:"How long is Kitsilano Pool in meters?",explanation:"Vancouver is home to Canada’s longest pool. Kits Pool is the city’s only saltwater pool and is located in the Kitsilano neighbourhood. The lanes stretch 137 meters, which is almost 3 times as long as an Olympic pool.",options:[{option:"a",text:"137m"},{option:"b",text:"1600m"},{option:"c",text:"10m"},{option:"d",text:"240m"}]},{isMultiple:!1,isCorrect:!1,answer:"d",picked:"",question:"What is the average of rain that drops in Vancouver per year?",explanation:"Vancouver has the mildest climate in Canada. Although, it receives on average, 1,589mm of rain per year.",options:[{option:"a",text:"2,389mm"},{option:"b",text:"400Kg"},{option:"c",text:"It is just too much!"},{option:"d",text:"1,589mm"}]},{isMultiple:!1,isCorrect:!1,answer:"c",picked:"",question:"Which month in 2017 it rained 28 days?",explanation:'It was the "gloomiest" March in Vancouver since record-keeping began in 1951, with only 70.5 total hours of sunshine in the entire month, according to Environment Canada. It also rained 28 out of the 31 days, tying the previous record for most days with rain.',options:[{option:"a",text:"January"},{option:"b",text:"February"},{option:"c",text:"March"},{option:"d",text:"April"}]},{isMultiple:!1,isCorrect:!1,answer:"b",picked:"",question:"Which group was established in Vancouver?",explanation:"Greenpeace, one of the world’s oldest and most successful environmental groups was established in Vancouver.",options:[{option:"a",text:"Friends of the Rain"},{option:"b",text:"Greenpeace"},{option:"c",text:"Word Wide Fund for Nature"},{option:"d",text:"Anonymous"}]}]}},function(t,e,s){function o(t){s(30)}var n=s(0)(s(7),s(54),o,null,null);t.exports=n.exports},function(t,e,s){"use strict";s.d(e,"a",function(){return n});var o=s(1),n=new o.a},function(t,e,s){"use strict";var o=s(1),n=s(55),i=s(32),a=s.n(i),r=s(41),c=s.n(r),l=s(37),u=s.n(l),d=s(3),p=s.n(d);o.a.use(n.a),e.a=new n.a({routes:[{path:"/",component:p.a},{path:"/quiz",component:a.a},{path:"/todo",component:c.a},{path:"/quotes",component:u.a}]})},function(t,e,s){function o(t){s(25)}var n=s(0)(s(8),s(47),o,"data-v-30bae2bc",null);t.exports=n.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(31),n=s.n(o);e.default={components:{"app-title":n.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(35),n=s.n(o),i=s(36),a=s.n(i);e.default={data:function(){return{selectedComponent:"app-quiz"}},components:{"app-quiz":n.a,"app-result":a.a},methods:{changeComponent:function(){"app-quiz"===this.selectedComponent?this.selectedComponent="app-result":this.selectedComponent="app-quiz"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(2);e.default={data:function(){return{store:o.a,total:o.a.questions.length}},computed:{value:function(){return this.store.getI()+1}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(2);e.default={data:function(){return{store:o.a}},methods:{goNext:function(){this.store.questions[o.a.getI()].picked===this.store.questions[o.a.getI()].answer&&(this.store.questions[o.a.getI()].isCorrect=!0),this.store.questions.length>o.a.getI()+1?(this.store.incrementI(),this.checkLenght()):this.finishQuiz()},goPrevious:function(){o.a.getI()>0&&(this.store.decrementI(),this.checkLenght())},finishQuiz:function(){this.$emit("callend")},checkLenght:function(){o.a.getI()+1===this.store.questions.length?this.$refs.btnNext.innerText="Finish":this.$refs.btnNext.innerText="Next"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(33),n=s.n(o),i=s(34),a=s.n(i);e.default={components:{"app-bar":n.a,"app-question":a.a},methods:{calling:function(){this.$emit("finish")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(2);e.default={data:function(){return{store:o.a,show:!1}},computed:{percentage:function(){var t=0;self=this;for(var e=0;e<=self.store.questions.length-1;e++)self.store.questions[e].isCorrect&&t++;return 100*t/o.a.questions.length}},methods:{reset:function(){console.log("reset running"),this.store.i=0,this.$emit("finish")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(4),n=s(38),i=s.n(n),a=s(39),r=s.n(a),c=s(40),l=s.n(c);e.default={data:function(){return{quotes:["Write a beautiful quote!"],maxQuotes:10}},methods:{addQuotes:function(t){this.quotes.length>=10?alert("Quote list is full. Delete a quote."):this.quotes.push(t)},deleteQuote:function(t){this.quotes.splice(t,1)}},created:function(){var t=this;o.a.$on("newQuote",t.addQuotes)},components:{"app-form":i.a,"app-count":r.a,"app-list":l.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(4);e.default={data:function(){return{quote:""}},methods:{addNewQuote:function(){var t=this;o.a.$emit("newQuote",t.quote),t.quote=""}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["quotes","max"],data:function(){return{value:""}},computed:{length:function(){return this.quotes.length}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{deleting:function(){this.$emit("deleting")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{todos:[],activity:{description:"",isComplete:!1}}},methods:{addNewTodo:function(){this.todos.push({description:this.activity.description,isComplete:this.activity.isComplete}),this.activity.description=""},deleteTodo:function(t){console.log("maybe nothing happened!");var e=this.todos.indexOf(t);this.todos.splice(e,1)}},computed:{complete:function(){return this.todos.filter(function(t){return t.isComplete})},incomplete:function(){return this.todos.filter(function(t){return!t.isComplete})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(1),n=s(3),i=s.n(n),a=s(5),r=s(6),c=s.n(r);o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,components:{App:i.a,"app-navigation":c.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){function o(t){s(26)}var n=s(0)(s(9),s(50),o,null,null);t.exports=n.exports},function(t,e,s){function o(t){s(28)}var n=s(0)(s(10),s(52),o,null,null);t.exports=n.exports},function(t,e,s){function o(t){s(27)}var n=s(0)(s(11),s(51),o,null,null);t.exports=n.exports},function(t,e,s){function o(t){s(22)}var n=s(0)(s(12),s(43),o,null,null);t.exports=n.exports},function(t,e,s){function o(t){s(23)}var n=s(0)(s(13),s(45),o,null,null);t.exports=n.exports},function(t,e,s){function o(t){s(24)}var n=s(0)(s(14),s(46),o,null,null);t.exports=n.exports},function(t,e,s){var o=s(0)(s(15),s(44),null,null,null);t.exports=o.exports},function(t,e,s){var o=s(0)(s(16),s(48),null,null,null);t.exports=o.exports},function(t,e,s){var o=s(0)(s(17),s(49),null,null,null);t.exports=o.exports},function(t,e,s){function o(t){s(29)}var n=s(0)(s(18),s(53),o,null,null);t.exports=n.exports},function(t,e,s){function o(t){s(21)}var n=s(0)(s(19),s(42),o,"data-v-09523d6a",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",[s("div",{staticClass:"app-body col-md-9 card"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.activity.description,expression:"activity.description"}],staticClass:"form-control col-md-12",attrs:{type:"text",placeholder:"What needs to be done?"},domProps:{value:t.activity.description},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addNewTodo(e)},input:function(e){e.target.composing||(t.activity.description=e.target.value)}}}),t._v(" "),t.todos?s("ul",{staticClass:"list-group"},t._l(t.incomplete,function(e){return s("li",{staticClass:"list-group-item list-group-item-action my-pointer",on:{dblclick:function(s){t.deleteTodo(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isComplete,expression:"item.isComplete"}],staticClass:"check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isComplete)?t._i(e.isComplete,null)>-1:e.isComplete},on:{__c:function(s){var o=e.isComplete,n=s.target,i=!!n.checked;if(Array.isArray(o)){var a=t._i(o,null);i?a<0&&(e.isComplete=o.concat(null)):a>-1&&(e.isComplete=o.slice(0,a).concat(o.slice(a+1)))}else e.isComplete=i}}}),t._v("\n              "+t._s(e.description)+"\n            ")])})):t._e(),t._v(" "),t.complete.length>0?s("ul",{staticClass:"list-group"},t._l(t.complete,function(e){return s("li",{staticClass:"list-group-item list-group-item-action my-pointer",on:{dblclick:function(s){t.deleteTodo(e)}}},[t._v(t._s(e.description)+" "),s("span",{staticClass:"badge badge-pill badge-success"},[t._v("Done")])])})):t._e()]),t._v(" "),t.todos.length>0?s("div",{staticClass:"tips col-md-9"},[s("p",{staticClass:"blockquote text-muted"},[t._v("Double click to delete a todo")])]):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question-box"},[s("article",{staticClass:"message"},[s("div",{staticClass:"message-body"},[s("h1",{staticClass:"title"},[t._v(t._s(t.store.questions[t.store.getI()].question))]),t._v(" "),s("hr"),t._v(" "),s("div",[s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("label",{staticClass:"radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.questions[t.store.getI()].picked,expression:"store.questions[store.getI()].picked"}],attrs:{type:"radio",name:"question",value:"a"},domProps:{checked:t._q(t.store.questions[t.store.getI()].picked,"a")},on:{__c:function(e){t.store.questions[t.store.getI()].picked="a"}}}),t._v("\n                            "+t._s(t.store.questions[t.store.getI()].options[0].text)+"\n                        ")])])]),t._v(" "),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("label",{staticClass:"radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.questions[t.store.getI()].picked,expression:"store.questions[store.getI()].picked"}],attrs:{type:"radio",name:"question",value:"b"},domProps:{checked:t._q(t.store.questions[t.store.getI()].picked,"b")},on:{__c:function(e){t.store.questions[t.store.getI()].picked="b"}}}),t._v("\n                            "+t._s(t.store.questions[t.store.getI()].options[1].text)+"\n                        ")])])]),t._v(" "),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("label",{staticClass:"radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.questions[t.store.getI()].picked,expression:"store.questions[store.getI()].picked"}],attrs:{type:"radio",name:"question",value:"c"},domProps:{checked:t._q(t.store.questions[t.store.getI()].picked,"c")},on:{__c:function(e){t.store.questions[t.store.getI()].picked="c"}}}),t._v("\n                            "+t._s(t.store.questions[t.store.getI()].options[2].text)+"\n                        ")])])]),t._v(" "),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("label",{staticClass:"radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.questions[t.store.getI()].picked,expression:"store.questions[store.getI()].picked"}],attrs:{type:"radio",name:"question",value:"d"},domProps:{checked:t._q(t.store.questions[t.store.getI()].picked,"d")},on:{__c:function(e){t.store.questions[t.store.getI()].picked="d"}}}),t._v("\n                            "+t._s(t.store.questions[t.store.getI()].options[3].text)+"\n                        ")])])])]),t._v(" "),s("div",{staticClass:"block previous-next",staticStyle:{overflow:"auto"}},[0!==t.store.getI()?s("button",{staticClass:"button is-danger is-outlined",on:{click:function(e){t.goPrevious()}}},[t._v("Previous")]):t._e(),t._v(" "),s("button",{ref:"btnNext",staticClass:"button is-success is-outlined is-pulled-right",on:{click:function(e){t.goNext()}}},[t._v("Next")])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-10 is-offset-1"},[s("app-count",{attrs:{quotes:t.quotes,max:t.maxQuotes}}),t._v(" "),s("app-form"),t._v(" "),s("div",{staticClass:"columns is-multiline"},t._l(t.quotes,function(e,o){return s("app-list",{key:"index",on:{deleting:function(e){t.deleteQuote(o)}}},[t._v(" "+t._s(e)+" ")])}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("app-bar"),t._v(" "),s("app-question",{on:{callend:t.calling}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"has-text-centered"},[s("h1",{staticClass:"title"},[t._v("Quiz Result")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Your score was: "+t._s(t.percentage)+"%")])]),t._v(" "),t._l(t.store.questions,function(e){return s("div",[s("div",{staticClass:"question-box"},[s("article",{staticClass:"message",class:[{"is-danger":!e.isCorrect},"is-success"]},[s("div",{staticClass:"message-header"},[s("h1",{staticClass:"title has-text-centered"},[t._v(t._s(e.question))])]),t._v(" "),s("div",{staticClass:"message-body"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isCorrect,expression:"!q.isCorrect"}]},[s("p",[t._v("Your answer was "+t._s(e.picked))]),t._v(" "),s("hr")]),t._v(" "),t._l(e.options,function(o){return s("p",{class:[{strong:o.option===e.answer},""]},[t._v(t._s(o.text))])}),t._v(" "),s("div",{staticClass:"see-explanation"},[s("hr"),t._v(" "),s("p",[t._v(t._s(e.explanation))])])],2)])])])}),t._v(" "),s("div",{staticClass:"try is-pulled-right"},[s("a",{staticClass:"button is-primary is-outlined",on:{click:function(e){t.reset()}}},[t._v("Try Again")])])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"nav has-shadow"},[s("div",{staticClass:"container"},[s("div",{staticClass:"nav-left"},[t._m(0),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{activeClass:"is-active",to:"/",exact:""}},[t._v("Home")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{activeClass:"is-active",to:"/todo"}},[t._v("Todo List App")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{activeClass:"is-active",to:"/quotes"}},[t._v("Quotes App")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{activeClass:"is-active",to:"/quiz"}},[t._v("Quiz App")])],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"nav-item",attrs:{href:"//timoshockness.com"}},[s("p",{staticStyle:{color:"#00D1B2"}},[s("strong",{staticStyle:{color:"#00D1B2"}},[t._v("T")]),t._v("imo"),s("strong",{staticStyle:{color:"#00D1B2"}},[t._v("S")]),t._v("hockness")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("form",[t._m(0),t._v(" "),s("div",{staticClass:"col-md-8 col-md-offset-2 control field"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.quote,expression:"quote"}],staticClass:"textarea",attrs:{rows:"3"},domProps:{value:t.quote},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addNewQuote(e)},input:function(e){e.target.composing||(t.quote=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"col-md-8 col-md-offset-2 control field"},[s("button",{staticClass:"button is-primary is-outlined",on:{click:function(e){e.preventDefault(),t.addNewQuote(e)}}},[t._v("Add Quote")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-8 col-md-offset-2 control"},[s("label",{staticClass:"control-label"},[t._v("Write a quote")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-top":"20px"}},[s("h2",[t._v("Quotes in your board: "+t._s(t.length)+" / 10 ")]),t._v(" "),s("div",[s("progress",{staticClass:"progress is-primary",attrs:{max:"10",value:t.length}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section"},[s("div",{staticClass:"column is-10 is-offset-1 title-card"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("h2",{staticClass:"title"},[t._v("Hello again,")]),t._v(" "),s("p",{staticClass:"title"},[t._v("\n                    These are some VueJS projects made by me as showcase.\n                ")]),t._v(" "),s("div",[s("p",{staticClass:"subtitle"},[t._v("Frameworks that I used: "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("VueJs")]),t._v(", "),s("a",{attrs:{href:"https://v4-alpha.getbootstrap.com/",target:"_blank"}},[t._v("Bootstrap 4")]),t._v(", and "),s("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[t._v("Bulma")]),t._v(".")])]),t._v(" "),s("div",[s("p",{staticClass:"subtitle"},[t._v("\n                        Relevant Skills: HTML, CSS, JavaScript, VueJs\n                    ")])])]),t._v(" "),s("footer",{staticClass:"card-footer"},[s("p",{staticClass:"card-footer-item"},[s("span",[t._v("\n        Check the code on "),s("a",{attrs:{href:"https://github.com/tfshockness/VueJS"}},[t._v("GitHub")])])]),t._v(" "),s("p",{staticClass:"card-footer-item"},[s("span",[t._v("\n        More about "),s("a",{attrs:{href:"//timoshockness.com"}},[t._v("Timoteo Shockness")])])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("h4",{staticClass:"has-text-centered"},[t._v(t._s(t.store.getI()+1)+"/"+t._s(t.store.questions.length))]),t._v(" "),s("progress",{staticClass:"progress is-primary",attrs:{value:t.value,max:t.total}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s(t.selectedComponent,{tag:"component",on:{finish:t.changeComponent}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[t._t("default")],2),t._v(" "),s("footer",{staticClass:"card-footer"},[s("a",{staticClass:"card-footer-item",on:{click:t.deleting}},[t._v("Delete")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("app-title")],1)},staticRenderFns:[]}}],[20]);
//# sourceMappingURL=app.ba5a0062f30a4007a689.js.map