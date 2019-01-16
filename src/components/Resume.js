import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ResumeItem from "./ResumeItem";

const styles = theme => ({
    container: {
        marginTop: theme.spacing.unit * 5,
        marginLeft: theme.spacing.unit * 20,
        marginRight: theme.spacing.unit * 20,
        paddingBottom: theme.spacing.unit * 5
    },
    containerSmall: {
        marginTop: theme.spacing.unit * 5,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3
    }
});

function Resume(props) {
    return (
        <div className={window.innerWidth > 600 ? props.classes.container : props.classes.containerSmall}>
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignItems={"flex-start"}
                spacing={40}
            >
                <Grid item>
                    <ResumeItem
                        width={115}
                        title={props.sEmoji("📞 ", "") + "contact"}
                        data={[
                            { subHeading: props.sEmoji("✉", "mail") + ": d.li.2247@gmail.com" }
                        ]}
                    />
                </Grid>
                <Grid item>
                    <ResumeItem
                        width={145}
                        title={props.sEmoji("🎒 ", "") + "education"}
                        data={[{
                            heading: "Business and Computer Science",
                            subHeading: "University of British Columbia",
                            date: "Year 3 – expected" + props.sEmoji(" 🎓", "") + ": May 2020"
                        }]}
                    />
                </Grid>
                <Grid item>
                    <ResumeItem
                        width={200}
                        title={props.sEmoji("🏢 ", "") + "work experience"}
                        data={[{
                            heading: "Software Development Engineer",
                            subHeading: "Sierra Wireless" + props.sEmoji(" 📶", ""),
                            date: "Sep 2017 – May 2018",
                            desc: [
                                "Implemented features and added functionality to Sierra’s hardware API for Windows",
                                "Designed and implemented automated static code analysis on Sierra servers during nightly builds of software packages",
                                "Primarily worked in C++ and C# on Visual Studios"
                            ]
                        }]}
                    />
                </Grid>
                <Grid item>
                    <ResumeItem
                        width={265}
                        title={props.sEmoji("💾 ", "") + "technological expertise"}
                        data={[
                            {
                                heading: "Languages",
                                desc: [
                                    props.sEmoji("💪 ", "") + "Proficient: C++, Java, JavaScript, Typescript",
                                    props.sEmoji("🤔 ", "") + "Working knowledge: C#, C, Python, HTML, CSS",
                                ]
                            }, {
                                heading: "Technologies",
                                desc: [
                                    props.sEmoji("💪 ", "") + "Proficient: Node.js, ReactJS, MySQL, REST, Git",
                                    props.sEmoji("🤔 ", "") + "Working knowledge: Unity, Firebase, SVN"
                                ]
                            }
                        ]}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Resume);
