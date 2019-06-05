import { GET_VENDOR_PROFILE, VENDOR_PROFILE_ERROR } from './types'

export const getVendorProfileById = (id) => dispatch =>{
    dispatch({
        type: GET_VENDOR_PROFILE,
        payload: 'Vendor profile'
    })
}