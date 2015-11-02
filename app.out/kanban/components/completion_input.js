// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.components.completion_input');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.util');
kanban.components.completion_input.match_key = (function kanban$components$completion_input$match_key(x){
var props = (function (){var G__23602 = x;
var G__23602__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__23602):G__23602);
return G__23602__$1;
})();
return new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(om.next.get_computed.call(null,props)).call(null,props);
});
/**
 * @constructor
 */
kanban.components.completion_input.CompletionMatch = (function kanban$components$completion_input$CompletionMatch(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.completion_input.CompletionMatch.prototype = goog.object.clone(React.Component.prototype);

var x23607_23617 = kanban.components.completion_input.CompletionMatch.prototype;
x23607_23617.componentWillUpdate = ((function (x23607_23617){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x23607_23617))
;

x23607_23617.shouldComponentUpdate = ((function (x23607_23617){
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
});})(x23607_23617))
;

x23607_23617.componentWillUnmount = ((function (x23607_23617){
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
});})(x23607_23617))
;

x23607_23617.componentDidUpdate = ((function (x23607_23617){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x23607_23617))
;

x23607_23617.isMounted = ((function (x23607_23617){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23607_23617))
;

x23607_23617.componentWillMount = ((function (x23607_23617){
return (function (){
var this__7526__auto__ = this;
var indexer__7531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__7526__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__7531__auto__,this__7526__auto__);
}
});})(x23607_23617))
;

x23607_23617.render = ((function (x23607_23617){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23608 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23609 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23610 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23611 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23612 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__23613 = om.next.get_computed.call(null,this$);
var map__23613__$1 = ((((!((map__23613 == null)))?((((map__23613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23613):map__23613);
var selected = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var activate_fn = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
var element_fn = cljs.core.get.call(null,map__23613__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
return React.DOM.div({"className": kanban.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"completion-input-match","completion-input-match",1327544031),true,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)), "onClick": ((function (map__23613,map__23613__$1,selected,activate_fn,element_fn,_STAR_reconciler_STAR_23608,_STAR_depth_STAR_23609,_STAR_shared_STAR_23610,_STAR_instrument_STAR_23611,_STAR_parent_STAR_23612,this$,x23607_23617){
return (function (){
if(cljs.core.truth_(activate_fn)){
return activate_fn.call(null);
} else {
return null;
}
});})(map__23613,map__23613__$1,selected,activate_fn,element_fn,_STAR_reconciler_STAR_23608,_STAR_depth_STAR_23609,_STAR_shared_STAR_23610,_STAR_instrument_STAR_23611,_STAR_parent_STAR_23612,this$,x23607_23617))
},element_fn.call(null,om.next.props.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23612;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23611;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23610;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23609;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23608;
}});})(x23607_23617))
;


kanban.components.completion_input.CompletionMatch.prototype.constructor = kanban.components.completion_input.CompletionMatch;

kanban.components.completion_input.CompletionMatch.prototype.om$isComponent = true;

var x23615_23618 = kanban.components.completion_input.CompletionMatch;


var x23616_23619 = kanban.components.completion_input.CompletionMatch.prototype;


kanban.components.completion_input.CompletionMatch.cljs$lang$type = true;

kanban.components.completion_input.CompletionMatch.cljs$lang$ctorStr = "kanban.components.completion-input/CompletionMatch";

kanban.components.completion_input.CompletionMatch.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.completion-input/CompletionMatch");
});
kanban.components.completion_input.completion_match = om.next.factory.call(null,kanban.components.completion_input.CompletionMatch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),kanban.components.completion_input.match_key], null));
/**
 * @constructor
 */
kanban.components.completion_input.CompletionInput = (function kanban$components$completion_input$CompletionInput(){
var this__7586__auto__ = this;
React.Component.apply(this__7586__auto__,arguments);

if(!((this__7586__auto__.getInitialState == null))){
this__7586__auto__.state = this__7586__auto__.getInitialState();
} else {
this__7586__auto__.state = {};
}

return this__7586__auto__;
});

kanban.components.completion_input.CompletionInput.prototype = goog.object.clone(React.Component.prototype);

