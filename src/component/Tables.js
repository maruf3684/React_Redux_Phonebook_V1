import React, { useState, useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import TableRows from "./TableRows";

import {
    selectAllContact,
    clearAllContact,
    deleteAllContact,
} from "../store/actions/Contract-action";




const Tables = () => {
 const dispatch = useDispatch();
 const [selectAll, setSelectAll] = useState(false);

const contacts=useSelector((globalstate) => {
    return globalstate.combocontact.contacts
})

    const selectedContacts=useSelector((globalstate) => {
        return globalstate.combocontact.selectedContacts
    })


    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)));
        } else {
            dispatch(clearAllContact());
        }
    }, [selectAll]);



    return (
        <div className="container tabhed">


            {selectedContacts.length > 0 ? (
                <button
                    className="btn btn-danger mb-3"
                    onClick={() => dispatch(deleteAllContact())}
                >
                    delete all
                </button>
            ) : null}

            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input
                                id="selectAll"
                                type="checkbox"
                                className="custom-control-input"
                                value={selectAll}
                                onClick={() => setSelectAll(!selectAll)}
                            />
                            <label
                                htmlFor="selectAll"
                                className="custom-control-label"
                            />
                        </div>
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    contacts.map((contact)=>{
                        return(
                           <TableRows contacts={contact} key={contact.id} selectAll={selectAll}/>
                        )
                    })
                }

                </tbody>
            </table>

        </div>
    );
};

export default Tables;