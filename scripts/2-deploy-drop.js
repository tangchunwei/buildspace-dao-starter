import {AddressZero} from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

(async ()=>{
  try{
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name:"FuckDAO",
      description:"A DAO for fans of Naruto",
      image:readFileSync("scripts/assets/naruto.png"),
      primary_sale_recipient:AddressZero,
    });
    const editionDrop = await sdk.getContract(editionDropAddress,"edition-drop")
    const metadata = await editionDrop.metadata.get();
    console.log("Successfully deployed editionDrop contract,address:",editionDropAddress)

    console.log("Edition drop metadata:",metadata);
  }catch(err){
    console.log("Failed to deploy editionDrop",err);
  }
})()