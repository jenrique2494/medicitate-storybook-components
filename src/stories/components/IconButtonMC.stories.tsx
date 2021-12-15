
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButtonMC from '../../components/IconButtonMC';
import DeleteIcon from '@mui/icons-material/Delete';


export default {
    title:'Component/IconButtonMC',
    component:IconButtonMC,
    argTypes:{
        color:{control: 'select'},
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    }
} as ComponentMeta<typeof IconButtonMC >

const  Template: ComponentStory<typeof IconButtonMC > = (args)=><IconButtonMC {...args} />;

export const Default = Template.bind({});

Default.args = {
    Icon: <DeleteIcon />
}

export const Primary = Template.bind({});

Primary.args = {
    Icon: <DeleteIcon />,
    color:'primary'
}

export const Secondary = Template.bind({});

Secondary.args = {
    Icon: <DeleteIcon />,
    color:'secondary'
}

export const small = Template.bind({});

small.args = {
    Icon: <DeleteIcon />,
    size:'small',
}

export const medium = Template.bind({});

medium.args = {
    Icon: <DeleteIcon />,
    size:'medium',
}


