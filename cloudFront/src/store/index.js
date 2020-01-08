import { createContainer } from 'unstated-next'
import useRank from './rank'
import useUer from './user'


const composeHooks = (...hooks) => () => hooks.reduce((acc, hook) => ({ ...acc, ...hook() }), {})

const Store = createContainer(composeHooks(useUer,useRank))

export {
    Store,
}