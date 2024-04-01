import { newSpecPage } from '@stencil/core/testing';
import { CernicaAmbulanceWlList } from '../cernica-ambulance-wl-list';

describe('cernica-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CernicaAmbulanceWlList],
      html: `<cernica-ambulance-wl-list></cernica-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cernica-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cernica-ambulance-wl-list>
    `);
  });
});
