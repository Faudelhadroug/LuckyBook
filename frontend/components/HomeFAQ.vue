<template>
    <div class="bg-primary text-neutral text-center py-10 lg:py-32"> 
        <h4 class="text-3xl md:text-5xl mb-20">FAQ</h4>
        <div class="space-y-14">
            <div @click="() => visibleElem == 1? visibleElem = 0 : visibleElem = 1" class="mx-6 md:mx-20 xl:mx-40">
                <p class="mb-4 font-bold inline-block">How much does it cost to mint a LuckyBook?</p><img class="w-5 ml-1 md:ml-2 inline-block" :src="visibleElem == 1 ? '../assets/images/dropUp.svg' : '../assets/images/dropDown.svg'" :alt="visibleElem == 1 ? 'dropUp Icon' : 'DropDown Icon'">
                <p :class="visibleElem == 1 ? 'block' : 'hidden'">Each LuckyBook is 88 $HTR. When the mint is open you will be able to specify the quantity of LuckyBook you want and you'll be told the amount to send.</p>
            </div>
            <div @click="() => visibleElem == 2? visibleElem = 0 : visibleElem = 2"  class="mx-6 md:mx-20 xl:mx-40">
                <p class="mb-4 font-bold inline-block">How to buy LuckyBook?</p><img class="w-5 ml-1 md:ml-2 inline-block" :src="visibleElem == 2 ? '../assets/images/dropUp.svg' : '../assets/images/dropDown.svg'" :alt="visibleElem == 2 ? 'dropUp Icon' : 'DropDown Icon'">
                <p :class="visibleElem == 2 ? 'block' : 'hidden'">To purchase LuckyBook you will need the <a class="underline" href="https://hathor.network/get-started/" target="_blank" rel="noopener">Hathor wallet</a>  with the corresponding amount of $HTR. <span class="text-danger">Becarefull you cannot buy NFT from an exchange like Kucoin, Ascendex...</span> Use them to transfer funds on the Hathor wallet.</p>
            </div>
            <div @click="() => visibleElem == 3? visibleElem = 0 : visibleElem = 3"  class="mx-6 md:mx-20 xl:mx-40">
                <p class="mb-4 font-bold inline-block">Where to get a Hathor wallet?</p><img class="w-5 ml-1 md:ml-2 inline-block" :src="visibleElem == 3 ? '../assets/images/dropUp.svg' : '../assets/images/dropDown.svg'" :alt="visibleElem == 3 ? 'dropUp Icon' : 'DropDown Icon'">
                <p :class="visibleElem == 3 ? 'block' : 'hidden'"><a class="underline" href="https://hathor.network/get-started/" target="_blank" rel="noopener">Hathor Wallet</a> or google "Hathor Wallet" which is available on Hathor.network !</p>
            </div>
            <div @click="() => visibleElem == 4? visibleElem = 0 : visibleElem = 4"  class="mx-6 md:mx-20 xl:mx-40">
                <p class="mb-4 font-bold inline-block">How to transfer funds to the Hathor wallet?</p><img class="w-5 ml-1 md:ml-2 inline-block" :src="visibleElem == 4 ? '../assets/images/dropUp.svg' : '../assets/images/dropDown.svg'" :alt="visibleElem == 4 ? 'dropUp Icon' : 'DropDown Icon'">
                <p :class="visibleElem == 4 ? 'block' : 'hidden'">You need to have $HTR on your exchange (<a class="underline" href="https://www.coingecko.com/fr/pi%C3%A8ces/hathor?__cf_chl_jschl_tk__=Jnl0Ft1XUdJ9yJLaidFEdQnO97TwGBtf8PpObRyeaSg-1639649650-0-gaNycGzNCL0#markets" target="_blank" rel="noopener">all exchanges</a> where you can buy $HTR ) and use the withdraw function to your address of your Hathor wallet.</p>
            </div>
            <div @click="() => visibleElem == 5? visibleElem = 0 : visibleElem = 5"  class="mx-6 md:mx-20 xl:mx-40">
                <p class="mb-4 font-bold inline-block">How long does it take for the LuckyBook to show up on my Hathor wallet?</p><img class="w-5 ml-1 md:ml-2 inline-block" :src="visibleElem == 5 ? '../assets/images/dropUp.svg' : '../assets/images/dropDown.svg'" :alt="visibleElem == 5 ? 'dropUp Icon' : 'DropDown Icon'">
                <p :class="visibleElem == 5 ? 'block' : 'hidden'">Up to a few minutes.</p>
            </div>
            <div class="pt-10 mx-10 md:mx-20 xl:mx-40">
                <p class="mb-4 font-bold inline-block">Need more help?</p>
                <p>You can currenctly contact us on <a class="underline" href="https://twitter.com/luckybooknft" target="_blank" rel="noopener">Twitter</a> and Discord soon!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        const state = reactive({
            visibleElem: 5,
            nbrElems: 6,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>