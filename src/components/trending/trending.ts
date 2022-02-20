import data from '../../config/data.json';
import BIcon from 'buefy/src/components/icon/Icon.vue';
import BInput from 'buefy/src/components/input/Input.vue';
import BField from 'buefy/src/components/field/Field.vue';
import BModal from 'buefy/src/components/modal/Modal.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import BButton from 'buefy/src/components/button/Button.vue';
import BCheckbox from 'buefy/src/components/checkbox/Checkbox.vue';
import BAutocomplete from 'buefy/src/components/autocomplete/Autocomplete.vue';

type Following = typeof data.whoToFollow[0];

@Component({
  components: {
    BIcon,
    BInput,
    BField,
    BModal,
    BButton,
    BCheckbox,
    BAutocomplete,
  },
  name: 'trending',
})
class Trending extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public name = '';
  public selected = null;
  public trends = data.trends;
  public isUnfollowing = false;
  public isSettingsOpen = false;
  public locationCheckbox = true;
  public trendingCheckbox = true;
  public options = [{username: ''}];
  public whoToFollow = data.whoToFollow;
  // tslint:disable-next-line: no-any
  public currentUnfollowing: Following | null = { username: null } as any;

  // --------------------------------------------------------------------------
  // Props
  // --------------------------------------------------------------------------
  @Prop({ default: 'default' }) public customProp!: string;
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
  public onSearch(searchTerm: string){
     this.options = this.whoToFollow.filter((option) => {
      return (
        option.username.toString()
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) >= 0
      );
    });
  }


  public followUser(currentFollo1ing: typeof data.whoToFollow[0]) {
    this.whoToFollow = this.whoToFollow.map((following) => {
      if (following.id === currentFollo1ing.id) {
        if (!following.isFollowing) {
          return { ...following, isFollowing: true };
        }
      }

      return following;
    });
  }

  public openUnfollowModal(currentFollowing: Following) {
    this.isUnfollowing = true;
    this.currentUnfollowing = currentFollowing;
  }

  public closeUnfollowModal() {
    this.isUnfollowing = false;
    // tslint:disable-next-line: no-any
    this.currentUnfollowing = { username: null } as any;
  }

  public unfollowUser() {
    this.whoToFollow = this.whoToFollow.map((following) => {
      if (following.id === this.currentUnfollowing?.id) {
        if (following.isFollowing) {
          return { ...following, isFollowing: false };
        }
      }

      return following;
    });

    this.closeUnfollowModal();
  }
  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // TODO: stuff to do when this component loads.
  }
}

export { Trending as default, Trending };
