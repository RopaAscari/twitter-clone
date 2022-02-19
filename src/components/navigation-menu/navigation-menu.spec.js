import { shallowMount } from '@vue/test-utils';
import NavigationMenu from './navigation-menu.vue';

describe('NavigationMenu.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(NavigationMenu);

    expect(wrapper.exists()).toEqual(true);
  });
});
