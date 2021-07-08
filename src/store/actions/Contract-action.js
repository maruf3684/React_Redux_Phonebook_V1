
//Type
export const creatContact="CREATE_CONTACT";
export const GET_CONTACT = "GET_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const SELECT_CONTACT = "SELECT_CONTACT";
export const CLEAR_CONTACT = "CLEAR_CONTACT";
export const DELETE_SELECTED_CONTACT = "DELETE_SELECTED_CONTACT";

//Action Addcontract
export const addContact = (contact)=>{
    return{
        type:"CREATE_CONTACT",
        payload:contact
    }

}


//Action gry contract
export const getContact=(id)=>{
    return{
        type:GET_CONTACT,
        payload:id
    }
}


// update a contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact,
});

// delete a contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id,
});

// select all contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id,
});

// clear selected contacts
export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
});

// delete selected contacts
export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACT,
});