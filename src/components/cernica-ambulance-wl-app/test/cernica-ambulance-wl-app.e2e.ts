import { newE2EPage } from '@stencil/core/testing';

describe('cernica-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cernica-ambulance-wl-app></cernica-ambulance-wl-app>');

    const element = await page.find('cernica-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
