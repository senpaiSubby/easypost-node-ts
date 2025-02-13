import T from 'proptypes';
import base from './base';

export const propTypes = {
  id: T.string,
  object: T.string,
  reference: T.string,
  mode: T.string,
  tracking_code: T.string,
  status: T.string,
  signed_by: T.string,
  weight: T.number,
  est_delivery_date: T.object,
  shipment_id: T.string,
  carrier: T.string,
  tracking_details: T.object,
  carrier_detail: T.object,
  public_url: T.string,
  fees: T.array,
  created_at: T.oneOfType([T.object, T.string]),
  updated_at: T.oneOfType([T.object, T.string]),
};

export default (api) =>
  class Tracker extends base(api) {
    static propTypes = propTypes;

    static _name = 'Tracker';

    static _url = 'trackers';

    static key = 'tracker';

    static delete() {
      return this.notImplemented('delete');
    }

    /**
     * Create trackers in bulk.
     * @param {object} params
     * @returns {bool|Promise<never>}
     */
    static async createList(params = {}) {
      const newParams = { trackers: params };
      try {
        const url = 'trackers/create_list';
        await api.post(url, newParams);
        // This endpoint does not return anything so true is returned here
        return true;
      } catch (e) {
        return Promise.reject(e);
      }
    }
  };
