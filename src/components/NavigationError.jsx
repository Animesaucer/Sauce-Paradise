import React  from "react";
import { useParams } from "react-router-dom"
import {imagesList} from './../data/imagesList'
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import {Route, useNavigate} from 'react-router-dom';

export default function NavigationError() 
{
        const params = useParams()

        const found = imagesList.find(element => element.id === params.id);

        const navigate = useNavigate();

        if (found === undefined) 
        {
                navigate("/")

                console.log("No images found")
                swal
                (
                        {
                                title: "Erreur 404",
                                text: "Mauvais ID entré ou la page n'est plus disponible",
                                button: "Retour à l'accueil",
                                className: "alert",
                        }
                );

                return <Navigate to="/" />;
        }

        return 
}

