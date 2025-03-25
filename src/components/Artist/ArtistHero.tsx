import React from 'react';
import { IArtist } from './Artist.types';

interface IArtistHeroProps {
  imageUrl: IArtist['image'];
  isClaimed: IArtist['claimed'];
}
export default function ArtistHero({ imageUrl, isClaimed }: IArtistHeroProps) {
  return (
    <div className="col visual">
      <figure
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {!isClaimed && (
          <figcaption>
            <button className="btn btn-claim-music-id">Claim music_id</button>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
