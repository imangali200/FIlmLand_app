<template>
    <div class="flex items-center justify-center w-full">
        <div class="max-w-[1200px] w-full text-white " style="margin-top: 20px;" v-for="detailTr in detailsTrailer" :key="detailTr">
            <div class="all flex gap-4 items-center  justify-center md:gap-0">
                <div class="description flex flex-col gap-2 max-w-[310px] lg:max-w-[390px]" style="padding: 10px 20px;">
                    <h1 class="text:2xl lg:text-3xl font-bold ">{{ moreInformations.title }}</h1>
                    <div class="flex items-center gap-2">
                        <h5 class="text-green-400 font-bold">{{moreInformations.vote_average.toFixed(1)}}</h5>
                        <h5 class="font-light">{{ moreInformations.release_date}}</h5>
                        <h5 class="font-light">{{ moreInformations.runtime }}min</h5>
                    </div>
                    <div class="country flex gap-2">
                        <p class=" bg-gray-600 text-sm rounded-md" >{{ moreInformations.production_countries[0].name }}</p>
                        <p class=" bg-gray-600 text-sm rounded-md" >{{moreInformations.genres[0].name}}</p>
                        <p class=" bg-gray-600 text-sm rounded-md" >{{ moreInformations.original_language }}</p>
                    </div>
                    <p class="text-xs font-light tracking-wider leading-[20px] " style="margin-top: 5px;">{{ moreInformations.overview }}</p>
                    <button class="max-w-[270px] h-[40px] rounded-2xl" style="background-color: #f30745; margin-top: 6px;">Смотреть </button>
 
                </div>
                <div class="w-full max-h-[500px]">
                    <iframe  class="w-full h-[300px] lg:h-[500px] " :src="`https://www.youtube.com/embed/${detailTr.key}`" frameborder="0"></iframe>
                </div>

            </div>

        </div>
      
    </div>
    <popular/>
</template>
<script setup>
    import popular from './popular.vue';
    import {ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    const detailsTrailer = ref([])
    const moreInformations = ref([])
    const route = useRoute()
    const id = route.params.id
    async function inMovie(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=def197fd36dd23cd1dae1280e65e2087&language=en-US`)
        const movieDelail = await response.json()
        detailsTrailer.value = [movieDelail.results[0]]
        console.log(detailsTrailer.value)
    }
    async function detailsInfo(){
        const respo = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=def197fd36dd23cd1dae1280e65e2087&language=en-US`)
        const detailsInformations = await respo.json()
        moreInformations.value = detailsInformations
        console.log(moreInformations.value)
    }
    detailsInfo()
    onMounted(()=>{
        inMovie()
    })
</script>
<style>
    iframe {
        opacity: 0.4;
        padding: 10px 0; 
        padding-right: 20px;
    }
    .country p{
        padding: 3px 10px;
    }
    @media (max-width:750px){
        .all{
            display: flex;
            flex-wrap: wrap-reverse;
        }
        .country p{
        padding: 2px 5px;
        
        }
        iframe {
            padding: 10px 20px;
        }
    }

</style>
