import data from '../../config/data.json';
import BInput from 'buefy/src/components/input/Input.vue';
import BField from 'buefy/src/components/field/Field.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import BAutocomplete from 'buefy/src/components/autocomplete/Autocomplete.vue';

@Component({
  components: {
    BInput,
    BField,
    BAutocomplete,
  },
  name: 'trending',
})
class Trending extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public name = '';
  public data = [''];
  public selected = null;
  public trends = data.trends;
  public whoToFollow = data.whoToFollow;
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
   get filteredDataArray() {
    return this.data.filter((option) => {
        return option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0;
    });
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
