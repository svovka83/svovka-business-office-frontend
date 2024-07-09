import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SectionGallery from "../utils/SectionGallery";

import { fetchGetContentfulText } from "../../../redux/slices/contentfulTextSlice";
import { contentfulItemsText } from "../../../redux/slices/contentfulTextSlice";
import SectionTitle from "../utils/SectionTitle";

const Gallery = () => {
  const dispatch = useDispatch();
  const items = useSelector(contentfulItemsText);

  React.useEffect(() => {
    dispatch(fetchGetContentfulText());
  }, [dispatch]);

  return (
    <div className="text-align">
      <ul>
        {items.map((items) => (
          <SectionGallery>
            <li key={items.sys.id}>
              <SectionTitle title={items.title} />
              <img
                src={items.picture.url}
                alt={items.picture.fileName}
                className="banner"
              />
            </li>
          </SectionGallery>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
