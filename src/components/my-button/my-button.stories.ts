import './my-button.ts';

export default {
  title: 'Components/MyButton',
  component: 'my-button',
};

export const Default = () => `<my-button>Click me</my-button>`;
export const CustomLabel = () => `<my-button>Save</my-button>`;