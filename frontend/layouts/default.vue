<template>
    <div class="flex flex-col min-h-screen">
         <client-only>
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main class="flex-grow">
                <slot />
            </main>
            <footer>
                <Footbar />
            </footer>
         </client-only>
    </div>
</template>


<style >
    html, 
    body {
        overflow-x: hidden;
    }
</style>