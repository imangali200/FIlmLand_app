<!-- Bottom.vue -->
<template>
    <footer class="text-white flex items-center flex-col">
        <div class="flex items-center max-w-[1200px] w-full flex-col">
            <div class="footerDiv w-full border-t border-gray-500 border-b  flex  justify-between">
                <div class="max-w-[300px] flex flex-col gap-1">
                    <h3 class="font-bold">О нас</h3>
                    <ul>
                        <li><a href="">О компании</a></li>
                        <li><a href="">Вакансии</a></li>
                        <li><a href="">Программа бета-тестирования</a></li>
                        <li><a href="">Информация для партнёров</a></li>
                        <li><a href="">Размещение рекламы</a></li>
                        <li><a href="">Пользовательское соглашение</a></li>
                        <li><a href="">Политика конфиденциальности</a></li>
                        <li><a href="">На FilmLand применяются рекомендательные технологии</a></li>
                    </ul>
                </div>
                <div class="max-w-[300px] flex flex-col gap-1">
                    <h3 class="font-bold">Разделы</h3>
                    <ul>
                        <li><a href="">Мой FilmLand</a></li>
                        <li><a href="">Что нового</a></li>
                        <li><a href="">Фильмы</a></li>
                        <li><a href="">Сериалы</a></li>
                        <li><a href="">Мультфильмы</a></li>
                        <li><a href="">ТВ-каналы</a></li>
                        <li><a href="">Статьи</a></li>
                    </ul>
                </div>
                <div class="max-w-[300px] flex flex-col gap-1">
                    <h3 class="font-bold">Служба поддержки</h3>
                    <p>Мы всегда готовы вам помочь.Наши операторы онлайн 24/7</p>
                    <button class="w-[180px] h-10 rounded-2xl" style="background-color: #1F1B2E; margin: 7px 0;">Написать в чате</button>
                    <img width="40px" class="rounded-xl" style="background-color: #1F1B2E; padding: 10px;" src="https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/email_16.svg" alt="">
                    <h4>ask.FilmLand.ru</h4>
                    <p>Ответы на вопросы</p>
                </div>
                <div class="max-w-[250px] flex justify-start flex-col items-center">
                    <img class="signImg" src="https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/noAds_56.svg" alt="">
                    <p style="margin-top: 10px; text-align: center;">Смотрите фильмы, сериалы и мультфильмы без рекламы</p>
                </div>
            </div>
            <div class="w-full flex flex-col items-start" style=" padding-top: 60px;">
                <div class="outDiv max-w-1200px flex items-center gap-4" >
                    <div>
                        <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg" alt="">
                        <div class="right">
                            <p>Загрузить в</p>
                            <h4>App Store</h4>
                        </div>
                    </div>
                    <div>
                        <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg" alt="">
                        <div class="right">
                            <p>Доступно в</p>
                            <h4>Google Play</h4>
                        </div>
                    </div>
                    <div>
                        <img src="https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/smartTvPromo_20.svg" alt="">
                        <div class="right">
                            <p>Смотрите на</p>
                            <h4>Smart TV</h4>
                        </div>
                    </div>
                    <div>
                        <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/ruStore.svg" alt="">
                        <div class="right">
                            <p>Скачайте из</p>
                            <h4>RuStore</h4>
                        </div>
                    </div>
                    <div>
                        <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appGallery.svg" alt="">
                        <div class="right">
                            <p>Откройте в</p>
                            <h4>AppGallery</h4>
                        </div>
                    </div>
                    <div>
                        <img src="https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/anyDev_20.svg" alt="">
                        <div class="right">
                            <h4>Все устройства</h4>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-3" style="margin-top: 30px;">
                    <img class="icons" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg" alt="">
                    <img class="icons" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="">
                    <img class="icons" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg" alt="">
                    <img class="icons" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg" alt="">
                    <img class="icons" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg" alt="">
                    <img class="icons" src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg" alt="">
                </div>
                <div class="flex w-full justify-between items-center" style="margin: 30px 0;">
                    <div class="left-bottom">
                        <p>© 2025 ООО FilmLand.ру»</p>
                        <p>ТОО «Content Stream (Контент Стрим)»</p>
                        <p>ТОО «Content Stream (Контент Стрим)»</p>
                    </div>
                    <div class="right-bottom">
                        <img width="100px" src="https://gambit-parent.dfs.ivi.ru/dist/release_25.05.04_bd814dd2/storm/images/paymentSystems/mps.png" alt="">
                    </div>
                </div>

            </div>
        </div>


    </footer>
    <div class="bottomNav">
        <nav>
            <ul>
                <router-link to="/search">
                    <label for="searchBottom"><img src="https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/search_16.svg" alt=""> Поиск</label>
                </router-link>
                <input type="text" id="searchBottom" placeholder="">
                <button class="signIn signInBottom"><img src="https://solea-parent.dfs.ivi.ru/icon/a5a1b2,a5a1b2/avatar_20.svg" alt="">Войти</button>
                <button class="Ещё">Ещё</button>
            </ul>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
.bottomNav {
  display: none;
}
footer{
    margin: 0 30px;
    margin-top: 40px;
    
}
.footerDiv{
    padding: 50px 0;
}
.footerDiv li a,p{
    font-size: 14px;
    font-weight: 100;
    color: gray;
}

.signImg{
    background-color: #A869F0;
    padding: 27px;
    width: 100px;
    height: 100px;
    border-radius: 18px;
    box-shadow: 1px 0px 50px 10px #A869F0 ;
}
.outDiv div{
    display: flex;
    align-items: srart;
    justify-content: center;
    background-color: #1F1B2E;
    padding: 0px 10px;
    
    border-radius: 10px;
    height: 40px;
}
.outDiv div h4,p{
    margin: 0;
}
.outDiv h4{
    font-size: 14px;
}
.outDiv p{
    font-size: 10px;
}
.outDiv div img{
    width: 20px;
}
.right{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    
}
.icons{
    padding: 10px;
    background-color:#1F1B2E ;
    border-radius: 50%;
}

@media (max-width: 1000px) {
    footer{
        display: none;
    }
  .bottomNav{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    justify-content: space-evenly;
    background: rgba(6, 16, 47, 0.678);
    filter: blur(10);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    }
        .bottomNav nav ul{
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: space-evenly;
        }
        .bottomNav nav ul a{
        color: gray;
        text-decoration: none;
        font-size: 15px;
        }
        .bottomNav nav ul a:hover{
            color: white;
            
        }
        label[for="searchBottom"] {
            display: flex;
            color: gray;
            gap: 5px;

        }
        #searchBottom{
            display: none;
        }

        .signIn{
            display: flex;
            align-items: center;
            gap: 10px;
            background-color: rgba(18, 9, 56, 0.602);
            border: none;
            padding: 7px 10px;
            border-radius: 10px;
            color: gray;
        }
        .Ещё{
            background-color: transparent;
            border: none;
            color: gray;
        }
}

@media (max-width: 460px) {
  .signIn {
    display: none;
  }

  .signInBottom {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
