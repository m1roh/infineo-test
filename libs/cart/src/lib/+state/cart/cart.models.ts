/**
 * Interface for the 'Cart' data
 */
import { DisksEntity } from '@infineo-disk-shop/disks';

export interface CartEntity {
  products: DisksEntity[];
}
