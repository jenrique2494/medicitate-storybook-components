
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBar from "../../components/navBar/NavBar";




export default {
  title: "Component/NavBar",
  component: NavBar,
  argTypes:{
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
}
}as ComponentMeta<typeof NavBar>;

const Template : ComponentStory<typeof NavBar>= (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
    color:'primary'
};

export const Secondary = Template.bind({});

Secondary.args = {
    color:'secondary'
};

export const DarkMode = Template.bind({});

DarkMode.args = {
    darkMode:true,
};