
import { IconButton, ThemeProvider } from '@mui/material';
import { themeTeal } from '../themes/themeTeal';




export interface MyLabelProps{
    /**
     * El nombre del boton que vas a usar
    */
    Icon: JSX.Element | undefined
    /**
     * El tamaño que vas a usar en el boton
    */
    size:'small' | 'medium';
    /**
     * El color del label
    */
    color?:'primary' | 'secondary' | 'default' | 'inherit'
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
    Icon=undefined,
    size='medium',
    color='default',
    fontColor,
    backgroundColor=''
    }:MyLabelProps) => {
    return (
        <ThemeProvider theme={themeTeal}>
            <IconButton size={size} color={color} style={{color:fontColor,backgroundColor}} >
                {Icon}
            </IconButton >
        </ThemeProvider>
    )
}

export default ButtonMC;