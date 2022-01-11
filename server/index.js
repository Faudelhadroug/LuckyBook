const express = require('express')
const fs = require("fs");
const app = express()
const port = 3000
const { traits } = require('./rarityInfo.json')
const collections = require('./_metadata.json');
const cid = ""


app.get('/globalRanking', (req, res) => {
    let rarityArr = [];
    for (collection of collections) {
        let rarityPoint = 0
        //console.log(collection.name);
        switch(collection.attributes.length){
            case 4:
                rarityPoint +=1
                break;
            case 5:
                rarityPoint +=3
                break;
            case 6:
                rarityPoint +=8
                break;
            case 7:
                rarityPoint +=15
                break;
            case 8:
                rarityPoint +=20
                break;
        }
        for(attribute of collection.attributes){
            //console.log(attribute.value.substring(0, attribute.value.indexOf('_')));
            switch(attribute.value.substring(0, attribute.value.indexOf('_'))){
                case "Common":
                    rarityPoint += 1;
                    break;
                case "Rare":
                    rarityPoint += 2;
                    break;
                case "SuperRare":
                    rarityPoint += 3;
                    break;
                case "HyperRare":
                    rarityPoint += 5;
                    break;
                case "UltraRare":
                    rarityPoint += 8;
                    break;
                case "Epic":
                    rarityPoint += 12;
                    break;
                case "Legendary":
                    rarityPoint += 21;
                    break;
                case "Mythic":
                    rarityPoint += 30;
                    break;
                case "Special":
                    rarityPoint += 50;
                    break;
                case "Unique":
                    rarityPoint += 88;
                    break;
            }
            for(trait of traits) {
                for(item of trait.rarity) {
                    switch(trait.traitType){
                        case "Background":
                            if(attribute.value == item.trait) rarityPoint -= `0.${item.occurrence}`
                            break;
                        case "Logo":
                            if(attribute.value == item.trait) rarityPoint -= `0.${item.occurrence}`
                            break;
                        case "Book":
                            if(attribute.value == item.trait) rarityPoint -= `0.${item.occurrence}`
                            break;
                        case "Clover":
                            if(attribute.value == item.trait) rarityPoint -= `0.${item.occurrence}`
                            break;
                    }
                }
            }
        }
        //console.log(rarityPoint);
        let tempObj = {
            name: collection.name,
            rarityPoint: rarityPoint.toFixed(2),
            link: `https://ipfs.io/ipfs${cid}/${collection.edition}.json`
        }
        rarityArr.push(tempObj)
    }
    
    let score = rarityArr.sort((a, b) => {
        return a.rarityPoint - b.rarityPoint;
    }); 
    score = score.reverse();
    score.forEach((elem, x) => elem.ranking = `${x+1}/8888`);
    fs.writeFile("./rarityRanking.json",  JSON.stringify(score), (err) => {
        // Error checking
        if (err) throw err;
        console.log("Json created with rarity info");
    });
    res.send(score)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})