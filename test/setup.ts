import * as Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({
  adapter: new Adapter(),
});

declare const global: any;

global.requestAnimationFrame = (cb: any) => setTimeout(cb, 0);
