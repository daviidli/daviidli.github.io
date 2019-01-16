import React from "react";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    headingContainer: {
        marginTop: theme.spacing.unit * 2
    },
    date: {
        marginLeft: theme.spacing.unit * 3
    },
    line: {
        height: 1,
        backgroundColor: "#596275"
    },
    desc: {
        marginTop: 0,
        marginLeft: -theme.spacing.unit * 2
    },
    bullet: {
        color: "#e66767"
    }
});

function ResumeItem(props) {
    return (
        <div>
            <Typography variant={"h6"} gutterBottom>
                <b>{props.title}</b>
            </Typography>
            <div className={props.classes.line} style={{width: props.width}}> </div>
            {props.data.map((item, i) => (
                <div key={i} className={props.classes.headingContainer}>
                    {item.hasOwnProperty("subHeading") && (
                        <Typography variant={window.innerWidth > 600 ? "h6" : "subtitle1"} component="p">
                            {item.subHeading}
                        </Typography>
                    )}
                    <Typography variant={window.innerWidth > 600 ? "h5" : "h6"} component="p">
                        {item.heading}
                    </Typography>
                    {item.hasOwnProperty("date") && (
                        <Typography variant={"subtitle1"} component="p" className={props.classes.date}>
                            {item.date}
                        </Typography>
                    )}
                    {item.hasOwnProperty("desc") && (
                        <ul className={props.classes.desc}>
                            {item.desc.map((d, i) => (
                                <li key={i} className={props.classes.bullet}>
                                    <Typography variant={"body1"} component="p">
                                        {d}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default withStyles(styles)(ResumeItem);