import React from 'react'
import "./homepage.css";
import { HomePageHead } from './HomePageHead';
import { PopularJobCategories } from './PopularJobCategories';
import { FeaturedJob } from './FeaturedJob';
import { TopCompanies } from './TopCompanies';
import { InfoPart } from './InfoPart';
import Blogs from './Blogs';

export const Home = () => {
  return (
    <>
    <HomePageHead/>
    <PopularJobCategories/>
    <FeaturedJob/>
    <TopCompanies/>
    <InfoPart/>
    <Blogs/>
    </>
  )
}
