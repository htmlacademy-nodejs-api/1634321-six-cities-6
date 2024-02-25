import { Expose } from 'class-transformer';
import { City, HousingType } from '../../../types/index.js';

export class HousingRdo {
  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public postDate: Date;

  @Expose()
  public city: City;

  @Expose()
  public preview: string;

  @Expose()
  public isPremium: boolean;

  @Expose()
  public isFavorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public housingType: HousingType;

  @Expose()
  public price: number;

  @Expose()
  public features: string[];

  @Expose()
  public reviewsAmount: number;
}
