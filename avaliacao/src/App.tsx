import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "@mui/material";

const theme = createTheme();

export default function Card() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={12} md={12} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
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

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Buscar
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'grey',
                        }}
                    >



                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <GitHubIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            NOME USUARIO
                        </Typography>
                            <Link>
                                <Box
                                    sx={{
                                        my: 2,
                                        mx: 2,
                                        display: 'flex',
                                        alignItems:'center',
                                    }}
                                >
                                Perfil no GitHub <ArrowCircleRightIcon/>
                                </Box>
                            </Link>


                    </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}