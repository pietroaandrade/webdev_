import cows from './node_modules/cows/index.js';
import chalk from 'chalk';
export default function imprimirVaca(cor = 'blue') {
    const vaca = cows();
    
    console.log(chalk[cor](vaca));
}