import * as PIXI from 'pixi.js';
import * as PIXI_FILTERS from 'pixi-filters';
import Layouts from './utils/Layouts.js';
import resizeElement from './utils/resizeElement.js';

const SCREEN_WIDTH = 540;
const SCREEN_HEIGHT = 960;

let app = new PIXI.Application(SCREEN_WIDTH, SCREEN_HEIGHT);
resizeElement(app.view, SCREEN_WIDTH, SCREEN_HEIGHT);
document.body.appendChild(app.view);

let shadow = new PIXI_FILTERS.DropShadowFilter(70);
shadow.blur = 5;

let ui = Layouts.make('layouts/', 'sample', () => {
  ui.layouts.header.back.filters = [shadow];
  ui.layouts.content.list1.filters = [shadow];
  ui.layouts.content.list2.filters = [shadow];
  ui.layouts.content.list3.filters = [shadow];
  ui.layouts.header.actionButton.root.filters = [shadow];
});
app.stage.addChild(ui);
