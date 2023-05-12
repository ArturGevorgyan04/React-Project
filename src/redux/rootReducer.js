// rootReducery mer global reducern e vorry stanalu e mer bolor ejeri reducernery 
// ayn stexcelu hamar kanchum enq redux i gradaranic combineReducers vori nersum el poxancvelu en mer bolor reducernery

import { combineReducers } from 'redux' // sranov menq miacnum enq 
import { likesReducer } from './about/reducer'

// bolor reducernery mer componentneri


const rootReducer = combineReducers({// aystex menq grelu enq mer bolor Reducer nery
      likes:likesReducer,
      text: likesReducer,
      comments: likesReducer,
      
})

export default rootReducer