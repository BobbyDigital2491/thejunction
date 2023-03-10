import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import SEO from "../components/SEO/SEO";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    
    <Container maxWidth="lg">
      <SEO title={"The Junction: Built Using Polygon Layer 2 technology."} 
      description={"The Junction is a decentralized NFT marketplace built on the cutting-edge Polygon Layer 2 technology."} 
      image={"public/junction.png"} 
      url={"Viccci.xyz"}  />
      <br/><br/><br/><br/>
      <h1>Buy NFTs</h1>
      <p>Browse which NFTs are available from the collection.</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
    </Container>
  );
}
