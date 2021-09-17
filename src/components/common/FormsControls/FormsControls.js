import React from "react";
import classes from "./FormControls.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)


// import React from 'react';
// import classes from './FormControls.module.css';

// const FormControl = ({ input, meta, Formtype, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
//       <div>
//         <Formtype {...input} {...props} />
//       </div>
//       <div>
//         {hasError && <span>{meta.error}</span>}
//       </div>
//     </div>
//   )
// }

// export const Textarea = (props) => {
//   return <FormControl {...props} Formtype="textarea"></FormControl>
// }


// export const Input = (props) => {
//   return <FormControl {...props} Formtype="input"></FormControl>
// }

//--------------

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


