import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const FormWithVehicleReference: ComponentMultiStyleConfig = {
  parts: ['title'],
  baseStyle: {
    title: {
      textStyle: { base: 'heading3', lg: 'heading1' },
      wordBreak: 'break-all',
    },
  },
};

export default FormWithVehicleReference;
