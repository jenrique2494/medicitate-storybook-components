
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ButtonMC from '../../components/ButtonMC';


export default {
    title:'Component/ButtonMC',
    component:ButtonMC,
    argTypes:{
        color:{control: 'select'},
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof ButtonMC >

const  Template: ComponentStory<typeof ButtonMC > = (args)=><ButtonMC {...args} />;

export const Default = Template.bind({});

Default.args = {
}

export const Primary = Template.bind({});

Primary.args = {
    color:'primary'
}

export const Secondary = Template.bind({});

Secondary.args = {
    color:'secondary'
}

export const small = Template.bind({});

small.args = {
    size:'small',
}

export const medium = Template.bind({});

medium.args = {
    size:'medium',
}


export const large = Template.bind({});

large.args = {
    size:'large',
}

export const Text = Template.bind({});

Text.args = {
    variant:'text',
}

export const Outline = Template.bind({});

Outline.args = {
    variant:'outlined',
}
