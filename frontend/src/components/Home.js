import { Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { loginActions } from "../store/storelogin"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Home() {

    //Utilizar hook useSelector para obtener datos de store (datos de estado actual)
    const userData = useSelector(state => state.login)
    console.log(userData)

    const username = userData.username
    const userRol = userData.userRol
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedin = userData.isAutenticated
    useEffect(() => {
        if(!isLoggedin) {
            //Volver a la pagina de index
            navigate('/')
        }
    }, [isLoggedin, navigate])

    return (
        <div>
            <Typography variant="h1">Pagina de home</Typography>
            <Typography variant="h2">Nombre de usuario: {username} | Rol de usuario: {userRol}</Typography>
            <Button variant="contained" onClick={ () => {
                //Realizar accion de logout
                dispatch(loginActions.logout())
                navigate('/')
            }}>volver</Button>
        </div>
    )
}