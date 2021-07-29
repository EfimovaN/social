import React from 'react';
import classes from './FormControls.module.css';

const FormControl = ({ input, meta, Formtype, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
      <div>
        <Formtype {...input} {...props} />
      </div>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  )
}

export const Textarea = (props) => {
  return <FormControl {...props} Formtype="textarea"></FormControl>
}


export const Input = (props) => {
  return <FormControl {...props} Formtype="input"></FormControl>
}


// export const Textarea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
//       <textarea {...input} {...props} />
//       { hasError && <span>{meta.error}</span> }
//     </div>
//   )
// }

// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
//       <input {...input} {...props} />
//       { hasError && <span>{meta.error}</span> }
//     </div>
//   )
// }


