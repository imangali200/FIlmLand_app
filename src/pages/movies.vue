<template>
    <div class="flex flex-col items-center justify-center" style="margin: 0 20px;">
        <div v-for="(genres,index) in allMoviesWithGenre" :key="genres" class="max-w-[1200px] w-full mt-10" style="margin-top: 20px;"  >
            <h2 class="text-white text-2xl font-medium ">{{ genres.name }}</h2>
            <div class="relative">
                <button @click="toLeft(index)" class="changeBtn text-white text-3xl absolute left-[-25px] top-1/2 bg-transparent ">&#10094;</button>
                <div :ref="el => { if (el) scrollContainers[index] = el }" class="flex items-center gap-2 overflow-x-auto whitespace-nowrap" style="margin-top: 10px;">
                
                    <div v-for="movies in genres.movies" :key="movies.id" class="w-max-[250px] w-full flex flex-col gap-2" style="margin: 0px 4px;"  >
                        
                        <div  class=" w-[250px] h-[350px] bg-gray-800 rounded-2xl relative group">
                            <router-link :to="{name:'MoreInfo',params:{id:movies.id}}">
                                <img 
                                    class="w-full h-full object-cover rounded-2xl"
                                    :src="imgPath + movies.poster_path" 
                                    alt=""
                                >
                                <div class="absolute inset-0  bg-black bg-opacity-0 flex flex-col items-start justify-end  opacity-0 group-hover:opacity-60 transation-opacity duration-300" style="padding: 20px 20px;">
                                    <h2 class=" font-bold text-2xl text-amber-300">{{ movies.vote_average.toFixed(1) }}</h2>
                                    <p class="year text-gray-200">{{ movies.release_date }}</p>
                                </div>
                            </router-link>
                            <!-- <button 
                                @click="liked(movies.id)" 
                                :class="['heart text-white absolute text-2xl top-4 right-3']">
                                {{ isLiked[movies.id] ? '❤️' : '♡'}}
                            </button> -->
                                
                        </div>
                        <h2 class="text-white w-max-[250px] w-full break-words">{{ movies.title }}</h2>

                    </div>
                
                </div>
                <button @click="toRight(index)" class="changeBtn text-white text-3xl absolute right-[-25px] top-1/2 bg-transparent">&#10095;</button>
            </div>


        </div>
    </div>
    
</template>
<script setup>
    import {ref,onMounted } from 'vue';
    const imgPath = "https://image.tmdb.org/t/p/original";
    const apiKey = "def197fd36dd23cd1dae1280e65e2087";
    const allMoviesWithGenre = ref([])
    // const isLiked = ref({});

    async function getWithGenres() {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        const datas = await res.json()
        const genres = datas.genres
        const allMovies =  genres.map(async (genre) => {
            const movieres = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}&sort_by=popularity.desc&include_adult=false`)
            const movieData = await movieres.json()
            return{
                name:genre.name,
                movies:movieData.results
            }
        });
        allMoviesWithGenre.value = await Promise.all(allMovies)
        

    }

    const scrollContainers = ref([]);
    function toLeft(index) {
        if (scrollContainers.value[index]) {
            scrollContainers.value[index].scrollBy({
            left: -800,
            behavior: 'smooth'
            });
        }
    }

    function toRight(index) {
    if (scrollContainers.value[index]) {
        scrollContainers.value[index].scrollBy({
        left: 800,
        behavior: 'smooth'
        });
    }
    }
    // function liked(moviesId) {
    // // Create new state
    //     const newLikedState = {
    //         ...isLiked.value,
    //         [moviesId]: !isLiked.value[moviesId]
    //     };
    //     // Update ref
    //     isLiked.value = newLikedState;
    //     // Save to localStorage
    //     localStorage.setItem('likedMovies', JSON.stringify(newLikedState));
    // }
    onMounted(()=>{
        getWithGenres()
    })



</script>
<style>
    @media (max-width:500px){
        .changeBtn{
            display: none;
        }
    }
</style>