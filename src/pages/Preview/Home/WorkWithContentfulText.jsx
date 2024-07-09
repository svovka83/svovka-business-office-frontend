import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SectionTitle from "../utils/SectionTitle";
import Section from "../utils/Section";

import Items from "./Items";

import {
  contentfulIsLoading,
  contentfulItemsText,
  fetchGetContentfulText,
} from "../../../redux/slices/contentfulTextSlice";

import Circular from "../../../utils/CircularProgress";

const WorkWithContentful = () => {
  const dispatch = useDispatch();
  const items = useSelector(contentfulItemsText);
  const isLoading = useSelector(contentfulIsLoading);

  React.useEffect(() => {
    dispatch(fetchGetContentfulText());
  }, [dispatch]);

  return (
    <Section>
      <SectionTitle title="Contentful get text" />
      {isLoading ? (
        <Circular />
      ) : (
        items.map((items) => <Items key={items.sys.id} items={items} />)
      )}
    </Section>
  );
};

export default WorkWithContentful;
