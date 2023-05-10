// thunk y import e arvum  regux-thunk gradaranic ayn petq e instal anel
// instal anelu hamar grum enq npm i redux-thunk
// thunk y stanum e applyMiddleware vory import e arvum redux i gradaranic
// nranq ognum en mer project in vorpesi bolor ansinxron gorcoxutyunery chist asxaten
// createStor y stanum e global reducer y ev middlewere 
// createStor y import e arvum redux i gradaranic

import { createStore, applyMiddleware } from "redux";
import rootReducer from './rootReducer'
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk)

export const store = createStore(rootReducer,middleware)