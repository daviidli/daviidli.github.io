import React from "react";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const styles = theme => ({
    titleContainer: {
        marginTop: theme.spacing.unit * 2
    },
    title: {
        marginBottom: theme.spacing.unit
    },
    desc: {
        marginTop: 0,
        marginLeft: -theme.spacing.unit * 2
    },
    subtitle: {
        fontFamily: '"Roboto Mono", monospace',
        marginBottom: theme.spacing.unit
    },
    link: {
        textDecoration: "none",
        color: "#000",
        backgroundColor: "#eee",
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingTop: theme.spacing.unit / 2,
        paddingBottom: theme.spacing.unit / 2,
    },
    bullet: {
        color: "#e66767"
    }
});

const title = (t, props) => {
    if (t.url !== "") {
        return (
            <Link href={t.url} className={props.classes.link} underline={"hover"}>{props.emoji(t.emoji, "")}{t.text}</Link>
        );
    } else {
        return (<span>{props.emoji(t.emoji, "")}{t.text}</span>);
    }
};

function ProjectItem(props) {
    return (
        <div className={props.classes.titleContainer}>
            {props.hasOwnProperty("title") && (
                <Typography variant={window.innerWidth > 600 ? "h6" : "body1"} component="p" className={props.classes.title}>
                    {title(props.title, props)}
                </Typography>
            )}
            {props.hasOwnProperty("subtitle") && (
                <Typography variant={"subtitle2"} component="p" className={props.classes.subtitle}>
                    <b>{props.subtitle}</b>
                </Typography>
            )}
            {props.hasOwnProperty("desc") && (
                <ul className={props.classes.desc}>
                    {props.desc.map((d, i) => (
                        <li key={i} className={props.classes.bullet}>
                            <Typography variant={"body1"} component="p">
                                {d}
                            </Typography>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default withStyles(styles)(ProjectItem);