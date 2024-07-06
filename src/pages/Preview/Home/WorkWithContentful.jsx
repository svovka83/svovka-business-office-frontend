import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SectionTitle from "../utils/SectionTitle";
import Section from "../utils/Section";

import Items from "./Items";

import {
  contentfulIsLoading,
  contentfulItems,
  fetchGetContentful,
} from "../../../redux/slices/contentfulSlice";

import Circular from "../../../utils/CircularProgress";

const WorkWithContentful = () => {
  const dispatch = useDispatch();
  const items = useSelector(contentfulItems);
  const isLoading = useSelector(contentfulIsLoading);

  React.useEffect(() => {
    dispatch(fetchGetContentful());
  }, [dispatch]);

  return (
    <div>
      <Section>
        <SectionTitle title="Contentful" />
        {isLoading ? (
          <Circular />
        ) : (
          items.map((items, index) => <Items items={items} index={index} />)
        )}
      </Section>
    </div>
  );
};

export default WorkWithContentful;
