<template> 
    <div class="">
        <div class="bg-primary text-white border-b-2 border-neutral justify-around text-3xl fixed w-screen py-5 hidden z-30 md:flex">
            <NuxtLink :to="{ path: '/', hash: '#home'}">
                <p class="text-green-500">LuckyBook</p>
            </NuxtLink>
            <ul class="flex space-x-20">
                <NuxtLink class="hover:text-secondary" :to="{ path: '/', hash: '#mint'}"><li>Mint</li></NuxtLink> 
                <NuxtLink class="hover:text-secondary" :to="{ path: '/', hash: '#roadmap'}"><li>Roadmap</li></NuxtLink> 
                <!-- <NuxtLink class="hover:text-secondary" to="/rarity"><li>Rarity</li></NuxtLink>  -->
                <NuxtLink class="hover:text-secondary" :to="{ path: '/', hash: '#FAQ'}"><li>FAQ</li></NuxtLink> 
            </ul>
        </div>
        <div class="md:hidden">
            <div class="text-2xl bg-primary text-white border-b-2 border-neutral flex justify-around fixed w-screen py-5 z-30">
           <NuxtLink :to="{ path: '/', hash: '#home'}">
                <p class="text-green-500">LuckyBook</p>
            </NuxtLink>
                <img @click="visibleMobileMenu = true" class="w-10" src="../assets/images/menuMobileIcon.svg" alt="Drop menu icon">
            </div>
            <div class="bg-primary fixed w-full h-full overflow-hidden z-30" :class="visibleMobileMenu ? 'block' : 'hidden'">
                <img @click="visibleMobileMenu = false" class="absolute left-3/4 mt-10 w-10" src="../assets/images/crossIcon.svg" alt="Cross close menu Icon">
                <div class="flex h-screen">
                    <ul class="text-4xl text-center m-auto space-y-4 text-white">
                        <NuxtLink @click="visibleMobileMenu = false" :to="{ path: '/', hash: '#mint'}"><li class="mb-10">Mint</li></NuxtLink>
                        <NuxtLink @click="visibleMobileMenu = false" :to="{ path: '/', hash: '#roadmap'}"><li class="mb-10">Roadmap</li></NuxtLink>
                        <!-- <NuxtLink @click="visibleMobileMenu = false" to="rarity"><li class="mb-10">Rarity</li></NuxtLink> -->
                        <NuxtLink @click="visibleMobileMenu = false" :to="{ path: '/', hash: '#FAQ'}"><li>FAQ</li></NuxtLink> 
                    </ul>
                </div>0
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