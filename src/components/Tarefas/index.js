import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa' // ul
import './Tarefas.css'
import PropTypes from 'prop-types';


export default function Tarefas({tarefas, handleDelete, handleEdit }) {
  return (<ul className="tarefas">
    {tarefas.map((tarefas, index) => (
      <li key={tarefas.id}>
        {tarefas}
        <span className="buttons">
          <FaWindowClose onClick={(e) => { handleDelete(e, index) }} className="closeButton" />
          <FaEdit onClick={(e) => { handleEdit(e, index) }} className="editButton" />
        </span>
      </li>
    ))}
  </ul>
  )
}

Tarefas.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired
}