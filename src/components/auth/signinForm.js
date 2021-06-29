import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../../../src/formFIeld";


class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form className={`${className } sign-in-form`} onSubmit={handleSubmit}>
                
                <Field className='sign-in-form__email' 
                    name='emial' 
                    type='email'
                    title='Email'
                    placeholder='Email' 
                    component={FormInput}/>
               <Field className='sign-in-form__password' 
                    name='password' 
                    type='password'
                    title='Password'
                    placeholder='Password' 
                    component={FormInput}/>
                <Field className='sign-in-form__login'
                    onClick={() => console.log('button success')} 
                    name='login' 
                    type='submit'
                    title='Login' 
                    component={FormButton}/>
            </form>
        );
    }
}

export default SignInForm;