/**
 * Build styles
 */
import css from "./styles/index.css";


import UI from "./ui/index";

/**
 * Collapse Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */

/**
 * @typedef {Object} DelimiterData
 * @description Tool's input and output data format
 */
export default class Collapse {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: DelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({ data, config, api }) {
    this.api = api;

    const validTitle = data.title && typeof data.title === 'string';
    const validContent = data.content && typeof data.content === 'string';

    const defaultData = {
      title: validTitle ? data.title : "",
      content: validContent ? data.content : "",
    };

    this._data = defaultData;

    this.ui = new UI({
      data: this._data,
      api,
      setData: this.setData.bind(this),
    });

    this.element = null;
  }

  setData(data) {
    this._data = { ...this._data, ...data };
  }

  /**
   * Allow to press Enter inside the Header input
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return false;
  }

  static get sanitize() {
    return {
      content: {
        br: true,
        div: true,
      },
    };
  }

  /**
   * @return {object} - Collapse Tool styles
   * @constructor
   */
  get CSS() {
    return {
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
    };
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    this.element = this.ui.drawView(this._data);
    return this.element;
  }

  /**
   * reRender based on new data
   * @public
   *
   * @return {HTMLDivElement}
   */
  reRender() {
    this.replaceElement(this.ui.drawView(this._data));
  }

  /**
   * replace element wrapper with new html element
   * @param {HTMLElement} node
   */
  replaceElement(node) {
    this.element.replaceWith(node);
    this.element = node;

    this.api.tooltip.hide();
    this.api.toolbar.close();
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {DelimiterData} - saved data
   * @public
   */
  save(toolsContent) {
    const data = this.ui.data;
    return data;
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: `<svg width="19" t="1575117780012" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4865" width="200" height="200"><path d="M512 576l192 192H576v192H448v-192H320l192-192z m192-384H576V0H448v192H320l192 192 192-192z m256 128c0-35.2-28.8-64-64-64h-160l-64 64h192l-128 128h-448l-128-128h192l-64-64H128c-35.2 0-64 28.8-64 64l160 160L64 640c0 35.2 28.8 64 64 64h160l64-64h-192l128-128h448l128 128h-192l64 64H896c35.2 0 64-28.8 64-64l-160-160L960 320z" p-id="4866"></path></svg>`,
      title: "Folding block",
    };
  }
}
