import data from '../../config/data.json';
import { Component, Prop, Vue } from 'vue-property-decorator';
import BButton from 'buefy/src/components/button/Button.vue';
@Component({
  components: {
    BButton,
  },
  name: 'timeline-feed',
})
class TimelineFeed extends Vue {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------
  public tweet = '';
  public posts = data.posts;
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
  public get disabled() {
    return this.tweet === '';
  }
  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  public likePost(currentPost: typeof data.posts[0]) {
    this.posts = this.posts.map((post) => {
      if (post.id === currentPost.id) {
        if (currentPost.isLiked) {
          return { ...post, isLiked: false };
        } else {
          return { ...post, isLiked: true };
        }
      }

      return post;
    });
  }
  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Lifecycle Hooks
  // --------------------------------------------------------------------------
  public mounted() {
    // tslint:disable-next-line: no-unsafe-any
    // TODO: stuff to do when this component loads.
  }
}

export { TimelineFeed as default, TimelineFeed };