var x23626_23651 = kanban.components.completion_input.CompletionInput.prototype;
x23626_23651.componentWillUpdate = ((function (x23626_23651){
return (function (next_props__7527__auto__,next_state__7528__auto__){
var this__7526__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__7526__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__7526__auto__);
});})(x23626_23651))
;

x23626_23651.shouldComponentUpdate = ((function (x23626_23651){
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
});})(x23626_23651))
;

x23626_23651.componentWillUnmount = ((function (x23626_23651){
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
});})(x23626_23651))
;

x23626_23651.componentDidUpdate = ((function (x23626_23651){
return (function (prev_props__7529__auto__,prev_state__7530__auto__){
var this__7526__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__7526__auto__);
});})(x23626_23651))
;

x23626_23651.isMounted = ((function (x23626_23651){
return (function (){
var this__7526__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__7526__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23626_23651))
;

x23626_23651.update_matches = ((function (x23626_23651){
return (function (text){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,((function (this$,x23626_23651){
return (function (state,matches){
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"matches","matches",635497998),matches),new cljs.core.Keyword(null,"selected-match","selected-match",2125084326),((function (this$,x23626_23651){
return (function (state__$1,selected_match){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([selected_match], true),matches))){
return selected_match;
} else {
return cljs.core.first.call(null,matches);
}
});})(this$,x23626_23651))
);
});})(this$,x23626_23651))
,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"match-fn","match-fn",1859208916).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),text),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)))));
});})(x23626_23651))
;

x23626_23651.update_text = ((function (x23626_23651){
return (function (text){
var this$ = this;
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),text);

return this$.update_matches(text);
});})(x23626_23651))
;

x23626_23651.show_matches = ((function (x23626_23651){
return (function (show){
var this$ = this;
cljs.core.println.call(null,"show matches",show);

return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"show-matches","show-matches",410578763),show);
});})(x23626_23651))
;

