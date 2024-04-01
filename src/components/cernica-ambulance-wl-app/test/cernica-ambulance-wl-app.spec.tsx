import { newSpecPage } from '@stencil/core/testing';
import { CernicaAmbulanceWlApp } from '../cernica-ambulance-wl-app';

describe('cernica-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [CernicaAmbulanceWlApp],
      html: `<cernica-ambulance-wl-app base-path="/"></cernica-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("cernica-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [CernicaAmbulanceWlApp],
      html: `<cernica-ambulance-wl-app base-path="/ambulance-wl/"></cernica-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cernica-ambulance-wl-list");
  });
});
