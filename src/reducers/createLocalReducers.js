import _ from 'lodash';
import selectedUpdate from '../lib/selectedUpdate';
import { stripVirtualParseLocalFields } from '../lib/fieldsOperations';

export default function createLocalReducers(config, name, customState, customActions) {
  if(!config) config = {};
  if(!config.keyName) config.keyName = 'id';
  if(!customState) customState = {};
  if(!customActions) customActions = {};
  let initialState = Object.assign({}, {
    init: false,
    selected: null,
    query: null,
    isFinding: false,
    isSyncing: false,
    isWritting: false,
    syncError: null,
    findError: null,
    writeError: null,
    updateError: null,
    destroyError: null,
    error: null,
    updatedItem: null,
    destroyedItem: null,
    destroyedItemIndex: null,
    items: []
  }, customState);
  name = _.toUpper(_.snakeCase(name));
  console.log('createLocalReducers', name)
  return function(rState = initialState, rAction) {
    var defaultActions = Object.assign({
      [`FIND_${name}`](state, action) {
        let data = action.data;
        if(!_.isArray(data)) data = [data];
        let selected = selectedUpdate(config, state, data);
        return Object.assign({}, state, {
          init: true,
          items: data,
        }, selected);  
      },
      [`SYNC_${name}`](state, action) {
        let data = action.data;
        if(!_.isArray(data)) data = [data];
        let items = _.unionBy(data, [...state.items], config.keyName);
        let selected = selectedUpdate(config, state, items);
        return Object.assign({}, state, {
          init: true,
          items: items,
        }, selected);  
      },
      [`RECEIVE_${name}`](state, action) {
        let data = action.data;
        if(!_.isArray(data)) data = [data];
        let items = _.unionBy(data, [...state.items], config.keyName);
        let selected = selectedUpdate(config, state, items);
        return Object.assign({}, state, {
          items: items,
        }, selected)      
      },
      [`CREATE_${name}`](state, action) {
        return Object.assign({}, state, {
          items: [...state.items, stripVirtualParseLocalFields(action.data)]
        })      
      },
      [`UPDATE_${name}`](state, action) {
        var update = {};
        var data = stripVirtualParseLocalFields(action.data);
        if(_.isObject(data) && data[config.keyName]) {
          var items = [...state.items];
          var updatedItem = _.find(items, (item) => item[config.keyName] == data[config.keyName]);
          items.splice(
          	_.findIndex(items, (item) => item[config.keyName] == data[config.keyName]), 
          	1, 
          	Object.assign({}, updatedItem, data)
          );
          update.items = items;
        }
        let selected = update.items ? selectedUpdate(config, state, update.items) : {};
        return Object.assign({}, state, update, selected)      
      },
      [`DESTROY_${name}`](state, action) {
        var update = {};
        if(action.data[config.keyName]) {
          var items = [...state.items];
          let destroyedItem = _.find(items, (item) => item[config.keyName] == action.data[config.keyName]);
          items.splice(destroyedItemIndex, 1);
          update.items = items;
        }
        let selected = update.items ? selectedUpdate(config, state, update.items) : {};
        return Object.assign({}, state, update, selected)      
      },
      [`CLEAR_${name}`](state, action) {
        return Object.assign({}, state, {
          items: [],
          selected: null
        })     
      },
      [`SELECT_${name}`](state, action) {
        return Object.assign({}, state, {
          selected: action.data
        })  
      },
      [`RESET_${name}`](state, action) {
        return Object.assign({}, initialState);
      }
    });
    if(customActions[rAction.type]) return customActions[rAction.type](rState, rAction);
    else if(defaultActions[rAction.type]) return defaultActions[rAction.type](rState, rAction);
    else return rState;
  }
}