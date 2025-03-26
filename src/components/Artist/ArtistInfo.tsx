import { useState } from 'react';
import { IArtist } from './Artist.types';

interface IArtistInfoProps {
  isBookingAvailable: IArtist['booking_available'];
  name: IArtist['name'];
  isTrending: IArtist['trending'];
  isBookmarked: IArtist['bookmarked'];
  isClaimed: IArtist['claimed'];
  countryName: IArtist['country']['name'];
  genreName: IArtist['genre']['name'];
  subgenres: IArtist['subgenres'];
}

export default function ArtistInfo({
  isBookingAvailable,
  name,
  isClaimed,
  isTrending,
  isBookmarked,
  countryName,
  genreName,
  subgenres,
}: IArtistInfoProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isFollowing, setIsFollowing] = useState(isBookmarked);

  const copyToClipboard = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="info-wrapper">
      <div className="title-wrapper">
        {isBookingAvailable && (
          <button className="btn btn-solid border btn-booking-request">
            Booking Request
          </button>
        )}
        <h1 className="title">
          {name}
          <div className="tooltip-wrapper">
            {isClaimed && (
              <span className="profile-claimed">Profile claimed</span>
            )}
          </div>
          {isTrending && <span className="trending-icon">Trending</span>}
        </h1>
      </div>

      <div className="row">
        <button
          className={`btn btn-save long ${isFollowing && 'active'}`}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          Follow
        </button>
        <button
          className={`btn btn-share ${isCopied && 'copied'}`}
          onClick={() => copyToClipboard()}
        >
          Share
          <span>Link copied to clipboard</span>
        </button>
      </div>

      <div className="row">
        <label>Origin</label>
        <a className="btn btn-filter-tag">{countryName}</a>
      </div>

      <div className="row">
        <label>Genre</label>
        <span className="btn btn-filter-tag">{genreName}</span>
      </div>

      <div className="row">
        <label>Subgenres</label>
        {subgenres?.map((subgenre) => (
          <span className="btn btn-filter-tag" key={subgenre?.id}>
            {subgenre?.name}
          </span>
        ))}

        <div className="tooltip-wrapper">
          <button className="btn btn-add">Add subgenre</button>
          <div className="tooltip">
            <h3>Vote for subgenres</h3>
            <p>
              Don’t agree with the subgenres? Add the ones you think are missing
              or vote for existing to get yours on top!
            </p>
            <div className="stats-sheet">
              {subgenres?.map((subgenre) => (
                <div className="row" key={subgenre?.id}>
                  <h5>{subgenre?.name}</h5>
                  <div className="graph-line">
                    <span className="line" style={{ width: '99%' }}>
                      99%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p>
              <button className="btn btn-shadow">Vote now</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
