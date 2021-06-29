import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

import { FormInput } from "../../../src/formFIeld";

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                
                <Field className='sign-in-form__email' 
                    name='emial' 
                    type='email'
                    title='Email'
                    placeholder='Email' 
                    component={FormInput}/>
            
               <Field className='sign-in-form__password' 
                    name='password' 
                    type='password'
                    title='password'
                    placeholder='password' 
                    component={FormInput}/>
            
            </form>
        );
    }
}

export default SignInForm;