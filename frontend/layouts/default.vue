<template>
    <div class="flex flex-col min-h-screen">
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
    </div>
</template>
