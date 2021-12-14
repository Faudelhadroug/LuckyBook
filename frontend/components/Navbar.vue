<template> 
    <div>
        <div class="bg-primary text-white justify-around text-3xl fixed w-screen py-5 hidden z-30 md:flex">
            <a :href="$route.path == '/' ? '#home' : '/'">
                <p class="text-green-500">LuckyBook</p>
            </a>
            <ul class="flex space-x-20">
                <a href="#mint"><li>Mint</li></a> 
                <a href="#roadmap"><li>Roadmap</li></a> 
                <NuxtLink to="/rarity"><li>Rarity</li></NuxtLink> 
                <a href="#FAQ"><li>FAQ</li></a> 
            </ul>
        </div>
        <div class="md:hidden">
            <div class="text-2xl bg-primary text-white flex justify-around fixed w-screen py-5 z-30">
           <a :href="$route.path == '/' ? '#home' : '/'">
                <p class="text-green-500">LuckyBook</p>
            </a>
                <img @click="visibleMobileMenu = true" class="w-10" src="../assets/images/menuMobileIcon.svg" alt="Drop menu icon">
            </div>
            <div class="bg-primary fixed w-full h-full overflow-hidden z-30" :class="visibleMobileMenu ? 'block' : 'hidden'">
                <img @click="visibleMobileMenu = false" class="absolute left-3/4 mt-10 w-10" src="../assets/images/crossIcon.svg" alt="Cross close menu Icon">
                <div class="flex h-screen">
                    <ul class="text-4xl text-center m-auto space-y-4 text-white">
                        <a @click="visibleMobileMenu = false" href="#mint"><li class="mb-10">Mint</li></a>
                        <a @click="visibleMobileMenu = false" href="#roadmap"><li class="mb-10">Roadmap</li></a>
                        <NuxtLink @click="visibleMobileMenu = false" to="rarity"><li class="mb-10">Rarity</li></NuxtLink>
                        <a @click="visibleMobileMenu = false" href="#FAQ"><li>FAQ</li></a> 
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