import { useColorMode } from '@chakra-ui/react';
import Tabs from '@/components/Tabs';
import MoonIcon from '@/icons/misc/MoonIcon';
import SunIcon from '@/icons/misc/SunIcon';
import { SettingField } from './SettingField';
import { colors } from '@/theme/cssVariables';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function ColorThemeSettingField() {
  const { t } = useTranslation();
  const { colorMode, setColorMode } = useColorMode();
  const [theme, setTheme] = useState(colorMode);

  const handleThemeChange = (newTheme: any) => {
    setTheme(newTheme);
    setColorMode(newTheme);
  };

  const Circle = ({ color, isActive }: { color: string; isActive: boolean }) => (
    <div
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: color,
        border: isActive ? `2px solid ${colors.textRevertPrimary}` : '2px solid transparent',
      }}
    />
  );

  return (
    <SettingField
      fieldName={t('setting_board.color_theme')}
      renderToggleButton={
        <Tabs
          variant="roundedSwitch"
          value={theme}
          onChange={handleThemeChange}
          items={[
            // { value: 'dark', label: (isActive) => <MoonIcon color={isActive ? colors.textRevertPrimary : colors.textSecondary} /> },
            // { value: 'light', label: (isActive) => <SunIcon color={isActive ? colors.textRevertPrimary : colors.textSecondary} /> },
            { value: 'green', label: (isActive) => <Circle color="#BEF264" isActive={isActive} /> },
            { value: 'orange', label: (isActive) => <Circle color="#ff9800" isActive={isActive} /> },
            { value: 'yellow', label: (isActive) => <Circle color="#ffeb3b" isActive={isActive} /> },
            { value: 'blue', label: (isActive) => <Circle color="#0066ff" isActive={isActive} /> },
          ]}
          size="md"
        />
      }
    />
  );
}
