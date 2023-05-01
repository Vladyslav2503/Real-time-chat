import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material'
import React, { useContext } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..'

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)
  return (

    <AppBar color={'secondary'} position="static">
      <Toolbar variant='dense' >
        <Grid container justifyContent={'flex-end'} >
          {user ?
            <Link to={LOGIN_ROUTE}>
              <Button onClick={() => auth.signOut()} color="inherit">Вихід</Button>
            </Link>
            :
            <Link>
              <Button color="inherit">Вхід</Button>
            </Link>
          }


        </Grid>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar