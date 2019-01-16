import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Paper from "@material-ui/core/Paper";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#e66767"
        },
        secondary: {
            main: "#574b90",
        },
    },
    typography: {
        useNextVariants: true,
    }
});

const styles = theme => ({
    paper: {
        margin: "auto",
        marginTop: theme.spacing.unit * 10,
        width: "90%"
    },
    paperSmall: {
        marginTop: theme.spacing.unit * 2,
        width: "95%",
        margin: "auto"
    },
    spacer: {
        width: 1,
        height: theme.spacing.unit * 3,
    }
});

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            useEmoji: true
        }
    }

    toggleEmoji = (e) => {
        e.preventDefault();
        this.setState({useEmoji: !this.state.useEmoji});
    };

    displayEmoji = (emoji, alt) => {
        if (alt === "") {
            return this.state.useEmoji ? <span>{emoji}</span> : "";
        } else {
            return this.state.useEmoji ? <span>{emoji}</span> : alt;
        }
    };

    stringEmoji = (emoji, alt) => {
        return this.state.useEmoji ? emoji : alt;
    };

    paperWrapper = (content) => {
        return (
            <div>
                <Hidden xsDown>
                    <Paper className={this.props.classes.paper} elevation={12} square={true}>
                        <Header toggleEmoji={this.toggleEmoji} emoji={this.displayEmoji} />
                        {content}
                    </Paper>
                </Hidden>
                <Hidden smUp>
                    <Paper className={this.props.classes.paperSmall} elevation={20} square={true}>
                        <div className={this.props.classes.spacer}> </div>
                        <Header toggleEmoji={this.toggleEmoji} emoji={this.displayEmoji} />
                        {content}
                    </Paper>
                </Hidden>
            </div>
        );
    };

    render() {
        return (
            <Router>
                <div>
                    <MuiThemeProvider theme={muiTheme}>
                        <div>
                            <Route path={"/"} exact render={() => this.paperWrapper(<About emoji={this.displayEmoji} />)} />
                            <Route path={"/resume/"} exact render={() => this.paperWrapper(<Resume emoji={this.displayEmoji} sEmoji={this.stringEmoji}/>)} />
                        </div>
                    </MuiThemeProvider>
                </div>
            </Router>
        );
    }
}

export default compose(withStyles(styles), withWidth())(App);
