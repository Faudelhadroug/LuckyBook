<template>
    <div>
        <Home id="home" />
        <HomeWhatIs />
        <HomeMint id="mint" />
        <HomeRoadmap id="roadmap" />
        <HomeRarity />
        <HomeFAQ id="FAQ" />
    </div>
</template>

<script>
export default {
    head() {
      return {
        htmlAttrs: {
            lang: 'en'
        },
        title: "LuckyBook - NFT",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'LuckyBook is a collection of 8888 generative unique NFT art collectibles with rarity traits only available on the Hathor blockchain'
          }
        ]
      }
    },
    setup () {

        return {}
    },
}
</script>

<style lang="scss" scoped>

</style>