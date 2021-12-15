
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomCard from "../../components/Card";


export default {
  title: "Component/Card",
  component: CustomCard,
}as ComponentMeta<typeof CustomCard>;

const Template : ComponentStory<typeof CustomCard>= (args) => <CustomCard {...args} />;
export const CardComponent = Template.bind({});
CardComponent.args = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
  thumbnail:
    "https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg",
  tag: "nature",
  targetlabel: "Learn More",
  altText: "Nature",
};