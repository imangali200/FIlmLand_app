<template>
  <div class="relative">
    <router-link to="/">
      <img
        class="absolute right-8 top-8"
        src="https://solea-parent.dfs.ivi.ru/icon/a5a1b2,a5a1b2/close_20.svg"
        alt=""
      />
    </router-link>
    <div class="all">
      <div class="flex flex-col  md:items-start items-center gap-7">
        <h1 class="text-white hidden md:flex text-4xl font-bold">Поиск</h1>
          <input
            v-model="nameMovie"
            @keyup="search"
            class="w-[290px] md:w-[600px]    bg-gray-50 h-12 rounded-2xl"
            style="padding-left: 10px"
            placeholder="Фильмы, сериалы, жанры и персоны"
            type="text"
          />

      </div>
      <div class="searchDiv" v-show="searchDiv" style="margin-top: 34px">
        <div class="max-w-[1700px] flex flex-col items-center">
          <div class="flex items-center justify-center gap-6 flex-wrap">
            <div
              class="max-w-[220px] "
              v-for="searchvalue in searchvalues"
              :key="searchvalue"
            >
            <router-link :to="{name:'MoreInfo',params:{id:searchvalue.id}}">
              <div class="w-[220px] h-[320px] rounded-2xl relative group ">
                <img
                  class="w-full h-full rounded-2xl"
                  :src="imgPath + searchvalue.poster_path"
                  alt=""
                />
                <div class="absolute inset-0  bg-black bg-opacity-0 flex flex-col items-start justify-end  opacity-0 group-hover:opacity-60 transation-opacity duration-300" style="padding: 20px 20px;">
                    <h2 class=" font-bold text-2xl text-amber-300">{{ searchvalue.vote_average.toFixed(1) }}</h2>
                    <p class="year text-gray-200">{{ searchvalue.release_date }}</p>
                </div>

              </div>
            </router-link>
              <p class="text-white" style="margin-top: 10px">
                {{ searchvalue.original_title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <popular/>
</template>
<script setup>
import popular from "./popular.vue";
import { ref } from "vue";

const imgPath = "https://image.tmdb.org/t/p/original";

const searchvalues = ref([]);
const nameMovie = ref("");
const searchDiv = ref(true);



async function search() {

  const respon = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=def197fd36dd23cd1dae1280e65e2087&query=${nameMovie.value}&include_adult=false&language=en-US&page=1`
  );
  const infos = await respon.json();
  searchvalues.value = infos.results;
  console.log(searchvalues.value);

}

</script>
<style scoped>
.all {
  padding: 90px;
}
@media (max-width: 900px) {
  .all {
    padding: 50px 20px;
  }
}
@media (max-width: 500px) {
  .all {
    padding: 70px 30px;
  }
}
</style>
