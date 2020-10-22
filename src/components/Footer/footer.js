import React from "react";
import {Container, Grid, Typography, Button, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";

const Footer = () => {
    const styles={
        textDecoration: "none",
        width: "100%",
        color: "white",
        listStyle: "none",
    }

    const useStyles = makeStyles(theme => {
        return {
            root: {
                paddingTop: 32,

            },
            main: {
                backgroundColor: "black",
                paddingTop: 32,
                paddingBottom: 16
            },
            link: {
                textDecoration: "none",
                width: "100%",
                color: "white"
            },
            button: {
                textAlign: "left",
                color: "white",
                fontSize: 12
            },
            title: {
                color: "white"
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            copyright: {
                paddingTop: 16,
                paddingBottom: 16,
                backgroundColor: "ash"
            },
            location: {
                color: "white"
            }
        }
    });

    const classes = useStyles();

    return (   
        <div>
            <div className={classes.main}>
                <Container>
                    <Grid container={true} spacing={5} justify="space-between">
                        <Grid item={true} xs={12} md={4}>
                            <Typography className={classes.title}>Links</Typography>
                            <Divider variant="fullWidth" className={classes.divider}/>
                            <Button fullWidth={true} variant="text" size="small" className={classes.button}>
                                <Link className={classes.link} to="/">
                                    Home
                                </Link>
                            </Button>
                            <Button fullWidth={true} variant="text" size="small" className={classes.button}>
                                <li style={styles}>
                                    <a href="#section_1" style={{color:'#333333'}}>About Us</a>
                                </li>
                            </Button>
                            <Button fullWidth={true} variant="text" size="small" className={classes.button}>
                                <li style={styles}>
                                    <a href="#section_2" style={{color:'#333333'}}>Gallery</a>
                                </li>
                            </Button>
                            <Button fullWidth={true} variant="text" size="small" className={classes.button}>
                                <li style={styles}>
                                    <a href="#section_3" style={{color:'#333333'}}>Services</a>
                                </li>
                            </Button>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Typography className={classes.title}>Contact Us</Typography>
                            <Divider variant="fullWidth" className={classes.divider}/>
                            <Typography
                                gutterBottom={true}
                                className={classes.location}
                                variant="body1">
                                Tarkwa, Western Region Ghana Digital Address
                            </Typography>
                            <Typography
                                gutterBottom={true}
                                className={classes.location}
                                variant="body1">
                                P.O Box 19540 Accra North Ghana
                            </Typography>
                            <Typography
                                gutterBottom={true}
                                className={classes.location}
                                variant="body1">
                                +233 244132705 | +233 264132705
                            </Typography>
                            <Typography
                                gutterBottom={true}
                                className={classes.location}
                                variant="body1">
                                joseph.wilson-sey@jaseyminingservices.com | jaseyminingservices@gmail.com
                            </Typography>
                        </Grid>

                        <Grid item={true} xs={12} md={4}>
                            <Typography className={classes.title}>Careers</Typography>
                            <Divider variant="fullWidth" className={classes.divider}/>
                            <Typography
                                className={classes.location}
                                gutterBottom={true}
                                variant="body1">
                                Presently, there are no employment opportunities. However, we believe in working with brilliant
                                minds seeking to support our company's objectives and mission. Kindly send us your profile and
                                contact details, and we will reach you as and when opportunities arise. Thank you.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className={classes.copyright}>
                <Container>
                    <Typography variant="body1" align="center">
                        Copyright &copy; 2015- 2020 All rights reserved | This site was developed by <span className="text-success">Sterde</span>
                    </Typography>
                </Container>
            </div>
        </div>
    
    )
}

export default Footer;
