import { SIDEBAR_VISIBLE } from './types'

export const toggleSidebar = () => dispatch =>{
    console.log('Action Called')
    dispatch({
        type: SIDEBAR_VISIBLE
    })
}