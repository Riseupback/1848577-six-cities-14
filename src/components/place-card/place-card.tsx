import {Offer} from '../../types/types';
import {upperCaseFirst} from '../../utils/utils';

type PlaceCardProps = {
  offer: Offer;
}

function PremiumMark(): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCard({offer}: PlaceCardProps): JSX.Element {
  const {images, isFavorite, isPremium, price, title, type} = offer;

  return (
    <article className="cities__card place-card">
      {isPremium && <PremiumMark />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={ `${'place-card__bookmark-button button'} ${isFavorite && 'place-card__bookmark-button--active'}` } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{upperCaseFirst(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
