import { useColorMode } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { FC, ReactNode, useMemo } from 'react';

import { colors, darkColors, lightColors, blueColors, orangeColors, yellowColors, greenColors, miscSize, sizes } from '@/theme/cssVariables';

function getVariableList(
  lightConfig: Record<string, any>,
  darkConfig: Record<string, any>,
  blueConfig: Record<string, any>,
  orangeConfig: Record<string, any>,
  yellowConfig: Record<string, any>,
  greenConfig: Record<string, any>,
  variableKeyMap: Record<string, string>,
  colorMode: 'light' | 'dark' | 'blue' | 'orange' | 'yellow' | 'green'
): (string | undefined)[] {
  return Object.entries(variableKeyMap).map(([jsKey, cssVariableKey]) => {
    const variableKey = cssVariableKey.match(/^var\((.*?)\)$/)?.[1];
    if (!variableKey) return;
    const lightValue = lightConfig[jsKey];
    const darkValue = darkConfig[jsKey];
    const blueValue = blueConfig[jsKey];
    const orangeValue = orangeConfig[jsKey];
    const yellowValue = yellowConfig[jsKey];
    const greenValue = greenConfig[jsKey];
    let value;
    switch (colorMode) {
      case 'light':
        value = lightValue;
        break;
      case 'dark':
        value = darkValue;
        break;
      case 'blue':
        value = blueValue;
        break;
      case 'orange':
        value = orangeValue;
        break;
      case 'yellow':
        value = yellowValue;
        break;
      case 'green':
        value = greenValue;
        break;
      default:
        value = greenValue;
    }
    return `${variableKey}: ${value}`;
  });
}

const GlobalColorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { colorMode } = useColorMode();
  const colorVariableList = useMemo(
    () => getVariableList(lightColors, darkColors, blueColors, orangeColors, yellowColors, greenColors, colors, colorMode),
    [colorMode]
  );
  const sizeVariableList = useMemo(
    () => getVariableList(miscSize, miscSize, miscSize, miscSize, miscSize, miscSize, sizes, colorMode),
    [colorMode]
  );
  return (
    <>
      {/* through object's styles's global can't inject multi font-face */}
      <Global
        styles={`
          :root {
            font-size: 16px;
            ${colorVariableList.join(';')};
            ${sizeVariableList.join(';')}
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalColorProvider;
