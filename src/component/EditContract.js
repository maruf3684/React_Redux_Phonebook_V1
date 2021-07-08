
import React from 'react';
import { useForm } from "react-hook-form";
import {useDispatch , useSelector} from "react-redux";
import {addContact,getContact,updateContact } from '../store/actions/Contract-action'
import shortid from 'shortid'
import { useHistory , useParams } from "react-router-dom";
import {useEffect,useState} from 'react'



const EditContract = () => {

    const { register, handleSubmit } = useForm();

    //dispatch import korlam
    const dispatch=useDispatch();

    //for redirect
    let history = useHistory();

    //dinamic routing er value dhorbo
    let{id}=useParams()

    ///////////selector

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    let contractforforms=useSelector((state)=>{
        return state.combocontact.dummycontacts
    })

    //useeffect
    useEffect(()=>{
        if ( contractforforms != null) {
            setName(contractforforms.name);
            setPhone(contractforforms.phone);
            setEmail(contractforforms.email);
        }
        console.log("ll")
        dispatch(getContact(id))
    },[contractforforms])

    const onUpdateContact = (e) => {
        e.preventDefault();

        const update_contact = Object.assign(contractforforms, {
            name: name,
            phone: phone,
            email: email,
        });

        dispatch(updateContact(update_contact));
        history.push("/")
    };



    return (
        <div className="card border-0 shadow tabhed ">
            <div className="card-header">Add a Contact {id}</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>



                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-warning" type="submit">
                        Update Contact
                    </button>
                </form>
            </div>
        </div>

    );
};

export default EditContract;

