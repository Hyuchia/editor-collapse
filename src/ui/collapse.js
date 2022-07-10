/**
 * Build styles
 */
import css from "../styles/collapse.css";
import { make, clazz } from "@groupher/editor-utils";

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
  constructor({ data, config, api, setData }) {
    this.api = api;

    this._data = data;

    this.nodes = {
      title: make("input", this.CSS.title, {
        placeholder: "Collapse",
        "data-skip-plus-button": true,
      }),
      contentWrapper: make("div", this.CSS.content),
      content: make("div", this.CSS.contentInner, {
        contentEditable: true,
        placeholder: "Collapse",
        "data-skip-plus-button": true,
      }),

      toggleLabel: make("label", this.CSS.labelToggle, {
        "data-skip-plus-button": true,
      }),
    };

    this._assignData(data);
    this._initListeners();

    this.setData = setData;
    this.isFolded = true;
  }

  /**
   * @return {object} - Collapse Tool styles
   * @constructor
   */
  get CSS() {
    return {
      block: this.api.styles.block,
      wrapper: "cdx-collapse",
      collapseWrapper: "cdx-collapse-wrapper",
      header: "cdx-collapse-header",
      title: "cdx-collapse-title",
      labelToggle: "cdx-collapse-toggle",
      content: "cdx-collapse-content",
      contentInner: "content-inner",

      contentChecked: "cdx-collapse-content-checked",
      labelChecked: "cdx-collapse-toggle-checked",
    };
  }

  /**
   * init input/toggle listeners
   *
   * @param {Function} setData
   * @memberof Collapse
   */
  _initListeners(setData) {
    this.api.listeners.on(this.nodes.title, "input", () => {
      const title = this.nodes.title.innerHTML;
      this.setData({ title });
    });

    this.api.listeners.on(this.nodes.content, "input", () => {
      const content = this.nodes.content.innerHTML;
      this.setData({ content });
    });

    this.api.listeners.on(this.nodes.toggleLabel, "click", () => {
      this.isFolded ? this._unFoldContent() : this._foldContent();
    });
  }

  /**
   * fold content
   *
   * @memberof ColumnCollapse
   */
  _foldContent() {
    clazz.remove(this.nodes.contentWrapper, this.CSS.contentChecked);
    clazz.remove(this.nodes.toggleLabel, this.CSS.labelChecked);
    this.isFolded = true;
  }

  /**
   * unfold content
   *
   * @memberof ColumnCollapse
   */
  _unFoldContent() {
    clazz.add(this.nodes.contentWrapper, this.CSS.contentChecked);
    clazz.add(this.nodes.toggleLabel, this.CSS.labelChecked);
    this.isFolded = false;
  }

  /**
   * assign data to current title/content input
   *
   * @param {ToolData} data
   * @memberof ColumnCollapse
   */
  _assignData(data) {
    this._data = data;
    const { title, content } = this._data;

    this.nodes.title.innerHTML = title;
    this.nodes.content.innerHTML = content;
  }

  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */
  drawView(data) {
    this._assignData(data);
    const wrapperEl = make("div", [this.CSS.block, this.CSS.wrapper]);
    this.nodes.content.innerHTML = this._data.content;

    const collapseWrapperEl = make("div", this.CSS.collapseWrapper);
    const headerEl = make("div", this.CSS.header);

    headerEl.appendChild(this.nodes.toggleLabel);
    headerEl.appendChild(this.nodes.title);

    this.nodes.contentWrapper.appendChild(this.nodes.content);

    collapseWrapperEl.appendChild(headerEl);
    collapseWrapperEl.appendChild(this.nodes.contentWrapper);

    wrapperEl.appendChild(collapseWrapperEl);

    return wrapperEl;
  }

  get data() {
    const title = this.nodes.title.innerHTML;
    const content = this.nodes.content.innerHTML;
    const data = { title, content };

    this.setData(data);

    return data;
  }
}
