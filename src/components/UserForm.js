import React from 'react';
import FormUserDetail from './FormUserDetail';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends React.Component{
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email : '',
        occupation: '',
        city: '',
        bio: '',
    }

    // Untuk memproses step selanjutnya
    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step +1
        });
    }

    // Untuk kembali ke proses sebelumnya
    prevStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Untuk menghandle halaman form yang berubah
    handleChange = input => e => {
        this.setState({
            [input] : e.target.value
        });
    }
    render(){
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio} = this.state;
        const values = { firstName, lastName, email, occupation, city, bio};

        switch(step) {
            case 1: 
                return (
                    <FormUserDetail 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return(
                    <FormPersonalDetail 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return(
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return(
                    <Success 
                        values={values}
                    />
                );
            default:
                return(
                    <h1>Error Page</h1>
                );
        }
    }
}

export default UserForm;