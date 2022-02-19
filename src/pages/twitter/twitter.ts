import Trending from '@/components/trending/trending';
import { Component, Vue } from 'vue-property-decorator';
import TimelineFeed from '@/components/timeline-feed/timeline-feed';
import NavigationMenu from '@/components/navigation-menu/navigation-menu';

const TIMEOUT = 3500;

@Component({
  components: {
    Trending,
    TimelineFeed,
    NavigationMenu,
  },
  name: 'twitter',
})
class Twitter extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public hasLoaded = false;
  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, TIMEOUT);
    // TODO: stuff to do when this component loads.
  }
}

export { Twitter as default, Twitter };
