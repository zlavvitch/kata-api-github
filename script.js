'use strict';

import { Search } from './modules/search.js';
import { View } from './modules/view.js';
import { Api } from './modules/api.js';

let api = new Api();
let app = new Search(new View(), api);