x23626_23651.activate_match = ((function (x23626_23651){
return (function (match){
var this$ = this;
this$.show_matches(false);

this$.update_text("");

om.dom.node.call(null,om.next.react_ref.call(null,this$,new cljs.core.Keyword(null,"input","input",556931961))).focus();

var map__23627 = om.next.props.call(null,this$);
var map__23627__$1 = ((((!((map__23627 == null)))?((((map__23627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23627):map__23627);
var activate_fn = cljs.core.get.call(null,map__23627__$1,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886));
if(cljs.core.truth_((function (){var and__5082__auto__ = activate_fn;
if(cljs.core.truth_(and__5082__auto__)){
return match;
} else {
return and__5082__auto__;
}
})())){
return activate_fn.call(null,match);
} else {
return null;
}
});})(x23626_23651))
;

x23626_23651.handle_backspace = ((function (x23626_23651){
return (function (e){
var this$ = this;
if(((e.target.selectionStart === (0))) && (cljs.core._EQ_.call(null,e.target.selectionStart,e.target.selectionEnd))){
var map__23629 = om.next.props.call(null,this$);
var map__23629__$1 = ((((!((map__23629 == null)))?((((map__23629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23629):map__23629);
var back_fn = cljs.core.get.call(null,map__23629__$1,new cljs.core.Keyword(null,"back-fn","back-fn",-187558063));
if(cljs.core.truth_(back_fn)){
back_fn.call(null,this$);

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(x23626_23651))
;

x23626_23651.handle_up = ((function (x23626_23651){
return (function (e){
var this$ = this;
var map__23631 = om.next.get_state.call(null,this$);
var map__23631__$1 = ((((!((map__23631 == null)))?((((map__23631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23631):map__23631);
var matches = cljs.core.get.call(null,map__23631__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var selected_match = cljs.core.get.call(null,map__23631__$1,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326));
var index = kanban.util.index_of.call(null,selected_match,matches);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326),cljs.core.get.call(null,matches,(function (){var x__5425__auto__ = (index - (1));
var y__5426__auto__ = (0);
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})()));
});})(x23626_23651))
;

x23626_23651.handle_down = ((function (x23626_23651){
return (function (e){
var this$ = this;
var map__23633 = om.next.get_state.call(null,this$);
var map__23633__$1 = ((((!((map__23633 == null)))?((((map__23633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23633):map__23633);
var matches = cljs.core.get.call(null,map__23633__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var selected_match = cljs.core.get.call(null,map__23633__$1,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326));
var index = kanban.util.index_of.call(null,selected_match,matches);
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326),cljs.core.get.call(null,matches,(function (){var x__5432__auto__ = (index + (1));
var y__5433__auto__ = (cljs.core.count.call(null,matches) - (1));
return ((x__5432__auto__ < y__5433__auto__) ? x__5432__auto__ : y__5433__auto__);
})()));
});})(x23626_23651))
;

x23626_23651.handle_escape = ((function (x23626_23651){
return (function (e){
var this$ = this;
return this$.show_matches(false);
});})(x23626_23651))
;

x23626_23651.handle_return = ((function (x23626_23651){
return (function (e){
var this$ = this;
var temp__4425__auto__ = new cljs.core.Keyword(null,"selected-match","selected-match",2125084326).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return this$.activate_match(match);
} else {
return null;
}
});})(x23626_23651))
;

x23626_23651.key_down = ((function (x23626_23651){
return (function (e){
var this$ = this;
this$.show_matches(true);

var G__23635 = e.keyCode;
switch (G__23635) {
case (8):
return this$.handle_backspace(e);

break;
case (38):
return this$.handle_up(e);

break;
case (40):
return this$.handle_down(e);

break;
case (27):
return this$.handle_escape(e);

break;
case (13):
return this$.handle_return(e);

break;
default:
return cljs.core.println.call(null,"key down",e.keyCode);

}
});})(x23626_23651))
;

x23626_23651.componentWillMount = ((function (x23626_23651){
return (function (){
var this$ = this;
var indexer__7521__auto___23653 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__7521__auto___23653 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__7521__auto___23653,this$);
}

return this$.update_text("");
});})(x23626_23651))
;

x23626_23651.componentWillReceiveProps = ((function (x23626_23651){
return (function (props){
var this$ = this;
var props__$1 = om.next._next_props.call(null,props,this$);
return this$.update_matches(om.next.react_ref.call(null,this$,new cljs.core.Keyword(null,"input","input",556931961)).value);
});})(x23626_23651))
;

x23626_23651.render = ((function (x23626_23651){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23636 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23637 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23638 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23639 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23640 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div({"className": "completion-input", "onFocus": ((function (_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651){
return (function (){
return this$.show_matches(true);
});})(_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651))
, "onFocusOut": ((function (_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651){
return (function (){
return this$.show_matches(false);
});})(_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651))
},om.dom.input.call(null,{"ref": new cljs.core.Keyword(null,"input","input",556931961), "value": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)), "placeholder": new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)), "className": "completion-input-input", "onChange": ((function (_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651){
return (function (p1__23620_SHARP_){
return this$.update_text(p1__23620_SHARP_.target.value);
});})(_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651))
, "onKeyDown": ((function (_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651){
return (function (p1__23621_SHARP_){
return this$.key_down(p1__23621_SHARP_);
});})(_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651))
}),(function (){var map__23641 = om.next.get_state.call(null,this$);
var map__23641__$1 = ((((!((map__23641 == null)))?((((map__23641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23641):map__23641);
var matches = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var show_matches = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"show-matches","show-matches",410578763));
var selected_match = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"selected-match","selected-match",2125084326));
var map__23642 = om.next.props.call(null,this$);
var map__23642__$1 = ((((!((map__23642 == null)))?((((map__23642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23642):map__23642);
var key_fn = cljs.core.get.call(null,map__23642__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__23642__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
if(cljs.core.truth_((function (){var and__5082__auto__ = matches;
if(cljs.core.truth_(and__5082__auto__)){
return show_matches;
} else {
return and__5082__auto__;
}
})())){
return React.DOM.div({"className": "completion-input-matches"},(function (){var iter__5866__auto__ = ((function (map__23641,map__23641__$1,matches,show_matches,selected_match,map__23642,map__23642__$1,key_fn,element_fn,_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651){
return (function kanban$components$completion_input$iter__23645(s__23646){
return (new cljs.core.LazySeq(null,((function (map__23641,map__23641__$1,matches,show_matches,selected_match,map__23642,map__23642__$1,key_fn,element_fn,_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651){
return (function (){
var s__23646__$1 = s__23646;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23646__$1);
if(temp__4425__auto__){
var s__23646__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23646__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__23646__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__23648 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__23647 = (0);
while(true){
if((i__23647 < size__5865__auto__)){
var m = cljs.core._nth.call(null,c__5864__auto__,i__23647);
cljs.core.chunk_append.call(null,b__23648,kanban.components.completion_input.completion_match.call(null,om.next.computed.call(null,m,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,m,selected_match),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (i__23647,m,c__5864__auto__,size__5865__auto__,b__23648,s__23646__$2,temp__4425__auto__,map__23641,map__23641__$1,matches,show_matches,selected_match,map__23642,map__23642__$1,key_fn,element_fn,_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651){
return (function (){
return this$.activate_match(m);
});})(i__23647,m,c__5864__auto__,size__5865__auto__,b__23648,s__23646__$2,temp__4425__auto__,map__23641,map__23641__$1,matches,show_matches,selected_match,map__23642,map__23642__$1,key_fn,element_fn,_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651))
,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn], null))));

var G__23654 = (i__23647 + (1));
i__23647 = G__23654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23648),kanban$components$completion_input$iter__23645.call(null,cljs.core.chunk_rest.call(null,s__23646__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23648),null);
}
} else {
var m = cljs.core.first.call(null,s__23646__$2);
return cljs.core.cons.call(null,kanban.components.completion_input.completion_match.call(null,om.next.computed.call(null,m,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,m,selected_match),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"activate-fn","activate-fn",1968898886),((function (m,s__23646__$2,temp__4425__auto__,map__23641,map__23641__$1,matches,show_matches,selected_match,map__23642,map__23642__$1,key_fn,element_fn,_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651){
return (function (){
return this$.activate_match(m);
});})(m,s__23646__$2,temp__4425__auto__,map__23641,map__23641__$1,matches,show_matches,selected_match,map__23642,map__23642__$1,key_fn,element_fn,_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651))
,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn], null))),kanban$components$completion_input$iter__23645.call(null,cljs.core.rest.call(null,s__23646__$2)));
}
} else {
return null;
}
break;
}
});})(map__23641,map__23641__$1,matches,show_matches,selected_match,map__23642,map__23642__$1,key_fn,element_fn,_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651))
,null,null));
});})(map__23641,map__23641__$1,matches,show_matches,selected_match,map__23642,map__23642__$1,key_fn,element_fn,_STAR_reconciler_STAR_23636,_STAR_depth_STAR_23637,_STAR_shared_STAR_23638,_STAR_instrument_STAR_23639,_STAR_parent_STAR_23640,this$,x23626_23651))
;
return iter__5866__auto__.call(null,matches);
})());
} else {
return null;
}
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23640;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23639;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23638;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23637;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23636;
}});})(x23626_23651))
;


kanban.components.completion_input.CompletionInput.prototype.constructor = kanban.components.completion_input.CompletionInput;

kanban.components.completion_input.CompletionInput.prototype.om$isComponent = true;

var x23649_23655 = kanban.components.completion_input.CompletionInput;


var x23650_23656 = kanban.components.completion_input.CompletionInput.prototype;


kanban.components.completion_input.CompletionInput.cljs$lang$type = true;

kanban.components.completion_input.CompletionInput.cljs$lang$ctorStr = "kanban.components.completion-input/CompletionInput";

kanban.components.completion_input.CompletionInput.cljs$lang$ctorPrWriter = (function (this__7588__auto__,writer__7589__auto__,opt__7590__auto__){
return cljs.core._write.call(null,writer__7589__auto__,"kanban.components.completion-input/CompletionInput");
});
kanban.components.completion_input.completion_input = om.next.factory.call(null,kanban.components.completion_input.CompletionInput);

//# sourceMappingURL=completion_input.js.map