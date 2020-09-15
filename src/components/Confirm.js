import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends React.Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values:{ firstName, lastName, email, occupation, city, bio } = this.props} = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Konfirmasi Identitas Anda"
                    />
                    <List>
                        <ListItem
                            primaryText="Nama Awal"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Nama Belakang"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Status Pendidikan"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="Kota"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Keterangan"
                            secondaryText={bio}
                        />
                    </List>
                    <RaisedButton
                        label="Konfirmasi dan Lanjut"
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
export default Confirm;