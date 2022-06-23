import path from 'path';

const fontsPath = 'assets/fonts';
export const source = path.join(__dirname, '../', fontsPath);
export const destination = (base: string) => path.join(base, fontsPath);
