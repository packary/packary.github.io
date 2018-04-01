import React from 'react'
import Hero from '../components/Home/Hero';
import SuperSimple from '../components/Home/SuperSimple';
import OneTwoThree from '../components/Home/OneTwoThree';
import FurtherDetails from '../components/Home/FurtherDetails';
import { Footer } from "../components/Footer";
import Pricing from "../components/Home/Pricing";

const IndexPage = () => (
  <div>
    <Hero />
    <SuperSimple />
    <FurtherDetails />
    <Pricing />
    <OneTwoThree />
  </div>
);

export default IndexPage;
