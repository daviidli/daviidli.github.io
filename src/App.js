import React, { Component } from 'react';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from '@material-ui/core/Paper';
import {greeting} from "./content/data";

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#3490FF"
        },
        secondary: {
            main: "#FF005E",
        },
    },
});

const styles = theme => ({
    container: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    paper: {
        margin: "auto",
        marginTop: theme.spacing.unit * 3,
        width: "90%",
        height: "90%",
        padding: theme.spacing.unit,
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            useEmoji: true
        };
    }

    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={muiTheme}>
                    <div className={this.props.classes.container}>
                        <Paper className={this.props.classes.paper} elevation={1} square={true}>
                            <div style={{fontSize: 20}} dangerouslySetInnerHTML={{__html: greeting}}>

                            </div>
                        </Paper>
                    </div>
                    <div >
                        {/*<p>hello</p>*/}
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(App);
