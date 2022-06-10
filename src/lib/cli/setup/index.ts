import appendGitignore from './appendGitignore';
import addPostinstallScript from './addPostinstallScript';
import { destination } from '../paths';

export default ({ path: destinationRoot }: { path: string }) => {
  appendGitignore(destination(destinationRoot));
  addPostinstallScript(destinationRoot);
};
