/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * ProductFeedSchedule
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedSchedule extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      day_of_month: 'day_of_month',
      day_of_week: 'day_of_week',
      hour: 'hour',
      id: 'id',
      interval: 'interval',
      interval_count: 'interval_count',
      minute: 'minute',
      timezone: 'timezone',
      url: 'url',
      username: 'username',
    });
  }

  static get DayOfWeek (): Object {
    return Object.freeze({
      friday: 'FRIDAY',
      monday: 'MONDAY',
      saturday: 'SATURDAY',
      sunday: 'SUNDAY',
      thursday: 'THURSDAY',
      tuesday: 'TUESDAY',
      wednesday: 'WEDNESDAY',
    });
  }
  static get Interval (): Object {
    return Object.freeze({
      daily: 'DAILY',
      hourly: 'HOURLY',
      monthly: 'MONTHLY',
      weekly: 'WEEKLY',
    });
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): ProductFeedSchedule {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): ProductFeedSchedule {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
