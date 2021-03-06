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
 * A request containing information for updating a release.
 *
 */
class PrivateReleaseUpdateRequest {
  /**
   * Create a PrivateReleaseUpdateRequest.
   * @property {string} [publishingStatus] The store publishing status.
   * Possible values include: 'failed', 'processing', 'submitted', 'timeout'
   */
  constructor() {
  }

  /**
   * Defines the metadata of PrivateReleaseUpdateRequest
   *
   * @returns {object} metadata of PrivateReleaseUpdateRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PrivateReleaseUpdateRequest',
      type: {
        name: 'Composite',
        className: 'PrivateReleaseUpdateRequest',
        modelProperties: {
          publishingStatus: {
            required: false,
            serializedName: 'publishing_status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateReleaseUpdateRequest;
