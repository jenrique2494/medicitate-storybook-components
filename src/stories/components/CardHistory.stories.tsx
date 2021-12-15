
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardHistory from '../../components/CardHistory';



export default {
  title: "Component/CardHistory",
  component: CardHistory,
  argTypes:{
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
}
}as ComponentMeta<typeof CardHistory>;

const Template : ComponentStory<typeof CardHistory>= (args) => <CardHistory {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Historia Medica",
  date:"15/12/2021",
  description: "Vino por un chequeo anual",
};

export const Outlined = Template.bind({});

Outlined.args = {
  title: "Historia Medica",
  date:"15/12/2021",
  description: "Vino por un chequeo anual",
  variant:"outlined"
};

export const Elevation = Template.bind({});

Elevation.args = {
  title: "Historia Medica",
  date:"15/12/2021",
  description: "Vino por un chequeo anual",
  variant:'elevation'
};

export const DarkMode = Template.bind({});

DarkMode.args = {
  title: "Historia Medica",
  date:"15/12/2021",
  description: "Vino por un chequeo anual",
  variant:'elevation',
  darkMode:true,
};