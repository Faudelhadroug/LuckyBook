<template>
    <div class="grid grid-cols-1 md:grid-cols-2 bg-neutral py-20 lg:py-32">
        <img width="600" height="600" class="mx-auto w-4/5" src="~/assets/images/logoBookBlack.webp" alt="Logo LuckyBook">
        <div class="text-center m-auto text-primary">
            <p class="text-3xl lg:text-6xl lg:mb-4">{{ bookBought }}/8888</p>
            <h2 class="mb-4 text-2xl lg:text-5xl lg:mb-14"><span class="text-secondary-contrast">LuckyBook</span> remaining</h2>
            <div class="text-neutral space-x-4 lg:space-x-10 pb-10">
                <button type="button" class="bg-secondary-contrast shadow-xl py-3 px-8 lg:py-5 lg:px-14 rounded-full cursor-not-allowed hover:scale-125 duration-300">Mint</button>
                <NuxtLink :to="{ path: '/', hash: '#FAQ'}">
                    <button type="button" class="bg-primary shadow-lg py-3 px-8 lg:py-5 lg:px-14 rounded-full hover:scale-125 duration-300">FAQ</button>
                </NuxtLink>
            </div>
            <p>Mint date coming soon! Stay tuned.</p>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            bookBought: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>