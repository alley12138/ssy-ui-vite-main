import type { App } from 'vue';
import Avatar from './avatar/Avatar.vue';
import SButton from './button/Button';
import TSXButton from './TSXButton';
import 'virtual:uno.css';
export { Avatar, SButton, TSXButton };
export * from './button';
export * from './link';
declare const _default: {
    install(app: App): void;
    version: string;
};
export default _default;
