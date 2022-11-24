import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import {Link} from "@mui/material";
import Box from "@mui/material/Box";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import * as React from "react";
import {useEffect, useState} from "react";
import {findUser} from "../../api";

type CardProps ={
    user:{
        name: string,
        avatar_url: string,
        html_url: string,
    }
}



export default function Card({user}:CardProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'secondary.main',
                borderRadius: 3,
                height: '100%',
                padding: 2,
                color: 'white',
                position:'relative'

            }}
        >
            <Avatar src={user.avatar_url} sx={{
                m: 1,
                bgcolor: 'primary.main',
                width: '120px',
                height: '120px',
            }}/>
            <Typography component="h1" variant="h5">
                {user.name ? ( user.name ):( "Nome do Usuário" )}
            </Typography>
            <Link href={user.html_url ? user.html_url : ('https://github.com')} >
                <Box
                    sx={{
                        bottom: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Typography>Perfil no GitHub</Typography>
                    <ArrowCircleRightIcon/>
                </Box>
            </Link>
        </Box>
    )
}