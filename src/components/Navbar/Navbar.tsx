import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router';

export default function Navbar() {
  const navigate = useNavigate();
  const params = useParams();

  const [isFetching, setIsFetching] = useState(true); // used to toggle the full screen loader, like on the current app
  const [artists, setArtists] = useState<null | INavArtist[]>(null);

  interface INavArtist {
    artist_name: string;
    artist_uuid: string;
  }

  const fetchArtists = () => {
    axios<INavArtist[]>({
      method: 'GET',
      url: `${import.meta.env.VITE_API_HOST}/api/v1/navbar`,
    })
      .then((res) => {
        setArtists(res.data);
        setIsFetching(false);

        // something to make the demo's "landing page" less clunky
        res?.data?.length &&
          !params?.uuid &&
          navigate(`/${res?.data?.[0]?.artist_uuid}`);
      })
      .catch((err) => {
        setIsFetching(false);
        console.error(err);
        // error handling...
      });
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <nav className="navigation-primary">
      <ul className="menu-sys">
        <li>
          <button className="btn btn-menu search">Search</button>
        </li>
        <li>
          <button className="btn btn-menu more">More</button>
        </li>
      </ul>

      <ul className="menu">
        {artists?.map((artist) => (
          <li key={artist.artist_uuid}>
            <NavLink key={artist.artist_uuid} to={`/${artist.artist_uuid}`}>
              {artist.artist_name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
