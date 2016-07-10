import {SAY_HELLO} from './HelloActions';

export function sayHello(name) {
    return {
        type: SAY_HELLO, name
    };
}