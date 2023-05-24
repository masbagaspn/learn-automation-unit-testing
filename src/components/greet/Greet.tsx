import { GreetProps } from './Greet.types';

export const Greet: React.FC<GreetProps> = ({ name }) => {
  return <div>Hello {name ? name : 'Guest'}</div>;
};
