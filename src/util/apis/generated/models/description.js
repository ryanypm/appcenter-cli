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
 * Class representing a Description.
 */
class Description {
  /**
   * Create a Description.
   * @property {string} [description] The description of the token
   * @property {array} [scope] The scope for this token.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Description
   *
   * @returns {object} metadata of Description
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'description',
      type: {
        name: 'Composite',
        className: 'Description',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: false,
            serializedName: 'scope',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Description;