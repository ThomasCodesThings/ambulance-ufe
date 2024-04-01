import { newE2EPage } from '@stencil/core/testing';

describe('cernica-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cernica-ambulance-wl-editor></cernica-ambulance-wl-editor>');

    const element = await page.find('cernica-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
