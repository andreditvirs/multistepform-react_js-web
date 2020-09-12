import React from 'react';
import FormUserDetail from './FormUserDetail';

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
                    <h1>FormPersonalDetails</h1>
                );
            case 3:
                return(
                    <h1>Confirm</h1>
                );
            case 4:
                return(
                    <h1>Success</h1>
                );
            default:
                return(
                    <h1>Wrong Step</h1>
                );
        }
    }
}

export default UserForm;