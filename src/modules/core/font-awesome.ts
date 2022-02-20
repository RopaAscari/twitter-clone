import { IconDefinition, IconPack, library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowCircleDown,
  faArrowCircleUp,
  faArrowDown,
  faArrowUp,
  faCaretUp,
  faChartLine,
  faChartPie,
  faCheckCircle,
  faChevronDown,
  faChevronLeft,
  faChevronUp,
  faCoins,
  faEllipsisV,
  faEye,
  faEyeSlash,
  faLock,
  faPencilAlt,
  faSearch,
  faTimes,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

type IconDefinitionOrPack = IconDefinition | IconPack;

library.add(
  faTimes as IconDefinitionOrPack,
  faArrowUp as IconDefinitionOrPack,
  faArrowDown as IconDefinitionOrPack,
  faArrowCircleUp as IconDefinitionOrPack,
  faArrowCircleDown as IconDefinitionOrPack,
  faChevronUp as IconDefinitionOrPack,
  faChevronDown as IconDefinitionOrPack,
  faChevronLeft as IconDefinitionOrPack,
  faCoins as IconDefinitionOrPack,
  faEllipsisV as IconDefinitionOrPack,
  faLock as IconDefinitionOrPack,
  faCheckCircle as IconDefinitionOrPack,
  faChartLine as IconDefinitionOrPack,
  faChartPie as IconDefinitionOrPack,
  faCaretUp as IconDefinitionOrPack,
  faPencilAlt as IconDefinitionOrPack,
  faTrashAlt as IconDefinitionOrPack,
  faSearch as IconDefinitionOrPack,
  faEye as IconDefinitionOrPack,
  faEyeSlash as IconDefinitionOrPack,
);

const FONT_AWESOME_COMPONENT = 'font-awesome-icon';

// Register FontAwesome component globally
Vue.component(FONT_AWESOME_COMPONENT,
  FontAwesomeIcon);

// tslint:disable-next-line:no-var-requires
const { default: config } = require('buefy/src/utils/config') as {
  default: {
    defaultIconComponent: string;
    defaultIconPack: string;
  };
};

// Force Buefy to use vue-fontawesome to render icons
config.defaultIconComponent = FONT_AWESOME_COMPONENT;
config.defaultIconPack = 'fas';
