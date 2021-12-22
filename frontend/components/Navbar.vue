<template> 
    <div id="navbar" class="bg-primary text-white border-b-2 border-neutral justify-around text-3xl fixed w-screen py-5 hidden z-30 md:flex">
        <NuxtLink :to="{ path: '/', hash: '#home'}">
            <p class="text-green-500">LuckyBook</p>
        </NuxtLink>
        <ul class="flex md:space-x-10 lg:space-x-20">
            <li><NuxtLink class="hover:text-secondary" :to="{ path: '/', hash: '#mint'}">Mint</NuxtLink></li>
            <li><NuxtLink class="hover:text-secondary" :to="{ path: '/', hash: '#roadmap'}">Roadmap</NuxtLink></li>
            <li><NuxtLink class="hover:text-secondary" :to="{ path: '/', hash: '#rarity'}">Rarity</NuxtLink></li>
            <li><NuxtLink class="hover:text-secondary" :to="{ path: '/', hash: '#FAQ'}">FAQ</NuxtLink></li>
        </ul>
    </div>
    <div class="text-2xl bg-primary text-white border-b-2 border-neutral flex justify-around fixed w-screen py-5 z-30 navbar md:hidden">
    <NuxtLink :to="{ path: '/', hash: '#home'}">
        <p class="text-green-500">LuckyBook</p>
    </NuxtLink>
        <img @click="visibleMobileMenu ? null : visibleMobileMenu = true, animation('openMenu')" id="mobileMenuIcon" class="w-10" width="100" height="100" src="~/assets/images/menuMobileIcon.svg" alt="Drop menu icon">
    </div>
    <div id="mobileMenu" class="bg-primary fixed w-full h-full overflow-hidden z-30" :class="visibleMobileMenu ? 'block' : 'hidden'">
        <img @click="visibleMobileMenu = false, animation('closeMenu')" class="absolute left-3/4 mt-10 w-10" width="100" height="100" src="~/assets/images/crossIcon.svg" alt="Cross close menu Icon">
        <div class="flex h-screen">
            <ul class="text-4xl text-center m-auto space-y-14 text-white">
                <li><NuxtLink @click="visibleMobileMenu = false, animation('closeMenu')" :to="{ path: '/', hash: '#mint'}">Mint</NuxtLink></li>
                <li><NuxtLink @click="visibleMobileMenu = false, animation('closeMenu')" :to="{ path: '/', hash: '#roadmap'}">Roadmap</NuxtLink></li>
                <li><NuxtLink @click="visibleMobileMenu = false, animation('closeMenu')" :to="{ path: '/', hash: '#rarity'}">Rarity</NuxtLink></li>
                <li><NuxtLink @click="visibleMobileMenu = false, animation('closeMenu')" :to="{ path: '/', hash: '#FAQ'}">FAQ</NuxtLink></li> 
            </ul>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, ref, watch } from 'vue'
import { gsap } from 'gsap'

export default {
    setup () {
        const state = reactive({
            })
        // let rectMint = ref(99999)
           const visibleMobileMenu = ref(false);

        // document.addEventListener("scroll", (ev) => {
        //     let elem = document.getElementById("navbar");
        //     let rect = elem.getBoundingClientRect();
        //     let elemMint = document.getElementById("mint");
        //     rectMint = elemMint.getBoundingClientRect();
        //     console.log(rect.y)
        //     console.log(rectMint.y)
        // }, true)

        return {
            ...toRefs(state),
            visibleMobileMenu
        }
    },
    methods: {
        animation(payload) {
            switch (payload) {
                case 'openMenu':
                    let tl = gsap.timeline();
                    gsap.fromTo("#mobileMenuIcon", { y: '0vh' }, {duration: 1, y: '-10vh' })
                    gsap.fromTo("#mobileMenu", { x: '-100vh'}, {x: '0vh'})
                    break;
                case 'closeMenu':
                    gsap.fromTo("#mobileMenu", {x: '0vh', display:'block'}, { duration: 1, x: '-100vh', display:'block'})
                    gsap.fromTo("#mobileMenuIcon", { y: '-100vh' }, { y: '0vh'})
                    break;
            }
        }
    },
}
</script>