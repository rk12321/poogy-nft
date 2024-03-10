const nftData = [];

for (let i = 1; i <= 98; i++) {
    nftData.push({
        id: i,
        imageUrl: `/images/poogy/${i}.png`,
        alt: `NFT${i}`,
    });
}

export default nftData;
