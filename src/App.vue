<template>
    <nav class="py-10 px-8 border-b border-gray-200">
        <div class="max-w-7xl mx-auto">
            <div class="flex items-center justify-between">
                <div class="menu-left">
                    <a href="#" class="text-xl">KidsDoc_vault</a>
                </div>
                    <div class="menu-right">
                        <a href="/" class="text-purple-700">
                            <svg xmls="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
            </nav>

    <main class="px-8 py-10 bg-gray-200">
        <RouterView />
    </main>
    <Toast />
</template>
<script>
import axios from 'axios';
import {useUserStore} from '@/stores/user'

export default {
    setup() {
        const userStore = useUserStore()
        return {
            userStore
        }
        
    },
    
    beforeCreate() {
        this.userStore.initStore()
        const token = this.userStore.user.access
        if(token) {
            axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        }else{
            axios.defaults.headers.common["Authorization"] = "";

        }
        }
    }

</script>

