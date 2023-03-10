import { useState } from 'react';

// material-ui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

// third-party
import frLocale from 'date-fns/locale/fr';
import enLocale from 'date-fns/locale/en-US';
import kmLocale from 'date-fns/locale/km';

// project import
import MainCard from 'components/MainCard';

const localeMap = {
  en: enLocale,
  fr: frLocale,
  km: kmLocale
};

const maskMap = {
  fr: '__/__/____',
  en: '__/__/____',
  km: '__/__/____'
};

// ==============================|| DATE PICKER - LOCALIZED ||============================== //

export default function LocalizedPicker() {
  const [locale, setLocale] = useState('ru');
  const [value, setValue] = useState(new Date());

  const selectLocale = (newLocale) => {
    setLocale(newLocale);
  };

  const localizeDatepickerCodeString = `<LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
  <div>
    <ToggleButtonGroup value={locale} exclusive sx={{ mb: 2, display: 'block' }}>
      {Object.keys(localeMap).map((localeItem) => (
        <ToggleButton key={localeItem} value={localeItem} onClick={() => selectLocale(localeItem)}>
          {localeItem}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
    <DatePicker
      mask={maskMap[locale]}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      renderInput={(params) => <TextField {...params} />}
    />
  </div>
</LocalizationProvider>`;

  return (
    <MainCard title="Localization Picker" codeString={localizeDatepickerCodeString}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
        <div>
          <ToggleButtonGroup value={locale} exclusive sx={{ mb: 2, display: 'block' }}>
            {Object.keys(localeMap).map((localeItem) => (
              <ToggleButton key={localeItem} value={localeItem} onClick={() => selectLocale(localeItem)}>
                {localeItem}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <DatePicker
            mask={maskMap[locale]}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </LocalizationProvider>
    </MainCard>
  );
}
