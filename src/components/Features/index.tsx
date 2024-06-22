"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

import { useState } from "react";
import {translations} from "@/components/translation/translations"

const Features = () => {
    const [isThai, setIsThai] = useState(true); // State to track current language

  const toggleLanguage = () => {
    setIsThai(!isThai); // Toggle between Thai and English
  };

  // Function to translate text based on current language state
  const translateText = (text) => {
      return isThai ? (translations.th[text] || text) : (translations.en[text] || text);
  };
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="CARROUSEL SYSTEM"
            paragraph={translateText('carrousel')}
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3" >
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
            
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Features;
