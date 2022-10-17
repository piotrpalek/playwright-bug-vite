import React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';

import App from './App';

test.use({ viewport: { width: 500, height: 500 } });

test('<ScheduleCalendarContainer>', async ({ mount }) => {
  const component = await mount(
    <App>
      <h1>Hi!</h1>
    </App>
  );

  await expect(component).toHaveText('Hi!');
});
