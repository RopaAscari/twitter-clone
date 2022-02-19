import { shallowMount } from '@vue/test-utils';
import TimelineFeed from './timeline-feed.vue';

describe('TimelineFeed.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(TimelineFeed);

    expect(wrapper.exists()).toEqual(true);
  });
});
