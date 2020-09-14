import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetail extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Masukan Identitas Personal Anda"
                    />
                    <TextField 
                        hintText="Masukkan status okupasi"
                        floatingLabelText="Status okupasi"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <TextField 
                        hintText="Masukkan Kota"
                        floatingLabelText="Kota"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <TextField 
                        hintText="Masukkan Deskripsi"
                        floatingLabelText="Deskripsikan diri Anda"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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
export default FormPersonalDetail;