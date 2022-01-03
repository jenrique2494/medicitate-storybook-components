
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardPacient from '../../components/CardPacient';



export default {
  title: "Component/CardPacient",
  component: CardPacient,
  argTypes:{
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
}
}as ComponentMeta<typeof CardPacient>;

const Template : ComponentStory<typeof CardPacient>= (args) => <CardPacient {...args} />;

export const Default = Template.bind({});

Default.args = {
    name: "Ignacio Rondon",
    date:"15/12/2021",
    title: "Neumonia Leve",
    description: "Vino por un chequeo anual",
    state:'En Proceso',
    avatarNoContent:'../assets/avatarNoContent.svg'
};

export const Outlined = Template.bind({});

Outlined.args = {
    name: "Ignacio Rondon",
    date:"15/12/2021",
    title: "Neumonia Leve",
    description: "Vino por un chequeo anual",
    variant:"outlined",
    state:'En Proceso',
    avatarNoContent:'../assets/avatarNoContent.svg'
};

export const Elevation = Template.bind({});

Elevation.args = {
    name: "Ignacio Rondon",
    date:"15/12/2021",
    title: "Neumonia Leve",
    description: "Vino por un chequeo anual",
    variant:'elevation',
    state:'Finalizado',
    avatarNoContent:'../assets/avatarNoContent.svg'
};

export const DarkMode = Template.bind({});

DarkMode.args = {
    name: "Ignacio Rondon",
    date:"15/12/2021",
    title: "Neumonia Leve",
    description: "Vino por un chequeo anual",
    variant:'elevation',
    state:'En Proceso',
    darkMode:true,
    avatarNoContent:'../assets/avatarNoContent.svg'
};