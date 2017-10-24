import React, {PropTypes} from 'react';

const TextInput=({value, name, label, onChange, error, placeholder})=>{
  let wrapperClass='formgroup';
  if (error && error.length>0){
    wrapperClass+=''+'hasError';
  }
  return (
    <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className='field'>
          <input type='text'
            name={name}
            value={value}
            placeholder={placeholder}
            onchange={onChange}/>
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
    </div>
  );
};
TextInput.PropTypes={
  value:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  label:PropTypes.string,
  onchange:PropTypes.func.isRequired,
  error:PropTypes.string,
  placeholder:PropTypes.string
}
export default TextInput;
