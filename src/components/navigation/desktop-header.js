import React, {useEffect, useState} from "react";
import ScrollspyNav from "react-scrollspy-nav";
import {
    Grid,
    Toolbar,
    Button,
} from "@material-ui/core";

import {Link, useRouteMatch} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const DesktopHeader = () => {
    const styles = {
        listStyle: 'none',
        textDecoration: 'none',
    }

    const useStyles = makeStyles(theme => {
        return {
            brand: {
                fontSize: 20,
                textDecoration: "none",
                color: "white",
                fontStyle: "italic",
                textShadow: '15px 15px 2px #cccccc'
            },
            up: {
                color: "white",
            },
            down: {
                color: "black"
            },
            link: {
                textDecoration: "none",
                color: "#ffffff",
                textTransform: "uppercase",
                width: "100%",
                '&:hover': {
                    color: "#333333",
                }
            },
            button: {
                backgroundColor: "transparent"
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            card: {
                width: 250,
                backgroundColor: "rgba(0, 0, 0,0.7)"
            },
            icon: {
                color: "white",
                '&:hover': {
                    cursor: "pointer",
                    color: "#cccccc"
                }
            }
        }
    });

    const classes = useStyles();

    const {path} = useRouteMatch();

    const [active, setActive] = useState("");

    const handleLinkClicked = (event, link) => {
        setActive(link);
    }

    useEffect(() => {
        setActive(path);
    }, [path])

    return (
        <ScrollspyNav
                    scrollTargetIds={["section_1"]}
                    offset={-20}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
        <Toolbar variant="regular">
            <Grid container={true} justify="space-around" alignItems="center">
                <Grid item={true} lg={3} container={true} >
                        <Link
                            className={`${classes.brand}`}
                              to="/">
                            <img
                                width={50}
                                height={50}
                                alt=""
                                src={`images/logo1.jpg`}
                            />
                        </Link>
                </Grid>

                <Grid
                    item={true}
                    container={true}
                    lg={8}
                    justify="flex-end"
                    alignItems="center"
                    spacing={2}>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                            <Link
                                onClick={(e) => handleLinkClicked(e, '/')}
                                className={`link ${active === '/' ? 'active' : null}`}
                                to="/">
                                Home
                            </Link>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                    <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                            <li className="nav-item" style={styles}>
                               <a href="#section_1">About Us</a>
                            </li>
                        </Button>
                            
                    </Grid>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                            <li className="nav-item" style={styles}>
                               <a href="#section_2">Gallery</a>
                            </li>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                           <li className="nav-item" style={styles}>
                               <a href="#section_3">Services</a>
                            </li>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                           <li className="nav-item" style={styles}>
                               <a href="#section_4">Contact</a>
                            </li>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    </ScrollspyNav>   
    )
}

export default DesktopHeader;
