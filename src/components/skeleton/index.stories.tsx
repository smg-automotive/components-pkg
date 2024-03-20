import { Box } from '../index';
import Skeleton from './index.tsx';

export default {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
};

export const Overview = {
  render: () => (
    <Skeleton>
      <Box height="80px" widht="500px">
        Dummy conent
      </Box>
    </Skeleton>
  ),

  name: 'Overview',
};
