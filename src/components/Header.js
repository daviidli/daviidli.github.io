import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
    container: {
        marginTop: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 10
    },
    containerSmall: {
        marginTop: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    },
    spacer: {
        height: theme.spacing.unit * 8,
        width: 1
    },
    button: {
        fontSize: "1em",
        textDecoration: "none",
        color: "#000"
    }
});

class Header extends Component {
    render() {
        return (
            <div className={window.innerWidth > 600 ? this.props.classes.container : this.props.classes.containerSmall}>
                <Hidden xsDown>
                    <div className={this.props.classes.spacer}>

                    </div>
                </Hidden>
                <Grid
                    container
                    direction={"row"}
                    justify={"flex-end"}
                    alignItems={"center"}
                    spacing={window.innerWidth <= 600 ? 16 : 32}
                >
                    <Grid item>
                        <IconButton color="primary" className={this.props.classes.button}>
                            <Link to={"/"} className={this.props.classes.button}>{this.props.emoji("👤", "About")}</Link>
                        </IconButton >
                    </Grid>
                    <Grid item>
                        <IconButton color="primary" className={this.props.classes.button}>
                            <Link to={"/resume/"} className={this.props.classes.button}>{this.props.emoji("🧾", "Resume")}</Link>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color="primary" className={this.props.classes.button}>
                            <a href={"http://github.com/daviidli"} className={this.props.classes.button}>{this.props.emoji("💻", "Github")}</a>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton color="primary" className={this.props.classes.button} onClick={this.props.toggleEmoji}>
                            {this.props.emoji("😎", "😒")}
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
