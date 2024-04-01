import { newSpecPage } from '@stencil/core/testing';
import { CernicaAmbulanceWlList } from '../cernica-ambulance-wl-list';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { WaitingListEntry } from '../../../api/ambulance-wl';


describe('cernica-ambulance-wl-list', () => {

let mock: MockAdapter;

beforeAll(() => { mock = new MockAdapter(axios); });
afterEach(() => { mock.reset(); });

it('renders sample entries', async () => {
  // simulate API response using sampleEntries

  // set proper attributes
  const page = await newSpecPage({
    components: [CernicaAmbulanceWlList],
    html: `<cernica-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></cernica-ambulance-wl-list>`,
  });
  const wlList = page.rootInstance as CernicaAmbulanceWlList;
  const expectedPatients = wlList?.waitingPatients?.length;

  const items = page.root.shadowRoot.querySelectorAll("md-list-item");
  // use sample entries as expectation
  //expect(expectedPatients).toEqual(sampleEntries.length);
  expect(items.length).toEqual(expectedPatients);
});

it('renders error message on network issues', async () => {
  mock.onGet().networkError();
  const page = await newSpecPage({
    components: [CernicaAmbulanceWlList],  //
    html: `<cernica-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></cernica-ambulance-wl-list>`,  //
  });

  const wlList = page.rootInstance as CernicaAmbulanceWlList; //
  const expectedPatients = wlList?.waitingPatients?.length

  const errorMessage =  page.root.shadowRoot.querySelectorAll(".error");
  const items = page.root.shadowRoot.querySelectorAll("md-list-item");

  expect(errorMessage.length).toBeGreaterThanOrEqual(1)
  expect(expectedPatients).toEqual(0);
  expect(items.length).toEqual(expectedPatients);
});
});
