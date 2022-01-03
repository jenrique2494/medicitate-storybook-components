import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar,  CardActionArea, CardActions, CardHeader, IconButton, ThemeProvider } from '@mui/material';
import { themeTeal } from '../themes/themeTeal';
import { themeTealDark } from '../themes/themeTealDark';

import { MoreVert } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

import '../styles/general.css'

export interface MyCardPacientProps{
    /**
     * El nombre del Paciente
    */
    name:string;
    /**
     * El fecha en que se creo la ultima historia
    */
    date?:string;
    /**
     * El src de la imagen
    */
    imageSrc?:string;
    /**
     * El src de la imagen no content
    */
    avatarNoContent:string;
    /**
     * El titulo de la historia
    */
    title:string;
    /**
     * Breve Descripcion de la historia
    */
    description?:string
    /**
     * Variante de la tarjeta
    */
    variant?:'elevation' | 'outlined'
    /**
     * Estado de la historia
    */
    state?:'En Proceso' | 'Finalizado'
    /**
     * modo oscuro
    */
    darkMode?:boolean;
    /**
     * El color de la letra
    */
    fontColor?:string;
    /**
     * El color del fondo
    */
    backgroundColor?:string;

}

export const CardPacient=({
    name='',
    date='medium',
    imageSrc,
    avatarNoContent,
    title='',
    description='primary',
    variant,
    fontColor,
    backgroundColor='',
    darkMode=false,
    state,
    }:MyCardPacientProps) => {
    return (
        <ThemeProvider theme={(!darkMode)?themeTeal:themeTealDark} >
            <Card className="card-pacient" variant={variant} sx={{ maxWidth: 345,color:fontColor,backgroundColor }} >
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                        {name.substring(0,1)}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                    }
                    title={name}
                    subheader={date}
                />
                <CardActionArea>
                <CardMedia
                    component="img"
                    image={(imageSrc)?imageSrc:avatarNoContent}
                    alt="green iguana"
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {date}
                        </Typography>
                        {state && <Typography color={(state==='Finalizado')?"#2e7d32":"#ed6c02"} >
                            {state}
                        </Typography>}
                        <Typography variant="body2">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
  );
}
export default CardPacient;