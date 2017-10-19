import * as PIXI from 'pixi.js';

export default class Layouts {
  static make(dir, name, func) {
    let rootCont = new PIXI.Container();
    rootCont.layouts = {};
    let layoutJsonName = dir + name + '.json';
    let atlasName = dir + name + '_ss.json';

    PIXI.loader
    .add(layoutJsonName)
    .add(atlasName)
    .load(() => {
      let layouts = PIXI.loader.resources['layouts/sample.json'].data;
      let textures = PIXI.loader.resources['layouts/sample_ss.json'].textures;
      
      for(let node of layouts) {
        let prefix = name;
        let nodeCont = this._makeNode(rootCont, rootCont.layouts, node, textures, prefix);
      }
      func();
    });
    return rootCont;
  }

  /**
   * 
   * @param {PIXI.Container} parentCont 
   * @param {Object} layoutsProp 
   * @param {Object} node 
   * @param {Array} textures 
   * @param {String} prefix 
   */
  static _makeNode(parentCont, layoutsProp, node, textures, prefix) {
    let nodeName = prefix + '_' + node.name;
    if(node.children) {
      let child = new PIXI.Container();
      layoutsProp[node.name] = {
        'root' : child
      };
      parentCont.addChildAt(child, 0);
      for(let childNode of node.children) {
        this._makeNode(child, layoutsProp[node.name], childNode, textures, nodeName);
      }
    }else{
      let child = new PIXI.Sprite(textures[nodeName + '.png']);
      child.x = node.x;
      child.y = node.y;
      child.width = node.width;
      child.height = node.height;
      layoutsProp[node.name] = child;
      child.interactive = true;
      child.on('pointerdown', () => {
        child.tint = 0x999999;
      });
      child.on('pointerupoutside', () => {
        child.tint = 0xffffff;
      });
      child.on('pointerup', () => {
        child.tint = 0xffffff;
      });
      parentCont.addChildAt(child, 0);
    }
  }
}