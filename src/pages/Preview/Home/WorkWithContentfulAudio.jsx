import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SectionTitle from "../utils/SectionTitle";
import Section from "../utils/Section";

import {
  contentfulIsLoading,
  contentfulItemsAudio,
  fetchGetContentfulAudio,
} from "../../../redux/slices/contentfulAudioSlice";

import Circular from "../../../utils/CircularProgress";

const WorkWithContentfulAudio = () => {
  const dispatch = useDispatch();
  const items = useSelector(contentfulItemsAudio);
  const isLoading = useSelector(contentfulIsLoading);

  const [audio] = React.useState(new Audio());
  const [playing, setPlaying] = React.useState(false);
  const [currentTrack, setCurrentTrack] = React.useState(null);

  React.useEffect(() => {
    dispatch(fetchGetContentfulAudio());
  }, [dispatch]);

  const HandleTrackClick = () => {}

  return (
    <div>
      <Section>
        <SectionTitle title="Contentful get audio" />
        {isLoading ? (
          <Circular />
        ) : (
          <div>
            {items.map((items) => (
              <div className="grid_3" key={items.sys.id}>
                <h3>{items.title}</h3>
                <p>
                  {items.music.title}
                  {items.music.url}
                </p>
                <img onClick={HandleTrackClick}
                  src={items.music.url}
                  alt={items.title}
                  className="banner"
                />
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
};

export default WorkWithContentfulAudio;
