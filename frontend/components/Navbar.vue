<template> 
    <div>
        <div class="bg-primary text-white justify-around text-3xl fixed w-screen py-5 hidden z-30 md:flex">
            <p class="text-green-500">LuckyBook</p>
            <ul class="flex space-x-20">
                <a href="#"><li>Mint</li></a> 
                <a href="#"><li>Roadmap</li></a> 
                <a href="#"><li>Rarity</li></a> 
            </ul>
        </div>
        <div class="md:hidden">
            <div class="text-2xl bg-primary text-white flex justify-around fixed w-screen py-5 z-30">
                <p>Bookz</p>
                <img @click="visibleMobileMenu = true" class="w-10" src="../assets/images/menuMobileIcon.svg" alt="Drop menu icon">
            </div>
            <div class="bg-primary fixed w-full h-full overflow-hidden z-30" :class="visibleMobileMenu ? 'block' : 'hidden'">
                <img @click="visibleMobileMenu = false" class="absolute left-3/4 mt-10 w-10" src="../assets/images/crossIcon.svg" alt="Cross close menu Icon">
                <div class="flex h-screen">
                    <ul class="text-4xl text-center m-auto space-y-4 text-white">
                        <a href="#"><li class="mb-10">Home</li></a>
                        <a href="#"><li class="mb-10">Mint</li></a>
                        <a href="#"><li class="mb-10">Roadmap</li></a>
                        <a href="#"><li>Rarity</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            visibleMobileMenu: false,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>