import React from "react";
import { FaPlus } from 'react-icons/fa' // form
import './Form.css';
import PropTypes from 'prop-types';

export default function Form(props) {
  return (<form onSubmit={props.handleSubmit} >
    <input value={props.novaTarefa} onChange={props.handleChange} type="text"></input>
    <button type="submit"><FaPlus /></button>
  </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired
}