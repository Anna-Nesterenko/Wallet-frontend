import React from 'react';
import PropTypes from 'prop-types';
// import {Container, Header,FormContainer, LabelContainer, UserInput, StyledBtn } from './RegisterForm.styled';
import useForm from '../../helpers/useForm';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    ContainerLogo, FormContainer, FieldStyled,
    FieldContainer, StyledIconMail, StyledImg,
    StyledIconPass, 
    StyledBtnMain, StyledBtn
} from './LoginForm.styled';

import icon from '../../assets/images/icons/logo.svg';
// const icon = require('./assets/images/icons/wallet30x30.svg')
const SigninSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   password: Yup.string().email('Invalid email').required('Required'),
 });
const LoginForm = ({ onSubmit }) => {
    const initialState = {
        email: '',
        password:''
    }
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})
    const {  email, password } = state;
    return (
        <FormContainer>
            <ContainerLogo>
                <StyledImg src={icon} alt="wallet" className='' />
                {/* <span>
                    <svg width='30' height='30'>
                        <use href='../../assets/images/icons/wallet30x30.svg'></use>
                    </svg>
                </span> */}
            </ContainerLogo>
            <Formik
                validationSchema={SigninSchema}
                onSubmit={handleSubmit}
                initialValues={{
                email: '',
                password: '',
            }}>
                <Form>
                    <FieldContainer>
                        <StyledIconMail />
                        <FieldStyled
                            type="email"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            title="Enter your email Please!"
                            placeholder="E-mail"
                            required
                            value={email}
                            onChange={handleChange} />
                    </FieldContainer>
                       <FieldContainer>
                        <StyledIconPass />
                         <FieldStyled
                            type="password"
                            name="password"
                            placeholder="Password"
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                            title="Minimum eight characters, at least one letter and one number"
                            required
                            value={password}
                            onChange={handleChange} />
                    </FieldContainer>
                    <StyledBtnMain type='submit'>Register</StyledBtnMain>
                    <StyledBtn >Login</StyledBtn>
                        </Form>
            </Formik>
            </FormContainer>
        )
}
    
    LoginForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
export default LoginForm;

//   <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field id="firstName" name="firstName" placeholder="Jane" />

//         <label htmlFor="lastName">Last Name</label>
//         <Field id="lastName" name="lastName" placeholder="Doe" />

//         <label htmlFor="email">Email</label>
//         <Field
//           id="email"
//           name="email"
//           placeholder="jane@acme.com"
//           type="email"
//         />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>