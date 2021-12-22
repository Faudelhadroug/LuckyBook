<template>
    <div class="bg-primary">   
        <div class="pt-20 bg-primary"></div>
        <div class="relative">
            <div class="absolute w-full h-10 bg-neutral top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href="https://twitter.com/luckybooknft" target="_blank" rel="noopener">
                <button type="button" class="bg-twitter text-neutral text-sm rounded-full h-16 w-16 lg:h-20 lg:w-20 flex items-center justify-center absolute -ml-12 lg:-ml-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> <img width="250" height="250" class="w-8 lg:w-10" src="~/assets/images/twitterIconWhite.svg" alt="Twitter icon white">
                </button>
            </a>
            <button type="button" class="bg-discord text-neutral cursor-not-allowed text-sm rounded-full h-16 w-16 lg:h-20 lg:w-20 flex items-center justify-center absolute ml-12 lg:ml-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> <img width="250" height="250" class="w-8 lg:w-10" src="~/assets/images/discordIconWhite.svg" alt="Discord icon white">
            </button>
            </div>
            <img width="1920" height="1080" class="hidden md:block" src="~/assets/images/bookHomeDesktop.svg" alt="Lucky book home page desktop">
            <img width="1000" height="1000" class="md:hidden" src="~/assets/images/bookHomeMobile.svg" alt="Lucky book home page mobile">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>