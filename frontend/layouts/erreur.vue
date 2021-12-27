<template>
    <div class="flex flex-col min-h-screen">
         <client-only>
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main class="flex-grow">
              <div>
                <h1 class="texter-center text-3xl md:text-5xl">404</h1>
                <br>
                <Nuxt-Link :to="{ path: '/', hash: '#home'}">
                  <p class="text-center text-lg md:text-2xl underline">Go back home</p>
                </Nuxt-Link>
              </div>
            </main>
            <footer>
                <Footbar />
            </footer>
         </client-only>
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
        ],
        link: [
          { rel: 'icon', type: 'image/png', href: '/favicon.png' }
        ]
      }
    },
    }
</script>

<style lang="scss" scoped>

</style>