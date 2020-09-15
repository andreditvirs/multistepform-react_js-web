import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetail extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const {values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Masukan Identitas Anda"
                    />
                    <TextField 
                        hintText="Masukkan nama depan"
                        floatingLabelText="Nama depan"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <TextField 
                        hintText="Masukkan nama belakang"
                        floatingLabelText="Nama belakang"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <TextField 
                        hintText="Masukkan Email"
                        floatingLabelText="Alamat email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormUserDetail;