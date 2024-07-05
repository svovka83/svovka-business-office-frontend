import React from "react";
import { useDispatch } from "react-redux";

import SectionTitle from "../utils/SectionTitle";

import Section from "../utils/Section";

import { fetchGetContentful } from "../../../redux/slices/contentfulSlice";

const WorkWithContentful = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGetContentful());
  }, [dispatch]);

  return (
    <div>
      <Section>
        <SectionTitle title="Contentful 1" />
        <img src="logo192.png" alt="12345" />
      </Section>
      <Section>
        <SectionTitle title="Contentful 2" />
        <img src="logo192.png" alt="12345" />
      </Section>
    </div>
  );
};

export default WorkWithContentful;
