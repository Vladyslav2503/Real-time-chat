import { Box, Button, Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '..'
import firebase from 'firebase/compat/app';

const Login = () => {
  const {auth} = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithRedirect(provider)
    console.log(user);
  }
  return (
    <Container>
      <Grid container
        style={{ height: window.innerHeight - 50 }}
        alignItems={'center'}
        justifyContent={'center'}
      >
            <Grid style={{width:400, background: 'lightgray'}}
              container
              alignItems={'center'}
              direction={'column'}
            >
               <Box p={5}>
                  <Button onClick={login} variant='outlined' >Увійти за допомогою Google</Button>
               </Box>
            </Grid>
      </Grid>
    </Container>
  )
}

export default Login