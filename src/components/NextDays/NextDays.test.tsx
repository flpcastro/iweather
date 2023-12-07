import { render, screen } from '@testing-library/react-native';
import { NextDays } from '@components/NextDays';

import clearDay from '@assets/clear_day.svg';

describe('Component: NextDays', () => {
  it('should be render day', () => {
    render(
      <NextDays 
        data={[
          { day: '18/07', min: '18°c', max: '25°c', icon: clearDay, weather: 'Clear Day' },
          { day: '19/07', min: '22°c', max: '29°c', icon: clearDay, weather: 'Rainy Day' },
          { day: '20/07', min: '21°c', max: '27°c', icon: clearDay, weather: 'Clear Day' },
          { day: '21/07', min: '20°c', max: '32°c', icon: clearDay, weather: 'Rainy Day' },
          { day: '22/07', min: '25°c', max: '31°c', icon: clearDay, weather: 'Clear Day' },
        ]}
      />
    )

    expect(screen.getByText('19/07')).toBeTruthy();
  })
})