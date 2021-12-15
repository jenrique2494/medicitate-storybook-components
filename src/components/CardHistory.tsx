import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton, ThemeProvider } from '@mui/material';
import { themeTeal } from '../themes/themeTeal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
import { themeTealDark } from '../themes/themeTealDark';

import '../styles/card-history.css';

export interface MyCardHistoryProps{
    /**
     * El titulo de la historia
    */
    title:string;
    /**
     * El titulo en que se creo la historia
    */
    date?:string;
    /**
     * Breve Descripcion de la historia
    */
    description?:string
    /**
     * Variante de la tarjeta
    */
    variant?:'elevation' | 'outlined'
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

export const CardHistory=({
    title='',
    date='medium',
    description='primary',
    variant,
    fontColor,
    backgroundColor='',
    darkMode=false,
    }:MyCardHistoryProps) => {
    return (
        <ThemeProvider theme={(!darkMode)?themeTeal:themeTealDark} >
            <Card className="card-history" variant={variant} sx={{ maxWidth: 345,color:fontColor,backgroundColor }} >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {date}
                        </Typography>
                        <Typography variant="body2">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{display:'flex',flexDirection:'column'}}>
                    <IconButton size="large" className='icon-button-extralarge'>
                        <HistoryIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </ThemeProvider>
  );
}
export default CardHistory;