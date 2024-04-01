import { newSpecPage } from '@stencil/core/testing';
import { CernicaAmbulanceWlList } from '../cernica-ambulance-wl-list';

describe('cernica-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CernicaAmbulanceWlList],
      html: `<cernica-ambulance-wl-list></cernica-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as CernicaAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length
    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
