import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { IArtistApiResponse, IArtist } from './Artist.types';
import ArtistHero from './ArtistHero';
import ArtistInfo from './ArtistInfo';
import ArtistSocials from './ArtistSocials';
import ArtistMostPopularIn from './ArtistMostPopularIn';

export default function Artist() {
  const { uuid } = useParams();

  const [isFetching, setIsFetching] = useState(true);
  const [artist, setArtist] = useState<IArtist>();

  const fetchArtist = () => {
    setIsFetching(true);
    axios<IArtistApiResponse>({
      method: 'GET',
      url: `${import.meta.env.VITE_API_HOST}/api/v1/${uuid}`,
    })
      .then((res) => {
        console.log('res: ', res);
        setArtist(res?.data?.data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.error(err);
        // error handling...
        if (err?.response?.status === 404) {
          // npr redirect na 404 stran
        }
      });
  };

  useEffect(() => {
    uuid && fetchArtist();
  }, [uuid]);

  return (
    <section
      className={`section section-artist-detail ${
        artist?.trending && 'trending'
      } ${artist?.claimed && 'claimed'} ${isFetching && 'loading'}`}
    >
      {artist && (
        <div className="page">
          <ArtistHero imageUrl={artist?.image} isClaimed={artist?.claimed} />
          <div className="col-wrapper">
            <div className="col info">
              <div className="col-content">
                <ArtistInfo
                  isBookingAvailable={artist?.booking_available}
                  name={artist?.name}
                  isTrending={artist?.trending}
                  isBookmarked={artist?.bookmarked}
                  isClaimed={artist?.claimed}
                  countryName={artist?.country.name}
                  genreName={artist?.genre.name}
                  subgenres={artist?.subgenres}
                />
                <ArtistSocials
                  socialLinks={artist?.social_links}
                  name={artist?.name}
                />
              </div>
            </div>
          </div>
          <div className="col-wrapper">
            <ArtistMostPopularIn mostPopularIn={artist?.most_popular_in} />
          </div>
          <button className="btn btn-scroll-down">Scroll down</button>
        </div>
      )}
    </section>
  );
}
