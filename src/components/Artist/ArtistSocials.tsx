import React from 'react';
import { IArtist } from './Artist.types';

interface IArtistSocialsProps {
  socialLinks: IArtist['social_links'];
  name: IArtist['name'];
}
export default function ArtistSocials({
  socialLinks,
  name,
}: IArtistSocialsProps) {
  return (
    <div className="footer-detail">
      <ul className="social-list">
        {socialLinks &&
          socialLinks?.map((socialLink) => (
            <li key={socialLink?.channel}>
              <a
                href={socialLink?.link}
                className={`btn social-icon ${socialLink?.channel}`} // dynamic class blindly assumes we have icons for all the channel API returns
              >
                {socialLink?.channel}
              </a>
            </li>
          ))}
      </ul>

      <div className="tooltip-wrapper">
        <button className="btn btn-add">Add links</button>
        <div className="tooltip">
          <h3>Got more info?</h3>
          <p>
            Add {name}'s links so everyone can see their social media
            highlights.
          </p>
          <p>
            <button className="btn btn-shadow">Add links</button>
          </p>
        </div>
      </div>
    </div>
  );
}
