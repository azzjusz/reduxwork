import buildFetchOptions from './buildFetchOptions';
import buildURL from './buildURL';
import getFetchMethod from './getFetchMethod';

export default function fetchDispatcher(config, action, name, dispatch, data, cb) {
  var payload = ((data && data.reduxworkTempId) ? _.omit(data, 'reduxworkTempId') : data);
  console.log('fetchDispatcher')
  action = action.toUpperCase();
  if(!config) config = {};
  if(config.fetchFunction) {
    console.log( 
      buildURL(config, action, name, payload), 
      buildFetchOptions(config, action, payload) 
    )
    return new Promise((resolve, reject) => {
      config.fetchFunction( 
        buildURL(config, action, name, payload, getFetchMethod(config, action)), 
        buildFetchOptions(config, payload, getFetchMethod(config, action)) 
      )
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log('server res', json)
        console.log('cb', cb)
        if(json.err) {
          dispatch({
            type: action+'_'+name.toUpperCase()+'_FAILED',
            error: json.err
          });
          reject(json.err);
        } else {
          dispatch({
            type: action+'_'+name.toUpperCase()+'_COMPLETED',
            data: ((data && data.reduxworkTempId) ? Object.assign({}, json, {reduxworkTempId: data.reduxworkTempId}) : json),
          });
          resolve(json);
        }
        if(cb) cb(json.err, json);
        return json;
      })
    });
  }
}