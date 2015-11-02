// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.lane');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.card');
/**
 * @constructor
 */
kanban.components.lane.Lane = (function kanban$components$lane$Lane(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.lane.Lane.prototype = goog.object.clone(React.Component.prototype);

var x31120_31138 = kanban.components.lane.Lane.prototype;
x31120_31138.componentWillUpdate = ((function (x31120_31138){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x31120_31138))
;

x31120_31138.shouldComponentUpdate = ((function (x31120_31138){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__7526__auto__),goog.object.get(next_props__7527__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__7526__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__7526__auto__.state,"omcljs$state"),goog.object.get(next_state__7528__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x31120_31138))
;

x31120_31138.componentWillUnmount = ((function (x31120_31138){
return (function (){
var this__7526__auto__ = this;
var r__7532__auto__ = om.next.get_reconciler.call(null,this__7526__auto__);
var cfg__7533__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__7532__auto__);
var st__7534__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__7533__auto__);
var indexer__7531__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__7533__auto__);
if((st__7534__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__7534__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__7526__auto__);
}

if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x31120_31138))
;

x31120_31138.componentDidUpdate = ((function (x31120_31138){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x31120_31138))
;

x31120_31138.isMounted = ((function (x31120_31138){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31120_31138))
;

x31120_31138.componentWillMount = ((function (x31120_31138){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x31120_31138))
;

x31120_31138.render = ((function (x31120_31138){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_31121 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31122 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31123 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31124 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31125 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__31126 = om.next.props.call(null,this$);
var map__31126__$1 = ((((!((map__31126 == null)))?((((map__31126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31126):map__31126);
var name = cljs.core.get.call(null,map__31126__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cards__$1 = cljs.core.get.call(null,map__31126__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var map__31127 = om.next.get_computed.call(null,this$);
var map__31127__$1 = ((((!((map__31127 == null)))?((((map__31127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31127):map__31127);
var card_create_fn = cljs.core.get.call(null,map__31127__$1,new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335));
var card_drag_fns = cljs.core.get.call(null,map__31127__$1,new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238));
var card_edit_fn = cljs.core.get.call(null,map__31127__$1,new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421));
return React.DOM.div({"className": "lane", "onDragOver": ((function (map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138){
return (function (e){
return e.preventDefault();
});})(map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138))
, "onDrop": ((function (map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138){
return (function (){
return new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(card_drag_fns).call(null,om.next.get_ident.call(null,this$));
});})(map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138))
},React.DOM.h3({"className": "lane-title"},name,React.DOM.span({"className": "count"},cljs.core.count.call(null,cards__$1))),React.DOM.div({"className": "add"},React.DOM.a({"onClick": ((function (map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138){
return (function (){
return card_create_fn.call(null,om.next.get_ident.call(null,this$));
});})(map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138))
},"+")),React.DOM.div({"className": "cards"},(function (){var ref = om.next.get_ident.call(null,this$);
var drag_fns = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (ref,map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138){
return (function (p__31130){
var vec__31131 = p__31130;
var k = cljs.core.nth.call(null,vec__31131,(0),null);
var f = cljs.core.nth.call(null,vec__31131,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.partial.call(null,f,ref)], null);
});})(ref,map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138))
,card_drag_fns));
var iter__5866__auto__ = ((function (ref,drag_fns,map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138){
return (function kanban$components$lane$iter__31132(s__31133){
return (new cljs.core.LazySeq(null,((function (ref,drag_fns,map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138){
return (function (){
var s__31133__$1 = s__31133;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31133__$1);
if(temp__4425__auto__){
var s__31133__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31133__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__31133__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__31135 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__31134 = (0);
while(true){
if((i__31134 < size__5865__auto__)){
var c = cljs.core._nth.call(null,c__5864__auto__,i__31134);
cljs.core.chunk_append.call(null,b__31135,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))));

var G__31139 = (i__31134 + (1));
i__31134 = G__31139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31135),kanban$components$lane$iter__31132.call(null,cljs.core.chunk_rest.call(null,s__31133__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31135),null);
}
} else {
var c = cljs.core.first.call(null,s__31133__$2);
return cljs.core.cons.call(null,kanban.components.card.card.call(null,om.next.computed.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),drag_fns,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),card_edit_fn], null))),kanban$components$lane$iter__31132.call(null,cljs.core.rest.call(null,s__31133__$2)));
}
} else {
return null;
}
break;
}
});})(ref,drag_fns,map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138))
,null,null));
});})(ref,drag_fns,map__31126,map__31126__$1,name,cards__$1,map__31127,map__31127__$1,card_create_fn,card_drag_fns,card_edit_fn,_STAR_reconciler_STAR_31121,_STAR_depth_STAR_31122,_STAR_shared_STAR_31123,_STAR_instrument_STAR_31124,_STAR_parent_STAR_31125,this$,x31120_31138))
;
return iter__5866__auto__.call(null,cards__$1);
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31125;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31124;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31123;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31122;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31121;
}});})(x31120_31138))
;


kanban.components.lane.Lane.prototype.constructor = kanban.components.lane.Lane;

kanban.components.lane.Lane.prototype.om$isComponent = true;

var x31136_31140 = kanban.components.lane.Lane;
x31136_31140.om$next$Ident$ = true;

x31136_31140.om$next$Ident$ident$arity$2 = ((function (x31136_31140){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x31136_31140))
;

x31136_31140.om$next$IQuery$ = true;

x31136_31140.om$next$IQuery$query$arity$1 = ((function (x31136_31140){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x31136_31140))
;


var x31137_31141 = kanban.components.lane.Lane.prototype;
x31137_31141.om$next$Ident$ = true;

x31137_31141.om$next$Ident$ident$arity$2 = ((function (x31137_31141){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lane","by-id","lane/by-id",-2140783497),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x31137_31141))
;

x31137_31141.om$next$IQuery$ = true;

x31137_31141.om$next$IQuery$query$arity$1 = ((function (x31137_31141){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),om.next.get_query.call(null,kanban.components.card.Card)], null)], null);
});})(x31137_31141))
;


kanban.components.lane.Lane.cljs$lang$type = true;

kanban.components.lane.Lane.cljs$lang$ctorStr = "kanban.components.lane/Lane";

kanban.components.lane.Lane.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.lane/Lane");
});
kanban.components.lane.lane = om.next.factory.call(null,kanban.components.lane.Lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=lane.js.map