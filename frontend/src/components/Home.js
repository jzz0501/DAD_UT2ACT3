import { Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { loginActions } from "../store/storelogin"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Home() {
    const userData = useSelector(state => state.login)
    const username = userData.username
    const userRol = userData.userRol
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoggedin = userData.isAutenticated
    useEffect(() => {
        if(!isLoggedin) {
            navigate('/')
        }
    }, [isLoggedin, navigate])
    return (
        <div>
            <h1>pagina de home</h1>
            <Typography>nombre de usuario: {username} rol de usuario: {userRol}</Typography>
            <Button onClick={ () => {
                dispatch(loginActions.logout())
                navigate('/')
            }}>volver</Button>
        </div>
    )
}