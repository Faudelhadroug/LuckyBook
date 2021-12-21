<template>
    <div class="bg-primary text-neutral py-20 lg:py-32">
        <h3 class="text-center text-3xl lg:text-5xl mb-10">Roadmap</h3>
        <div class="text-center lg:text-2xl mb-10 lg:mb-20 mx-10 md:px-32 xl:px-60 2xl:px-72">
            <p class="mb-10">Here is the direction our project going down. This roadmap will evolve with time to take into account the feedback from the community and to keep our objectives up to date.</p>
            <p>We want to create a long term project to allow the NFT to be useful while rewarding our holders.</p>
        </div>
        <!-- page content roadmap -->
        <div class="mx-4 md:mx-40 xl:mx-72 2xl:mx-80">
            <div class="bg-neutral text-primary rounded-xl h-[600px] lg:h-[750px] flex flex-col" >
                <h4 :class="[visiblePage === 1 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-1">Introduction</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-1" :class="[visiblePage === 1 ? 'block fade-in' : 'hidden']">
                    <div class="space-y-10 lg:space-y-20">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Our project is composed of several chapters that will evolve independently.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">We want to build a caring community with which to advance and establish our future.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">
                            <span @click="visiblePage = 2, animation()" class="underline cursor-pointer">Chapitre I - The Mint period (2/5)</span>
                            <br>
                            <span @click="visiblePage = 3, animation()" class="underline cursor-pointer">Chapitre II - Reading plateform(3/5)</span>
                            <br>
                            <span @click="visiblePage = 4, animation()" class="underline cursor-pointer">Chapitre III  - Finance aspect (4/5)</span>
                            <br>
                            <span @click="visiblePage = 5, animation()" class="underline cursor-pointer">Chapitre IV - More to come (5/5) </span>
                        </p>
                    </div>
                </div>
                <h4 :class="[visiblePage === 2 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-2">Chapitre I - The Mint period</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-2" :class="[visiblePage === 2 ? 'block fade-in' : 'hidden']">
                    <div class="m-auto space-y-4 lg:space-y-10">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>2222/8888 - 25%</u> <br> - Launch of a discord: To gather our community and interact with it.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>4444/8888 - 50%</u> <br> - Airdrop: For some lucky early holders
                        </p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>6666/8888 - 75%</u> <br> - Rarity reveal: You will have access to the rarity page to estimate the value of your LuckyBook
                        </p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>8888/8888 - 100%</u> <br>- NFT viewer: A new page will be added to the site to view the LuckyBook
                        </p>
                    </div>
                </div>
                <h4 :class="[visiblePage === 3 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-3">Chapitre II - Reading plateform</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-3" :class="[visiblePage === 3 ? 'block fade-in' : 'hidden']">
                    <div class="m-auto space-y-10 lg:space-y-20">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Creation of a reading platform with a cryptocurrency payment system, DAO to help the development and financing of work.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- LuckyBook holders will have free access and multiple benefits to the platform.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- More details coming with LuckyBook's future website update</p>
                    </div>
                </div>
                <h4 :class="[visiblePage === 4 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-4">Chapitre III - Financial aspect</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-4" :class="[visiblePage === 4 ? 'block fade-in' : 'hidden']">
                    <div class="m-auto space-y-10 lg:space-y-20">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Private group on discord with special advantages and unique articles for investors interested in promising projects.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Recruitment of professional traders for our discord</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Recruitment for the implementation of a DeFi project</p>
                    </div>
                </div>
                <h4 :class="[visiblePage === 5 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-5">Chapitre IV - More to come</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-5" :class="[visiblePage === 5 ? 'block fade-in' : 'hidden']">
                    <div class="m-auto space-y-10 lg:space-y-20">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Regulary airdrop</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- New website version for LuckyBook with more details about our goals</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Collaborations and sponsors for huge benefits to holders</p>
                    </div>
                </div>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl page-footer">
                    <img @click="prevPage(visiblePage)" class="w-6 md:w-7 xl:md-10 cursor-pointer" src="~/assets/images/back-arrow.svg" alt="go to prev page icon"/>
                    <p class="text-lg xl:text-2xl mt-1 px-2">{{visiblePage}}/{{nbrPages}}</p>
                    <img @click="nextPage(visiblePage)" class="w-6 md:w-7 xl:md-10 cursor-pointer" src="~/assets/images/front-arrow.svg" alt="go to next page icon"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { gsap } from 'gsap'

export default {
    setup () {
        const state = reactive({
            visiblePage: 1,
            nbrPages: 5
        })
    
        return {
            ...toRefs(state),
        }
    },
    methods: {
        nextPage(page) {
            let actualPage = page
            if(page == this.nbrPages) this.visiblePage = 1;
            else this.visiblePage = this.visiblePage + 1;
            let tl = gsap.timeline();
            tl.fromTo(`.page-title-${actualPage}`, { x: '0', position: 'absolute'}, { x: '-400', opacity: 0,  position: 'absolute'})
            .fromTo(`.page-title-${this.visiblePage}`, { x: '400', opacity: 0, position: 'static'}, { x: '0', opacity: 100})
        },
        prevPage(page) {
            let actualPage = page
            if(page !== 1) this.visiblePage = this.visiblePage - 1;
            else this.visiblePage = this.nbrPages
            
            let tl = gsap.timeline();
            tl.fromTo(`.page-title-${actualPage}`, { x: '0', position: 'absolute'}, { x: '400', opacity: 0, position: 'absolute'})
            .fromTo(`.page-title-${this.visiblePage}`, { x: '-400', opacity: 0, position: 'static'}, { x: '0', opacity: 100})
        },
        animation(){
            let tl = gsap.timeline();
            tl.fromTo(`.page-title-${this.visiblePage}`, { y: '-400', x: '0', opacity: 0, position: 'static'}, { y: '0', x: '0', opacity: 100})
        }
    },
}
</script>

<style>
.fade-in {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1.5s;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

</style>