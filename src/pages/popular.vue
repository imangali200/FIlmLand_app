<template>
<div class="allPopular flex justify-center">
    <div class="popular max-w-[1200px] w-full "  style="margin-top: 20px">
        <p class="text-gray-100 text-xl font-medium">{{recomentationText}}</p>
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

            <div v-for="popular in populars" :key="popular"  class="flex-shrink-0 ">
                <router-link :to="{name:'MoreInfo',params:{id:popular.id}}">
                    <div class="w-[180px] flex-shrink-0 h-[250px] md:h-[350px] md:w-[250px] rounded-2xl relative group">
                        <img
                        class="w-full h-full rounded-2xl object-cover"
                        :src="imgPath + popular.poster_path"
                        alt=""
                        />
                        <div class="absolute inset-0  bg-black bg-opacity-0 flex flex-col items-start justify-end  opacity-0 group-hover:opacity-60 transation-opacity duration-300" style="padding: 20px 20px;">
                            <h2 class=" font-bold text-2xl text-amber-300">{{ popular.vote_average.toFixed(1) }}</h2>
                            <p class="year text-gray-200">{{ popular.release_date }}</p>
                        </div>
                    </div>
                </router-link>
              <h2 class="text-white " style="margin-top: 10px">
                {{ popular.original_title }}
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
</template>
<script setup>
import { ref, onMounted } from "vue";

const populars = ref([]);
const imgPath = "https://image.tmdb.org/t/p/original";
const compo = ref(null);

defineProps({
    recomentationText:{
        type:String,
        default:'Рекомендации для тебя'
    }
})

async function Popular() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=def197fd36dd23cd1dae1280e65e2087&sort_by=popularity.desc&include_adult=false&language=en-US&page=1`
  );
  const datas = await response.json();
  populars.value = datas.results;
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

onMounted(() => {
  Popular();
});
</script>

<style scoped>
.allPopular {
  padding: 0px 90px;
}
@media (max-width: 900px) {
  .allPopular {
    padding: 30px 50px;
  }
}
@media (max-width: 500px) {
  .allPopular {
    padding: 30px 30px;
  }
}
</style>