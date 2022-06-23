import appendGitignore from './appendGitignore';
import addPostinstallScript from './addPostinstallScript';
import { destination } from '../paths';
import copyFonts from '../copyFonts';

export default ({ path: destinationRoot }: { path: string }) => {
  appendGitignore(destination(destinationRoot));
  addPostinstallScript(destinationRoot);
  copyFonts({ path: destinationRoot });
};
