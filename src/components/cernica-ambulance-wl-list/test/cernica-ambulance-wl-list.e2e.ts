import { newE2EPage } from '@stencil/core/testing';

describe('cernica-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cernica-ambulance-wl-list></cernica-ambulance-wl-list>');

    const element = await page.find('cernica-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
