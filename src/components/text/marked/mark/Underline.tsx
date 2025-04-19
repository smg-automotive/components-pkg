import React, { FC } from 'react';
import { chakra, useSlotRecipe } from '@chakra-ui/react';

import { MarkProps } from '.';

const Underline: FC<MarkProps> = (props) => {
  const recipe = useSlotRecipe({ key: 'markedText' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <chakra.svg
      css={styles.mark}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 11"
      fill="none"
      preserveAspectRatio="none"
    >
      <chakra.path
        fill="brand.primary"
        d="M147.274 5.414c-.221.13-.294.258-.218.427.151.21-.07.447-.291.661-.146.214-.516.43-.737.624-.222.151-.443.324-.665.496.523.185.374.166-.664.517.224.061.374.144.598.227-.892.073-1.71.146-2.678.157-2.381.026-4.762.116-7.144.184l-17.934.389c-2.158.045-4.243.025-6.401.049-.893.01-1.861 0-2.754.03-.446.005-.967.053-1.413.058a275.9 275.9 0 0 1-4.169.025c-.148.002-.372-.017-.521.006-2.306.089-4.689.009-6.996.055-1.116.034-2.232.046-3.349.058l-3.796.042c-3.2.035-6.4.07-9.6.085-2.83.01-5.658-.002-8.486.008-1.861 0-3.796.02-5.731.042-.968.01-1.936 0-2.903.01-.819.01-1.563.039-2.382.048-.595.007-1.191-.05-1.861-.043-.893.01-1.786.062-2.753.072l-9.974.046-11.462.127c-1.116.012-2.158.066-3.274.078-.447.005-.968-.032-1.415-.027-1.563.017-3.05.055-4.614.072-.297.003-.595.007-.743.115 0 .042-.371.046-.595.07l-9.6.169c-1.265.014-2.456.048-3.72.083-.67.029-1.265.1-1.935.107-1.34-.007-2.68-.013-4.02-.041a5.054 5.054 0 0 1-1.193-.2c-.821-.224-1.42-.493-1.498-.832-.077-.275-.23-.57-.307-.846-.001-.127.072-.256.145-.384.073-.086.072-.17.146-.256.144-.384.066-.787.36-1.172.145-.278.29-.555.139-.83 0-.063.222-.13.295-.215.294-.343.514-.707.807-1.05.147-.192.517-.409.366-.577-.226-.295.515-.579.065-.85-.15-.083.072-.213.22-.32 0-.043.222-.11.148-.109-.448-.122-.003-.255.145-.341.296-.173-.004-.361.664-.538a6.1 6.1 0 0 1 1.56-.208c1.638-.04 3.35-.08 4.987-.098 2.753-.051 5.433-.102 8.186-.132 3.052-.055 6.177-.09 9.229-.144l6.251-.07 7.964-.087a219.85 219.85 0 0 1 3.722-.02c1.563-.017 3.051-.033 4.614-.029 2.308-.025 4.54-.029 6.848-.033l6.997-.013c2.158-.003 4.242-.025 6.401-.007 2.903.01 5.806.021 8.71.01 2.009 0 4.018-.065 6.028-.066 2.158-.002 4.392.016 6.55-.008 2.53-.028 5.06-.077 7.666-.106 4.167-.045 8.336-.07 12.429-.115 2.977-.033 5.954-.087 9.005-.142l10.568-.18c3.051-.054 6.028-.15 9.004-.226 2.381-.069 4.837-.117 7.293-.165.521-.006.968.053 1.49.09-.221.257-.145.426.229.55-.594.112-.37.216.003.275-.222.13-.444.239-.517.346-.148.129-.072.255.598.248-.371.068-.669.113-1.115.182.075.042.15.083.225.104.596.078.972.392.527.546-.148.065-.595.07-.892.095v.063c.671.078.524.27.601.418.001.17-.146.3-.517.452-.148.065.003.191-.071.298.001.064.076.148.002.191-.666.283-.588.601-.659.92.001.085-.073.15-.147.214-.074.065-.593.198-.071.34Z"
      />
    </chakra.svg>
  );
};

export default Underline;
