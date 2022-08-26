import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import emailValidation from '../../validations/email-validation';
import passwordValidation from '../../validations/password-validation';
import * as services from '../../services/account-services';

export default function LoginForm() {

    const {
        control, // capturar cada campo do form
        handleSubmit, // capturar o evento submit do form
        formState: {
            errors // capturar os erros de validação dos campos
        },
        reset // utilizado para limpar o modificar o valor dos campos
    } = useForm();


    // função para executar o evento submit do form
    const onSubmit = (data) => { //data -> campos preenchidos no form
        //fazendo o envio dos dados para a API
        services.postLogin(data)
            .then(    //retorno sucesso
                result => {
                    console.log(result);
                }    
            )
            .catch(      // retorno erro
                e => {
                    console.log(e.response);
                }
            )
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <div className='mb-3'>

        <label>Email:</label>
            <Controller
                control={control}
                name='email'
                defaultValue=''
                rules={{validate: emailValidation}}
                render={
                    ({ field: { onChange, onBlur, value }}) => (
                    <input type='email' className='form-control' onChange={onChange} onBlur={onBlur} value={value} />
                    )
                }
            />

            {
                errors.email &&
                <div className='text-danger'>
                    {errors.email.message}
                </div>
            }

        </div>
        <div className='mb-3'>
            <label>Senha:</label>
            <Controller
                control={control}
                name='senha'
                defaultValue=''
                rules={{validate: passwordValidation}}
                render={
                    ({ field: { onChange, onBlur, value }}) => (
                    <input type='password' className='form-control' onChange={onChange} onBlur={onBlur} value={value} />
                    )
                }
            />
            
            {
                errors.senha &&
                <div className='text-danger'>
                    {errors.senha.message}
                </div>
            }

        </div>
        <div className='mb-3'>
            <div className='d-grid'>    
                <input type='submit' className='btn btn-dark' value='Acessar Agenda' />
            </div>
        </div>
    </form>
  )
}
