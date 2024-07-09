import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

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

  const HandleTrackClick = (items) => {
    setPlaying((prev) => {
      const isPlaying = items.sys.id === currentTrack?.sys?.id ? !prev : null;

      audio.src = items.music.url;
      !isPlaying ? audio.pause() : audio.play();

      return isPlaying;
    });
    setCurrentTrack(items);
  };

  return (
    <div>
      <Section>
        <SectionTitle title="Contentful get audio" />
        {isLoading ? (
          <Circular />
        ) : (
          <div>
            {items.map((items) => (
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.8,
                }}
                className="grid_3"
                key={items.sys.id}
              >
                <h3>{items.title}</h3>
                <div>
                  <img
                    onClick={() => HandleTrackClick(items)}
                    src={items.picture.url}
                    alt={items.title}
                    className="audio"
                  />
                </div>
                {!!playing && items.sys.id === currentTrack.sys.id ? (
                  <span className="playing">Playing 🎶</span>
                ) : (
                  <p>{items.music.title}</p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
};

export default WorkWithContentfulAudio;
