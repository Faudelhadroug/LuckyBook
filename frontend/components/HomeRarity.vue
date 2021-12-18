<template>
    <div class="grid grid-cols-1 md:grid-cols-3 bg-neutral pt-20 pb-2 lg:py-20 md:pb-16">
        <div class="text-center m-auto text-primary col-span-2">
            <h4 class="text-3xl lg:text-5xl mb-10">Rarity</h4>
            <p class="mx-10 lg:mx-20 mb-10">Each LuckyBook have <span class="text-secondary">chance</span> to get <span class="text-secondary">unique</span> item to increase the value of the NFT, more info about <span class="text-secondary">rarity</span> will be unlocked when all LuckyBook are discovered</p>
            <button type="button" disabled class="bg-secondary text-neutral py-4 px-14 lg:py-5 lg:px-14 rounded-full cursor-not-allowed opacity-50">Rarity informations</button>
        </div>
        <img class="w-4/5 mx-auto" src="../assets/images/clover.png" alt="Clover with 4 leafs for more luck !">
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