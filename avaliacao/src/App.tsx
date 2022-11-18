import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Alert, CircularProgress, InputAdornment, Link} from "@mui/material";
import {RotatingLines} from 'react-loader-spinner'
import Card from './components/Card'
import Search from "./components/Search";
import {useEffect, useState} from "react";
import {findUser} from "./api";

const theme = createTheme();

export default function App() {
    const [loading, setLoading] = useState(false)
    const [ user, setUser ] = useState([])
    const [ search, setSearch ] = useState('')

    const handleSubmit = async () => {
        try{
            setUser(await findUser(search))
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 2000) // só consegui fazer assim com tempo, pois nao usei use Effect entao nao consegui
        }catch (err){
            console.log(err)
            alert("Campo de Busca vazio, ou Usuário nao Encontrado!")
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Grid container spacing="20px" sx={{ padding: 5 }}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <GitHubIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                LOCALIZADOR DE PERFIS
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="search"
                                id="search"
                                label="Buscar"
                                name="search"
                                autoComplete="search"
                                autoFocus
                                onChange={(e) => setSearch(e.target.value)}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                onClick={handleSubmit}
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Buscar
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {loading ? (<CircularProgress/>) :(<Card key={user.id} user={user}/>)}
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}