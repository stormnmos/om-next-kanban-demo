(ns kanban.app
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [kanban.reconciler :refer [reconciler]]
            [kanban.parsing.boards :as boards]
            [kanban.components.boards-menu :refer [BoardMenuItem boards-menu]]
            [kanban.components.board :refer [Board board]]
            [kanban.components.card :refer [Card]]
            [kanban.components.lane :refer [Lane]]))

(enable-console-print!)

(defui App
  static om/IQuery
  (query [this]
    [{:boards (om/get-query Board)}
     {:boards/active (om/get-query Board)}
     {:lanes (om/get-query Lane)}
     {:cards (om/get-query Card)}
     :cards/dragged])
  Object
  (activate-board [this ref]
    (om/transact! this `[(boards/activate {:ref ~ref}) :boards/active]))

  (card-drag-start [this lane card]
    (om/transact! this `[(cards/drag {:lane ~lane :card ~card})
                         :cards/dragged]))

  (card-drag-end [this lane card]
    (om/transact! this `[(cards/drag nil)
                         :cards/dragged]))

  (card-drag-drop [this lane]
    (if-let [source (-> this om/props :cards/dragged)]
      (om/transact! this `[(lanes/move-card {:card ~(:card source)
                                             :from ~(:lane source)
                                             :to   ~lane})
                           :boards/active])))

  (render [this]
    (dom/div #js {:className "app"}
      (dom/header #js {:className "header"}
        (dom/h1 nil
          (dom/a #js {:onClick #(.activate-board this nil)}
            "Om Next Kanban Demo"))
        (dom/nav nil
          (let [props (-> this om/props (select-keys [:boards]))]
            (boards-menu
              (assoc props
                     :activate-fn #(.activate-board this %))))))
      (dom/main nil
        (if-let [active-board (-> this om/props :boards/active)]
          (board (assoc active-board
                        :card-drag-fns {:start #(.card-drag-start this %1 %2)
                                        :end #(.card-drag-end this %1 %2)
                                        :drop #(.card-drag-drop this %)}))
          (dom/p #js {:className "introduction"}
            "How about selecting a board from the menu?"))))))

(defn run []
  (om/add-root! reconciler
                App
                (.. js/document (getElementById "app"))))
