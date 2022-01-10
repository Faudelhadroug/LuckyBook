const express = require('express')
const app = express()
const port = 3000
const { Traits } = require('./rarity.json')

const collections = require('./json/_metadata.json');
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
        for(Trait of Traits) {
            for(item of Trait.Rarity) {

                switch(Trait.Trait_type){
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
    }
    rarityArr.push(tempObj)
}

let score = rarityArr.sort((a, b) => {
    return a.rarityPoint - b.rarityPoint;
}); 
console.log(score.reverse());

app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})