<template>
    <div class="grid grid-cols-1 md:grid-cols-3 bg-neutral pt-20 pb-2 lg:py-20 md:pb-16">
        <div class="text-center m-auto text-primary col-span-2">
            <h4 class="text-3xl lg:text-5xl mb-10">Rarity</h4>
            <p class="mx-10 lg:mx-20 mb-10">Each LuckyBook has a <span class="text-secondary-contrast">chance</span> to get <span class="text-secondary-contrast">unique</span> items to increase its value, more info about <span class="text-secondary-contrast">rarity</span> will be unlocked when 6666 LuckyBook are minted</p>
            <button type="button" disabled class="bg-secondary-contrast text-neutral shadow-xl py-4 px-14 lg:py-5 lg:px-14 rounded-full cursor-not-allowed opacity-50 md:hover:scale-125 duration-300">Rarity informations</button>
        </div>
        <img width="600" height="600" class="w-4/5 mx-auto" src="~/assets/images/clover.webp" alt="Clover with 4 leafs for more luck !">
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>