/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The Node version
 *
 */
class ToolsetsNodeItem {
  /**
   * Create a ToolsetsNodeItem.
   * @property {string} [name] The version name
   * @property {boolean} [current] If the Node version is default for AppCenter
   */
  constructor() {
  }

  /**
   * Defines the metadata of ToolsetsNodeItem
   *
   * @returns {object} metadata of ToolsetsNodeItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Toolsets_nodeItem',
      type: {
        name: 'Composite',
        className: 'ToolsetsNodeItem',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          current: {
            required: false,
            serializedName: 'current',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ToolsetsNodeItem;
