import React from 'react';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {addContact} from '../store/actions/Contract-action'
import shortid from 'shortid'
import { useHistory } from "react-router-dom";

const AddContract = () => {

    const { register, handleSubmit } = useForm();

    //dispatch import korlam
    const dispatch=useDispatch();

    //for redirect
    let history = useHistory();

    const onSubmit = (data)=> {
        console.log(data)
        dispatch(addContact(data))
        history.push("/");

    };

    return (
        <div className="card border-0 shadow tabhed ">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="hidden" {...register("id")} value={shortid.generate()} />

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            {...register("name")}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            {...register("phone")}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            {...register("email")}
                        />
                    </div>

                    <button className="btn btn-primary" type="submit">
                        Create Contact
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AddContract;


