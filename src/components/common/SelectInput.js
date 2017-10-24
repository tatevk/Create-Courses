import React, {PropTypes} from 'react';

const SelectInput=(value, name, onChange, label, options, defaultOption,error)=>{
  return(
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <select
              name={name}
              value={value}
              onChange={onChange}
              className='form-control'  >
            <option value=''>{defaultOption}</option>
            {options.map(option=>{
              return <option key={option.value} value={option.value}>{option.text}</option>
            })
          }
       </select>
      </div>
    </div>
  )
}
SelectInput.PropTypes={
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  label:PropTypes.string,
  options:PropTypes.arrayOf(PropTypes.object),
  defaultOption:PropTypes.string,
  error:PropTypes.string,
}
