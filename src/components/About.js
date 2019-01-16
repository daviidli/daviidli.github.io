import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Projects from "./Projects";

const styles = theme => ({
    mainText: {
        margin: "auto",
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 10,
        fontSize: 24,
        textAlign: "left",
        width: "70%",
        lineHeight: "100%"
    },
    mainTextSmall: {
        margin: "auto",
        marginTop: theme.spacing.unit * 10,
        fontSize: 20,
        textAlign: "left",
        width: "100%",
        lineHeight: "125%"
    },
    innerContainer: {
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit * 5
    },
    innerContainerSmall: {
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3
    }
});

function About(props) {
    return (
        <div className={window.innerWidth > 600 ? props.classes.innerContainer : props.classes.innerContainerSmall}>
            <div className={window.innerWidth > 600 ? props.classes.mainText : props.classes.mainTextSmall}>
                <p>Hey, my name is David Li.</p>
                <p>I'm a student in Vancouver{props.emoji(" 🍁", "")}, studying Business and Computer Science at{props.emoji(" 🏫", "")} UBC.</p>
            </div>
            <Projects emoji={props.emoji}/>
        </div>
    );
}

export default withStyles(styles)(About);
