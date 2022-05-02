import { shallowMount } from '@vue/test-utils';
import DashboardTable from './dashboard-table.vue';

describe('DashboardTable.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(DashboardTable);

    expect(wrapper.exists()).toEqual(true);
  });
});
