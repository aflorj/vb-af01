import { IArtist } from './Artist.types';
import { ResponsiveBar } from '@nivo/bar';

interface IArtistMostPopularInProps {
  mostPopularIn: IArtist['most_popular_in'];
}
export default function ArtistMostPopularIn({
  mostPopularIn,
}: IArtistMostPopularInProps) {
  return (
    <>
      {mostPopularIn && (
        <div className="col stats">
          <div className="col-content">
            <div className="stats-sheet">
              <label>Most popular in</label>
              <div
                style={{
                  width: '100%',
                  height: '18em',
                  float: 'left',
                }}
              >
                <ResponsiveBar
                  height={150}
                  layout="horizontal"
                  margin={{
                    top: 5,
                    right: 0,
                    bottom: 5,
                    left: 70,
                  }}
                  data={mostPopularIn}
                  indexBy={(i) => i.city}
                  keys={['value']}
                  colors={['#fff']}
                  colorBy="indexValue"
                  groupMode="grouped"
                  enableGridX={false}
                  enableGridY={false}
                  borderRadius={1}
                  isInteractive={false}
                  padding={0.2}
                  axisLeft={{
                    tickSize: 0,
                    tickPadding: 4,
                    tickRotation: 0,
                  }}
                  axisBottom={null}
                  motionStiffness={170}
                  motionDamping={26}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
