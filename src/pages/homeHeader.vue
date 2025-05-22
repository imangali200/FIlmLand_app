<template>
    <div class="slider-wrapper">
      <button class="arrow left" @click="toLeft">&#10094;</button>
      <div class="slider" ref="slider" @scroll="checkScroll">
        <div class="poster" v-for="(data, index) in repeatedImages" :key="index">
          <router-link :to="{name:'MoreInfo',params:{id:data.id}}">
            <img :src="imgPath + data.backdrop_path" alt="">
          </router-link>
          

        </div>
      </div>
      <button class="arrow right" @click="toRight">&#10095;</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
  
  const slider = ref(null);
  const datas = ref([]);
  const repeatedImages = ref([]);
  const imgPath = "https://image.tmdb.org/t/p/original";
  
  async function getApi() {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=def197fd36dd23cd1dae1280e65e2087&language=en-US");
    const data = await res.json();
    datas.value = data.results;

  
    // Repeat 5 times to fake infinite loop
    repeatedImages.value = [...datas.value, ...datas.value, ...datas.value, ...datas.value, ...datas.value];
  
    // Wait for DOM, then scroll to the middle set
    await nextTick();
    centerScroll();
  }
  
  function centerScroll() {
    const el = slider.value;
    const itemWidth = el.querySelector('.poster')?.offsetWidth || 1000;
    const total = datas.value.length;
    el.scrollLeft = itemWidth * total * 2;
  }
  
  function toRight() {
    const el = slider.value;
    const itemWidth = el.querySelector('.poster')?.offsetWidth || 1000;
    el.scrollBy({ left: itemWidth, behavior: 'smooth' });
    resetAuto();
  }
  
  function toLeft() {
    const el = slider.value;
    const itemWidth = el.querySelector('.poster')?.offsetWidth || 1000;
    el.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    resetAuto();
  }
  
  function checkScroll() {
    const el = slider.value;
    const itemWidth = el.querySelector('.poster')?.offsetWidth || 1000;
    const total = datas.value.length;
  
    // Reset to middle if near start or end
    if (el.scrollLeft <= itemWidth) {
      el.scrollLeft = itemWidth * total * 2;
    } else if (el.scrollLeft >= el.scrollWidth - itemWidth * 2) {
      el.scrollLeft = itemWidth * total * 2;
    }
  }
  
  let interval = null;
  function startAuto() {
    interval = setInterval(() => {
      toRight();
    }, 7000);
  }
  function resetAuto() {
    clearInterval(interval);
    startAuto();
  }
  
  onMounted(() => {
    getApi();
    startAuto();
  });
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
  </script>
  
  <style scoped>
  .slider-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 20px;
  }
  .slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior:smooth;
    gap: 20px;
    padding: 0 50%;
  }
  .poster {
    scroll-snap-align: center;
    flex-shrink: 0;
  }
  .poster img {
    width: 1200px;
    height: 600px;
    border-radius: 16px;
    object-fit: cover;
  }
 
  .slider {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 36px;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    z-index: 1;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    text-align: center;
  }
  .left {
    left: 50px;
  }
  .right {
    right: 30px;
  }
  @media (max-width:780px){
    .poster img {
    width: 780px;
    height: 400px;
    border-radius: 16px;
    object-fit: cover;
  }
  .arrow{
    display: none;
  }
  }
  @media (max-width:560px){
    .poster img {
    width: 560px;
    height: 300px;
    border-radius: 16px;
    object-fit: cover;
  }
  }
  @media (max-width:420px){
    .poster img {
    width: 420px;
    height: 250px;
    border-radius: 16px;
    object-fit: cover;
  }
  }
  </style>
  