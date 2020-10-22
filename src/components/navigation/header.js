import React from "react";
import {AppBar, Hidden} from "@material-ui/core";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = ({handleOpen}) => {

    return (
        <AppBar variant="elevation" elevation={1} square={true} position="fixed" color="default">
            <Hidden mdDown={true}>
                <DesktopHeader/>
            </Hidden>
            <Hidden lgUp={true}>
                <MobileHeader handleOpen={handleOpen}/>
            </Hidden>
        </AppBar>
    )
}

export default Header;
