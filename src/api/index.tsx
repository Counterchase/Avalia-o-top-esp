
//https://api.github.com/users/<nome_usuario>

import axios from 'axios'
import {useEffect} from "react";
import {Alert} from "@mui/material";

const index = axios.create(
    {
        baseURL:'https://api.github.com'
    }
)

export async function  findUser(user){
        let response = await index.get('users/'+user)
        console.log("passou api")
    console.log(response.data)
        return response.data
}