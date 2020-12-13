import cloneObj from '../clone'

const initialState = {}
export default (state = cloneObj(initialState), action = {}) => {
  const { data, name } = action
  switch (action.type) {
    case 'GET_MONTH':
      if (data && name) state[name] = data
      break

    default:
      return state
  }
  return cloneObj(state)
}

export const getMonth = (state, month) => state.month[month] || {}
