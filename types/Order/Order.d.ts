import { IAddress } from '../Address';
import { IDatedObject, IObjectWithId } from '../base';
import { IMessage, IRate, IShipment, ServiceLevel } from '../Shipment';
import { Carrier } from '../Carrier';
import { IOrderCreateParameters } from './OrderCreateParameters';

/**
 * The Order object represents a collection of packages and can be used for Multi-Piece Shipments.
 * Like a single Shipment each Order consists of a "to" and "from" Address to be used for each Shipment within the Order.
 * These Addresses will be copied to each Shipment so there is no need to specify them multiple times.
 * Each Shipment must then specify its Parcel, Options, and CustomsInfo.
 *
 * An Order created with valid Address Objects and Parcel data nested within the Order's Shipment object will automatically retrieve available shipping Rate options.
 *
 * @see https://www.easypost.com/docs/api/node#order-object
 */
export declare interface IOrder extends IObjectWithId<'Order'>, IDatedObject {
  /**
   * An optional field that may be used in place of id in other API endpoints
   */
  reference?: string;

  /**
   * The destination address
   */
  to_address: IAddress;

  /**
   * The origin address
   */
  from_address: IAddress;

  /**
   * The shipper's address, defaults to from_address
   */
  return_address: IAddress;

  /**
   * The buyer's address, defaults to to_address
   */
  buyer_address: IAddress;

  /**
   * All associated Shipment objects. Maximum of 100.
   */
  shipments: IShipment[];

  /**
   * All associated Rate objects
   */
  rates: IRate[];

  /**
   * Any carrier errors encountered during rating
   */
  messages: IMessage[];

  /**
   * Set true to create as a return
   */
  is_return: boolean;
}

export declare class Order implements IOrder {
  public constructor(input: IOrderCreateParameters);

  reference?: string;
  to_address: IAddress;
  from_address: IAddress;
  return_address: IAddress;
  buyer_address: IAddress;
  shipments: IShipment[];
  rates: IRate[];
  messages: IMessage[];
  is_return: boolean;
  id: string;
  mode: 'test' | 'production';
  object: 'Order';
  created_at: string;
  updated_at: string;

  /**
   * An Order is almost exclusively a container for other objects, and thus an Order may reuse many of these objects.
   * Alternatively, all the objects contained within an Order may be created at the same time.
   *
   * You can limit the CarrierAccounts to use for rating by passing the carrier_accounts parameter.
   *
   * @see https://www.easypost.com/docs/api/node#create-an-order
   */
  public save(): Promise<Order>;

  /**
   * An Order can be retrieved by either its id or reference.
   * However it is recommended to use EasyPost's provided identifiers because uniqueness on reference is not enforced.
   *
   * @param orderId Unique, begins with "order_"
   *
   * @see https://www.easypost.com/docs/api/node#retrieve-an-order
   */
  static retrieve(orderId: string): Promise<Order>;

  /**
   * To purchase an Order you only need to specify the carrier and service to purchase.
   * This operation populates the tracking_code and postage_label attributes of each Shipment.
   *
   * @see https://www.easypost.com/docs/api/node#buy-an-order
   */
  public buy(carrier: Carrier, service: ServiceLevel): Promise<Order>;

  public getRates(): Promise<IRate[]>;
}
