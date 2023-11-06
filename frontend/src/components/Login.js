//Importar libreria de materia ui
import { Avatar, Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
//Importar el hook useState para que la funcion componente se puede utilizar state
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { loginActions } from '../store/storelogin'

export default function Login() {

    //Inicializar el estado
    const [text,setText] = useState({username:'', password:''})

    const dispatch = useDispatch()

    const navigate = useNavigate()

    return (
        
        <Container align='center'>

            <Typography variant='h3' component='h3'>LogIn</Typography>

            <Grid container width={400} marginTop={2}>
                <Grid item xs={12}>
                    <Paper elevation={4}>
                        <Avatar/>
                        <Box padding={2}>
                            {/* TextField para el usuario introducir nombre de login */}
                            <TextField 
                                type='username'
                                placeholder='username'
                                onChange={(event) => setText({...text, username: event.target.value})}>
                            </TextField>
                            <br/>
                            {/* TextField para el usuario introducir contraseña de login */}
                            <TextField 
                                type='password'
                                placeholder='password'
                                style={{marginTop: 10}}
                                onChange={(event) => setText({...text, password: event.target.value})}>
                            </TextField>
                            <br/>
                            {/* Boton para que el usuario acceder al datos de cuenta (nombre y rol)*/}
                            {/* Si algun campo vacio o no se encuentra esta cuenta (devuelve un undefined) sale un alert con texto, si existe la cuenta pues mostrar datos en consola */}
                            <Button variant='contained'
                                    style={{marginTop: 10}}
                                    onClick={() => {
                                        if(!(text.username === ''||text.password === '')) {
                                            fetch(`http://localhost:3030/login?user=${text.username}&password=${text.password}`)
                                            .then(res => res.json())
                                            .then(json => {
                                                if(json.data.nombre!==undefined) {
                                                    //console.log(json)
                                                    //console.log(`nombre: ${json.data.nombre}`)
                                                    //console.log(`rol: ${json.data.rol}`)
                                                    dispatch(loginActions.login({
                                                        name: json.data.nombre,
                                                        rol: json.data.rol
                                                    }))
                                                    navigate('/home')
                                                } else {
                                                    alert('usuario o password incorrecto')
                                                }
                                            })
                                        } else {
                                            alert('campo vacio')
                                        }
                                    }}
                            >Acceder</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    )
}