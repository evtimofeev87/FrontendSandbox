import MyText from '../../lib-components/my-text';

export default {
  title: 'Main/Text',
  component: MyText,
  argTypes: {
    text: {
      name: 'text',
      type: { name: 'string' },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyText },
  template: '<my-text :text="text" />',
});

export const MyTextEx1 = Template.bind({});
MyTextEx1.args = {
  text: 'test 1',
};

export const MyTextEx2 = Template.bind({});
MyTextEx2.args = {
  text: 'test 2',
};
