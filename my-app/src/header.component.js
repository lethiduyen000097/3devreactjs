import { AppBar, CssBaseline, Typography, Toolbar } from "@material-ui/core";

const Header = () => {
    return(
        <div>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <Typography align='center' variant='h2'>
                        User List
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>   
    )
}

export default Header