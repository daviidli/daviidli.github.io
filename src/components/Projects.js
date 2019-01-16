import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProjectItem from "./ProjectItem";

const styles = theme => ({
    container: {
        marginTop: theme.spacing.unit * 10,
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 10
    },
    containerSmall: {
        marginTop: theme.spacing.unit * 10,
    },
    line: {
        height: 1,
        backgroundColor: "#596275",
        width: 125
    },
});

function Projects(props) {
    return (
        <div className={window.innerWidth > 600 ? props.classes.container : props.classes.containerSmall}>
            <Typography variant={"h6"} gutterBottom>
                <b>{props.emoji("🖥 ", "")}projects</b>
            </Typography>
            <div className={props.classes.line} style={{width: props.width}}> </div>
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignItems={"flex-start"}
                spacing={0}
            >
                <Grid item>
                    <ProjectItem
                        emoji={props.emoji}
                        title={{url: "http://github.com/daviidli/summary", text: "summary", emoji: "📖 "}}
                        subtitle={"Typescript, ReactJS"}
                        desc={[
                            "Extractive text summarizer to split and rank sentences to create concise summaries",
                            "Summarizes the given text using both TextRank and RAKE to allow for comparison between the two algorithms"
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectItem
                        emoji={props.emoji}
                        title={{url: "http://github.com/daviidli/darts", text: "darts", emoji: "🎯 "}}
                        subtitle={"Typescript, ReactJS, C/C++"}
                        desc={[
                            "Dart game for recording and playing dart games and storing player analytics",
                            "Dart board is connected with Arduino to communicate with computer"
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectItem
                        emoji={props.emoji}
                        title={{url: "", text: "insightUBC", emoji: "💯 "}}
                        subtitle={"Typescript, Node.js, HTML, CSS"}
                        desc={[
                            "Website and Node.js server that allows for the querying of UBC course and building information with specified queries",
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectItem
                        emoji={props.emoji}
                        title={{url: "http://github.com/daviidli/BestBuy", text: "BestBuy customer service app", emoji: "📱 "}}
                        subtitle={"Java"}
                        desc={[
                            "Android app for running on kiosk tablets in BestBuy to give customers a simple way of viewing the catalog or requesting help",
                            "Utilizes Firebase’s Realtime database to structure, save and sync customer data in a queue for employees to view in their employee app"
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ProjectItem
                        emoji={props.emoji}
                        title={{url: "http://github.com/daviidli/Smilee", text: "smilee", emoji: "😁 "}}
                        subtitle={"C#, Unity"}
                        desc={[
                            "Platformer game that uses Microsoft’s Emotion API for detecting emotions during gameplay to give their character different special abilities",
                            "Uses a singleton design pattern for the game controller and procedurally generated obstacles during gameplay"
                        ]}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Projects);
