import { CREATE_LEAD } from './types'

export const createNewLead = () => dispatch =>{
    console.log("CReate Lead Acction Called")
    dispatch({
        type: CREATE_LEAD,
        payload : "BLA"
    })
}