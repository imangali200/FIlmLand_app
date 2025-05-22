<template>
<div class="allGenres flex justify-center">
    <div class="genres max-w-[1200px] w-full "  style="margin-top: 20px">
        <p  class="text-gray-100 text-2xl font-bold">{{ genreName === '16' ? 'Мультфильмы' : genreName && genreName === 'movie' ? 'Фильмы' : genreName && genreName === 'tv' ? 'Сериалы' : genreName }} смотреть онлайн</p>
        <div class="relative">
          <button
            @click="toLeftBtn"
            class="text-white text-3xl absolute top-1/2 left-[-40px] hidden sm:block"
          >
            &#10094;
          </button>
          <div
            ref="compo"
            class="flex w-full items-center gap-6 overflow-auto whitespace-nowrap"
            style="margin-top: 20px"
          >

            <div v-for="moviesData in moviesDatas" :key="moviesData"  class="flex-shrink-0 ">
                <router-link :to="{name:'MoreInfo',params:{id:moviesData.id}}">
                    <div class="w-[180px] flex-shrink-0 h-[250px] md:h-[350px] md:w-[250px] rounded-2xl relative group">
                        <img
                        class="w-full h-full rounded-2xl object-cover"
                        :src="imgPath + moviesData.poster_path"
                        alt=""
                        />
                        <div class="absolute inset-0  bg-black bg-opacity-0 flex flex-col items-start justify-end  opacity-0 group-hover:opacity-60 transation-opacity duration-300" style="padding: 20px 20px;">
                            <h2 class=" font-bold text-2xl text-amber-300">{{ moviesData.vote_average.toFixed(1) }}</h2>
                            <p class="year text-gray-200">{{ moviesData.release_date }}</p>
                        </div>
                    </div>
                </router-link>
              <h2 class="text-white " style="margin-top: 10px">
                {{ moviesData.original_title }}
              </h2>
            </div>
          </div>
          <button
            @click="toRightBtn"
            class="text-white text-3xl absolute top-1/2 right-[-40px] hidden sm:block"
          >
            &#10095;
          </button>
        </div>
    </div>
</div>
<popular recomentationText = "Популярное сейчас" />
</template>
<script setup>
    import popular from './popular.vue';
    import {useRoute} from 'vue-router'
    import {ref, onMounted,watch } from 'vue'
    const imgPath = "https://image.tmdb.org/t/p/original";
    const compo = ref(null);

    const route = useRoute()
    const genreName = ref(route.params.genre)

    const moviesDatas = ref([])




    async function showMovies(){
        if(genreName.value === "movie" || genreName.value === 'tv'){
            const response = await fetch(`https://api.themoviedb.org/3/discover/${genreName.value}?api_key=def197fd36dd23cd1dae1280e65e2087&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
            const movies = await response.json()
            moviesDatas.value = movies.results
            console.log(moviesDatas.value)
        }
        else if(typeof genreName.value !== 'srting'){
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=def197fd36dd23cd1dae1280e65e2087&include_adult=false&include_video=false&language=en-US&page=1&with_genres=${genreName.value}`)
            const multiMovie = await res.json()
            moviesDatas.value = multiMovie.results

        }
    
    }
    function toLeftBtn() {
    if (compo.value) {
        compo.value.scrollBy({
        left: -800,
        behavior: "smooth",
        });
    }
    }

    function toRightBtn() {
    if (compo.value) {
        compo.value.scrollBy({
        left: 800,
        behavior: "smooth",
        });
    }
    }
    onMounted(()=>{
        showMovies()
    })
    watch(
        ()=> route.params.genre,(genre)=>{
        genreName.value = genre;
        showMovies()
    })
</script>
<style scoped>
.allGenres {
  padding: 0px 90px;
}
@media (max-width: 900px) {
  .allGenres {
    padding: 30px 50px;
  }
}
@media (max-width: 500px) {
  .allGenres {
    padding: 30px 30px;
  }
}
</style>