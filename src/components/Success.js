import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends React.Component{
    render(){
        const {values} = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Berhasil"
                    />
                    <h1>Terima kasih telah mengisi formulir</h1>
                    <p>{values.firstName}</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;