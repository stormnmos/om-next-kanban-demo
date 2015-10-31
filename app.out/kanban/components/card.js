// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.card');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('om.dom');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('kanban.util');
goog.require('om.next');
/**
 * @constructor
 */
kanban.components.card.Assignee = (function kanban$components$card$Assignee(){
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.card.Assignee.prototype = goog.object.clone(React.Component.prototype);

var x8247_8259 = kanban.components.card.Assignee.prototype;
x8247_8259.componentWillUpdate = ((function (x8247_8259){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x8247_8259))
;

x8247_8259.shouldComponentUpdate = ((function (x8247_8259){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x8247_8259))
;

x8247_8259.componentWillUnmount = ((function (x8247_8259){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8247_8259))
;

x8247_8259.componentDidUpdate = ((function (x8247_8259){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x8247_8259))
;

x8247_8259.isMounted = ((function (x8247_8259){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8247_8259))
;

x8247_8259.componentWillMount = ((function (x8247_8259){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8247_8259))
;

x8247_8259.render = ((function (x8247_8259){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8248 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8249 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8250 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8251 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8252 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8253 = om.next.props.call(null,this$);
var map__8253__$1 = ((((!((map__8253 == null)))?((((map__8253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8253):map__8253);
var username = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var name = cljs.core.get.call(null,map__8253__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var map__8254 = om.next.get_computed.call(null,this$);
var map__8254__$1 = ((((!((map__8254 == null)))?((((map__8254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8254):map__8254);
var selected = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_name = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"with-name","with-name",597826370));
var activate_fn = cljs.core.get.call(null,map__8254__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
return React.DOM.span({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"assignee","assignee",-1242457026),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__8253,map__8253__$1,username,name,map__8254,map__8254__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8248,_STAR_depth_STAR_8249,_STAR_shared_STAR_8250,_STAR_instrument_STAR_8251,_STAR_parent_STAR_8252,this$,x8247_8259){
return (function (){
return activate_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__8253,map__8253__$1,username,name,map__8254,map__8254__$1,selected,with_name,activate_fn,_STAR_reconciler_STAR_8248,_STAR_depth_STAR_8249,_STAR_shared_STAR_8250,_STAR_instrument_STAR_8251,_STAR_parent_STAR_8252,this$,x8247_8259))
, "title": name},(cljs.core.truth_(with_name)?goog.string.format("%s (@%s) ",name,username):goog.string.format("@%s ",username)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8252;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8251;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8250;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8249;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8248;
}});})(x8247_8259))
;


kanban.components.card.Assignee.prototype.constructor = kanban.components.card.Assignee;

kanban.components.card.Assignee.prototype.om$isComponent = true;

var x8257_8260 = kanban.components.card.Assignee;
x8257_8260.om$next$Ident$ = true;

x8257_8260.om$next$Ident$ident$arity$2 = ((function (x8257_8260){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8257_8260))
;

x8257_8260.om$next$IQuery$ = true;

x8257_8260.om$next$IQuery$query$arity$1 = ((function (x8257_8260){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8257_8260))
;


var x8258_8261 = kanban.components.card.Assignee.prototype;
x8258_8261.om$next$Ident$ = true;

x8258_8261.om$next$Ident$ident$arity$2 = ((function (x8258_8261){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","by-id","user/by-id",-2141588742),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8258_8261))
;

x8258_8261.om$next$IQuery$ = true;

x8258_8261.om$next$IQuery$query$arity$1 = ((function (x8258_8261){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"name","name",1843675177)], null);
});})(x8258_8261))
;


kanban.components.card.Assignee.cljs$lang$type = true;

kanban.components.card.Assignee.cljs$lang$ctorStr = "kanban.components.card/Assignee";

kanban.components.card.Assignee.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.card/Assignee");
});
kanban.components.card.assignee = om.next.factory.call(null,kanban.components.card.Assignee,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kanban.components.card.Card = (function kanban$components$card$Card(){
var this__7584__auto__ = this;
React.Component.apply(this__7584__auto__,arguments);

if(!((this__7584__auto__.getInitialState == null))){
this__7584__auto__.state = this__7584__auto__.getInitialState();
} else {
this__7584__auto__.state = {};
}

return this__7584__auto__;
});

kanban.components.card.Card.prototype = goog.object.clone(React.Component.prototype);

var x8266_8282 = kanban.components.card.Card.prototype;
x8266_8282.componentWillUpdate = ((function (x8266_8282){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7524__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7524__auto__);
});})(x8266_8282))
;

x8266_8282.shouldComponentUpdate = ((function (x8266_8282){
return (function (next_props__7525__auto__,next_state__7526__auto__){
var this__7524__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7524__auto__),goog.object.get(next_props__7525__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7524__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7524__auto__.state,"omcljs$state"),goog.object.get(next_state__7526__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x8266_8282))
;

x8266_8282.componentWillUnmount = ((function (x8266_8282){
return (function (){
var this__7524__auto__ = this;
var r__7530__auto__ = om.next.get_reconciler.call(null,this__7524__auto__);
var cfg__7531__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7530__auto__);
var st__7532__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
var indexer__7529__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7531__auto__);
if((st__7532__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7532__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7524__auto__);
}

if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8266_8282))
;

x8266_8282.componentDidUpdate = ((function (x8266_8282){
return (function (prev_props__7527__auto__,prev_state__7528__auto__){
var this__7524__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7524__auto__);
});})(x8266_8282))
;

x8266_8282.isMounted = ((function (x8266_8282){
return (function (){
var this__7524__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7524__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x8266_8282))
;

x8266_8282.componentWillMount = ((function (x8266_8282){
return (function (){
var this__7524__auto__ = this;
var indexer__7529__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7524__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7529__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7529__auto__,this__7524__auto__);
}
});})(x8266_8282))
;

x8266_8282.render = ((function (x8266_8282){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_8267 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_8268 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_8269 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_8270 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_8271 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__8272 = om.next.props.call(null,this$);
var map__8272__$1 = ((((!((map__8272 == null)))?((((map__8272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8272):map__8272);
var id = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var assignees = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"assignees","assignees",-298534943));
var map__8273 = om.next.get_computed.call(null,this$);
var map__8273__$1 = ((((!((map__8273 == null)))?((((map__8273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8273):map__8273);
var drag_fns = cljs.core.get.call(null,map__8273__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
var edit_fn = cljs.core.get.call(null,map__8273__$1,new cljs.core.Keyword(null,"edit-fn","edit-fn",-1974067620));
var ref = om.next.get_ident.call(null,this$);
return React.DOM.div({"className": "card", "onClick": ((function (ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282){
return (function (){
return edit_fn.call(null,ref);
});})(ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282))
, "draggable": true, "onDragStart": ((function (ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282){
return (function (){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282))
, "onDragEnd": ((function (ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282){
return (function (){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(drag_fns).call(null,ref);
});})(ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282))
},React.DOM.span({"className": "card-id"},id),(function (){var iter__5866__auto__ = ((function (ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282){
return (function kanban$components$card$iter__8276(s__8277){
return (new cljs.core.LazySeq(null,((function (ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282){
return (function (){
var s__8277__$1 = s__8277;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8277__$1);
if(temp__4425__auto__){
var s__8277__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8277__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__8277__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__8279 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__8278 = (0);
while(true){
if((i__8278 < size__5865__auto__)){
var a = cljs.core._nth.call(null,c__5864__auto__,i__8278);
cljs.core.chunk_append.call(null,b__8279,kanban.components.card.assignee.call(null,a));

var G__8283 = (i__8278 + (1));
i__8278 = G__8283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8279),kanban$components$card$iter__8276.call(null,cljs.core.chunk_rest.call(null,s__8277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8279),null);
}
} else {
var a = cljs.core.first.call(null,s__8277__$2);
return cljs.core.cons.call(null,kanban.components.card.assignee.call(null,a),kanban$components$card$iter__8276.call(null,cljs.core.rest.call(null,s__8277__$2)));
}
} else {
return null;
}
break;
}
});})(ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282))
,null,null));
});})(ref,map__8272,map__8272__$1,id,text,assignees,map__8273,map__8273__$1,drag_fns,edit_fn,_STAR_reconciler_STAR_8267,_STAR_depth_STAR_8268,_STAR_shared_STAR_8269,_STAR_instrument_STAR_8270,_STAR_parent_STAR_8271,this$,x8266_8282))
;
return iter__5866__auto__.call(null,assignees);
})(),React.DOM.span({"className": "text"},text));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_8271;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_8270;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_8269;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_8268;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_8267;
}});})(x8266_8282))
;


kanban.components.card.Card.prototype.constructor = kanban.components.card.Card;

kanban.components.card.Card.prototype.om$isComponent = true;

var x8280_8284 = kanban.components.card.Card;
x8280_8284.om$next$Ident$ = true;

x8280_8284.om$next$Ident$ident$arity$2 = ((function (x8280_8284){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8280_8284))
;

x8280_8284.om$next$IQuery$ = true;

x8280_8284.om$next$IQuery$query$arity$1 = ((function (x8280_8284){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8280_8284))
;


var x8281_8285 = kanban.components.card.Card.prototype;
x8281_8285.om$next$Ident$ = true;

x8281_8285.om$next$Ident$ident$arity$2 = ((function (x8281_8285){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("card","by-id","card/by-id",-2141035693),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x8281_8285))
;

x8281_8285.om$next$IQuery$ = true;

x8281_8285.om$next$IQuery$query$arity$1 = ((function (x8281_8285){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assignees","assignees",-298534943),om.next.get_query.call(null,kanban.components.card.Assignee)], null)], null);
});})(x8281_8285))
;


kanban.components.card.Card.cljs$lang$type = true;

kanban.components.card.Card.cljs$lang$ctorStr = "kanban.components.card/Card";

kanban.components.card.Card.cljs$lang$ctorPrWriter = (function (this__7586__auto__,writer__7587__auto__,opt__7588__auto__){
return cljs.core._write.call(null,writer__7587__auto__,"kanban.components.card/Card");
});
kanban.components.card.card = om.next.factory.call(null,kanban.components.card.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=card.js.map