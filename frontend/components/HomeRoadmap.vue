<template>
    <div class="bg-primary text-neutral py-20 lg:py-32">
        <h3 class="text-center text-3xl lg:text-5xl mb-10">Roadmap</h3>
        <div class="text-center lg:text-2xl mb-10 lg:mb-20 mx-10 md:px-32 xl:px-60 2xl:px-72">
            <p class="mb-10">Voici la ligne directionnel de notre projet cette roadmap évoluera avec le temps afin de prendre en compte les suggestions de notre communauté et de tenir à jour nos objectifs.</p>
            <p>Nous tenons à crée un projet sur le long termes afin de permettre une utilité au NFT tout en récompensant nos holders.</p>
        </div>
        <!-- page content roadmap -->
        <div class="mx-4 md:mx-40 xl:mx-72 2xl:mx-80">
            <div class="bg-neutral text-primary rounded-xl h-[600px] lg:h-[750px] flex flex-col" >
                <h4 :class="[visiblePage === 1 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-1">Introduction</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-1" :class="[visiblePage === 1 ? 'block fade-in' : 'hidden']">
                    <div class="space-y-10 lg:space-y-20">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Notre projet est composée de plusieurs chapitres qui évolueront indépendamment.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Nous voulons constuire une communauté bienveillante avec laquel avancée et établir notre futur.</p>
                    </div>
                </div>
                <h4 :class="[visiblePage === 2 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-2">Chapitre I - La période de Mint</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-2" :class="[visiblePage === 2 ? 'block fade-in' : 'hidden']">
                    <div class="m-auto space-y-4 lg:space-y-10">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>2222/8888 - 25%</u> <br> - Lancement du discord: Pour réunir notre communauté et pouvoir intéragir avec elle.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>4444/8888 - 50%</u> <br> - Airdrop: For some luckyest early holders 
                        </p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>6666/8888 - 75%</u> <br> - Rarity reveal: Vous avez accès à la page de rareté pour estimé la valeur de votre LuckyBook
                        </p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>8888/8888 - 100%</u> <br>- NFT viewer: Une nouvelle page s'ajoute aux site afin de visualisé les LuckyBook
                        </p>
                    </div>
                </div>
                <h4 :class="[visiblePage === 3 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-3">Chapitre II - Reading plateform</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-3" :class="[visiblePage === 3 ? 'block fade-in' : 'hidden']">
                    <div class="m-auto space-y-10 lg:space-y-20">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Création d'une plateforme de lecture avec un système de paiement en cryptomonnaie, DAO pour aide au developpemment et financement d'oeuvre.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Accès gratuit et autre avantages à la plateform pour les holders de LuckyBook.</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- More details coming soon...</p>
                    </div>
                </div>
                <h4 :class="[visiblePage === 4 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-4">Chapitre III - Finance aspect</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-4" :class="[visiblePage === 4 ? 'block fade-in' : 'hidden']">
                    <div class="m-auto space-y-10 lg:space-y-20">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Presentation sous forme d'article pour les investisseurs cherchant à s'intérésser à des projets prometteur</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Mise en place d'un projet DeFi</p>
                    </div>
                </div>
                <h4 :class="[visiblePage === 5 ? 'block' : 'hidden']" class="text-xl text-center pt-10 lg:pt-20 font-bold md:text-2xl lg:text-4xl page-title-5">Chapitre IV - More to come</h4>
                <div class="flex-grow flex flex-col justify-center items-center page-content-5" :class="[visiblePage === 5 ? 'block fade-in' : 'hidden']">
                    <div class="m-auto space-y-10 lg:space-y-20">
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Collaborations and sponsors for huge advantage to holders</p>
                        <p class="text-center mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- New website version for LuckyBook with more details about our goals</p>
                    </div>
                </div>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl page-footer">
                    <img @click="prevPage(visiblePage)" class="w-6 md:w-7 xl:md-10 cursor-pointer" src="../assets/images/back-arrow.svg"/>
                    <p class="text-lg xl:text-2xl mt-1 px-2">{{visiblePage}}/{{nbrPages}}</p>
                    <img @click="nextPage(visiblePage)" class="w-6 md:w-7 xl:md-10 cursor-pointer" src="../assets/images/front-arrow.svg"/>
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