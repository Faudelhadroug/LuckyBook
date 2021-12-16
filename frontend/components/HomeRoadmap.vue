<template>
    <div class="bg-primary text-neutral py-20 lg:py-32">
        <h3 class="text-center text-3xl lg:text-5xl mb-10">Roadmap</h3>
        <div class="text-center lg:text-2xl mb-20 mx-10 md:px-32 xl:px-60 2xl:px-72">
            <p class="mb-10">Voici la ligne directionnel de notre projet cette roadmap évoluera avec le temps afin de prendre en compte les suggestions de notre communauté et de tenir à jour nos objectifs.</p>
            <p>Nous tenons à crée un projet sur le long termes afin de permettre une utilité au NFT tout en récompensant nos holders</p>
        </div>
        <!-- page content roadmap -->
        <div class="mx-10 md:mx-40 xl:mx-72 2xl:mx-80">
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 1 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Introduction</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Notre projet est composée de plusieurs chapitres qui évolueront indépendamment.</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Nous voulons constuire une communauté bienveillante avec laquel avancée et établir notre futur.</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 2 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre I - La période de Mint</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>2222/8888 - 25%</u> <br> - Lancement du discord: Pour réunir notre communauté et pouvoir intéragir avec elle.</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>4444/8888 - 50%</u> <br> - Airdrop: For some luckyest early holders 
                </p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>6666/8888 - 75%</u> <br> - Rarity reveal: Vous avez accès à la page de rareté pour estimé la valeur de votre LuckyBook
                </p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48"><u>8888/8888 - 100%</u> <br>- NFT viewer: Une nouvelle page s'ajoute aux site afin de visualisé les LuckyBook
                </p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 3 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre II - Reading plateform</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Création d'une plateforme de lecture avec un système de paiement en cryptomonnaie, DAO pour financement et aide au developpemment d'oeuvre.</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Accès gratuit et autre avantages à la plateform pour les holders de LuckyBook.</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- More details coming soon...</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 4 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre III - Finance aspect</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Presentation sous forme d'article pour les investisseurs cherchant à s'intérésser à des projets prometteur</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Mise en place d'un projet DeFi</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 5 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre IV - More to come</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- Collaborations and sponsors for huge advantage to holders</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">- New website version for LuckyBook with more details about our goals</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
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
            visiblePage: 1,
            nbrPages: 6
        })
    
        return {
            ...toRefs(state),
        }
    },
    methods: {
        nextPage(page) {
            if(page !== this.nbrPages) return this.visiblePage = this.visiblePage + 1;
            this.visiblePage = 1
        },
        prevPage(page) {
            if(page !== 1) return this.visiblePage = this.visiblePage - 1;
            this.visiblePage = 6
        }
    },
}
</script>
