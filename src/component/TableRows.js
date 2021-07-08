import React from 'react';
import Avatar from 'react-avatar'
import {Link} from "react-router-dom";
import { deleteContact } from "../store/actions/Contract-action";
import { useDispatch } from "react-redux";

const TableRows = ({ contacts, selectAll }) => {

    const{id,name,phone,email}=contacts;
    const dispatch = useDispatch();

    return (

        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input
                        checked={selectAll}
                        type="checkbox"
                        className="custom-control-input"
                    />
                    <label

                        className="custom-control-label"
                    />
                </div>
            </td>
            <td><Avatar size="45" className="mr-4" name={name} round={true}/>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link to={`/edit/${id}`}>
                    <span className="material-icons text-danger mr-2">edit</span>
                </Link>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link>
                    <span className="material-icons text-danger" onClick={() => dispatch(deleteContact(id))}>remove_circle</span>
                </Link>
            </td>
        </tr>

    );
};

export default TableRows;