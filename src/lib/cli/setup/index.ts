import { destination } from '@/src/lib/cli/paths';
import copyFonts from '@/src/lib/cli/copyFonts';

import appendGitignore from './appendGitignore';
import addPostinstallScript from './addPostinstallScript';

export default ({ path: destinationRoot }: { path: string }) => {
  appendGitignore(destination(destinationRoot));
  addPostinstallScript(destinationRoot);
  copyFonts({ path: destinationRoot });
};
