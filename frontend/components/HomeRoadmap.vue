<template>
    <div class="bg-primary text-neutral py-20 lg:py-32">
        <h3 class="text-center text-3xl lg:text-5xl mb-10">Roadmap</h3>
        <div class="text-center lg:text-2xl mb-20 mx-10 md:px-32 xl:px-60 2xl:px-72">
            <p class="mb-10">Voici la ligne directionnel de notre projet cette roadmap évoluera avec le temps afin d'y introduire les meilleurs suggestions de nos LuckyBook owner et de tenir à jour nos objectifs.</p>
            <p>Nous tenons à crée un projet sur le long termes tout en récompensant les owners et les personnes qui font vivre notre communauté Making an utility to own LuckyBook.</p>
        </div>
        <!-- page content roadmap -->
        <div class="mx-10 md:mx-40 xl:mx-72 2xl:mx-80">
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 1 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Introduction</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">L'objectif principales est d'aider au developpement d'un projet de publication de Livre/Manga d'un de nos holders avec un système de vote communautaire pour le choix de celui et des Royalties pour tout les holders</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Une partie de l'argent récolté avec la vente des NFT servira à financer ce projet et son marketing</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 2 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre I</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">L'objectif principales est d'aider au developpement d'un projet de publication de Livre/Manga d'un de nos holders avec un système de vote communautaire pour le choix de celui et des Royalties pour tout les holders</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Une partie de l'argent récolté avec la vente des NFT servira à financer ce projet et son marketing</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 3 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre II</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">L'objectif principales est d'aider au developpement d'un projet de publication de Livre/Manga d'un de nos holders avec un système de vote communautaire pour le choix de celui et des Royalties pour tout les holders</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Une partie de l'argent récolté avec la vente des NFT servira à financer ce projet et son marketing</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 4 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre III</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">L'objectif principales est d'aider au developpement d'un projet de publication de Livre/Manga d'un de nos holders avec un système de vote communautaire pour le choix de celui et des Royalties pour tout les holders</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Une partie de l'argent récolté avec la vente des NFT servira à financer ce projet et son marketing</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 5 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre IV</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">L'objectif principales est d'aider au developpement d'un projet de publication de Livre/Manga d'un de nos holders avec un système de vote communautaire pour le choix de celui et des Royalties pour tout les holders</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Une partie de l'argent récolté avec la vente des NFT servira à financer ce projet et son marketing</p>
                <div class="flex justify-center space-x-4 pb-5 md:text-lg lg:text-xl xl:text-2xl">
                    <p @click="prevPage(visiblePage)" class="cursor-pointer">&lt;--</p>
                    <p>{{visiblePage}}/{{nbrPages}}</p>
                    <p @click="nextPage(visiblePage)" class="cursor-pointer">--&gt;</p>
                </div>
            </div>
            <div class="bg-neutral text-primary rounded" :class="[visiblePage === 6 ? 'block' : 'hidden']">
                <h4 class="text-xl text-center mb-10 pt-6 underline md:text-2xl lg:text-4xl">Chapitre V</h4>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">L'objectif principales est d'aider au developpement d'un projet de publication de Livre/Manga d'un de nos holders avec un système de vote communautaire pour le choix de celui et des Royalties pour tout les holders</p>
                <p class="text-center mb-10 mx-6 lg:text-lg xl:text-2xl lg:mx-20 xl:mx-32 2xl:mx-48">Une partie de l'argent récolté avec la vente des NFT servira à financer ce projet et son marketing</p>
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
