import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { themeTeal } from "../themes/themeTeal";
import { themeTealDark } from '../themes/themeTealDark';

export interface MyLabelProps{
    /**
     * El nombre del boton que vas a usar
    */
    label:string;
    /**
     * El tamaño que vas a usar en el boton
    */
    size:'small' | 'medium' | 'large';
    /**
     * El color del label
    */
    color?:"primary" | "secondary" | "inherit" | "success" | "error" | "info" | "warning" | undefined
    /**
     * Variante del boton
    */
    variant?:'text' | 'contained' | 'outlined'
    /**
     * El color de la letra
    */
    fontColor?:string;
    /**
     * El color del fondo
    */
    backgroundColor?:string;

}

export const ButtonMC =  ({
    label='no label',
    size='medium',
    color='primary',
    variant='contained',
    fontColor,
    backgroundColor=''
    }:MyLabelProps) => {
    return (
        <ThemeProvider theme={themeTeal} >
            <Button variant={variant} size={size} color={color} style={{color:fontColor,backgroundColor}} >
                {label}
            </Button>
        </ThemeProvider>
    )
}

export default ButtonMC;