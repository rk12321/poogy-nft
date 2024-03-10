import React, { useEffect, useRef, useState } from "react";
import { useScroll, transform, useTransform, motion } from 'framer-motion';
import nftData from "./data"; // Import NFT data
import styles from './style.module.scss'


const DesktopNFT = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  // Function to advance to the next group of NFTs
  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % Math.ceil(nftData.length / 3));
  };

  // Automatically switch to the next group every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextGroup, 3000);
    return () => clearInterval(interval);
  }, [currentGroup]);

  return (
    <div className="text-center overflow-hidden lg:mt-40 hidden lg:block" id="nft">
      <div className="lg:mt-80 mt-40">
        <h1 className="heading2">NFT&apos;S</h1>
        <div className="flex flex-row justify-center">
          {/* Display the NFTs for the current group */}
          {nftData.slice(currentGroup * 3, currentGroup * 3 + 3).map((nft) => (
            <div className={`w-1/3 p-4 pt-12 relative ${styles['flip-container']}`} key={nft.id}>
              <div className={styles.flipper}>
                <img
                  src={nft.imageUrl}
                  alt={nft.alt}
                  className="w-full h-auto border-2 rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TabNFT = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  // Function to advance to the next group of NFTs
  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % nftData.length);
  };

  // Automatically switch to the next group every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextGroup, 3000);
    return () => clearInterval(interval);
  }, [currentGroup]);

  return (
    <div className="text-center overflow-hidden mt-40 hidden lg:hidden md:block" id="nft">
      <div className="mt-40">
        <h1 className="heading2">NFT&apos;S</h1>
        <div className="flex justify-center">
          {/* Display two NFTs at a time */}
          {[currentGroup, (currentGroup + 1) % nftData.length].map((group) => (
            <div className={`p-4 pt-12 relative ${styles['flip-container']} hidden md:block`} key={nftData[group].id}>
              <div className={styles.flipper}>
                <img
                  src={nftData[group].imageUrl}
                  alt={nftData[group].alt}
                  className="w-full h-auto border-2 rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileNFT = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  // Function to advance to the next group of NFTs
  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % nftData.length);
  };

  // Automatically switch to the next group every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextGroup, 3000);
    return () => clearInterval(interval);
  }, [currentGroup]);

  return (
    <div className="text-center overflow-hidden mt-40 lg:hidden md:hidden" id="nft">
      <div className="mt-40">
        <h1 className="heading2">NFT&apos;S</h1>
        <div className="flex justify-center">
          {/* Display the current NFT */}
          <div className={`p-4 pt-12 relative ${styles['flip-container']}`} key={nftData[currentGroup].id}>
            <div className={styles.flipper}>
              <img
                src={nftData[currentGroup].imageUrl}
                alt={nftData[currentGroup].alt}
                className="w-full h-auto border-2 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Main() {



  return (
    <div >
      <DesktopNFT />
      <TabNFT />
      <MobileNFT />
    </div>
  )
}

