<template>
    <div class="container1">
        <div class="left">
            <router-link to="/">
                <img src="https://github.com/imangali200/FilmLand_app/raw/main/src/assets/IMA%20CINEMA%20LOGO.png" alt="FilmLand Screenshot" width="35px" height="25px" />
            </router-link>
            <div class="option">
                <nav>
                    <ul>
                        <li><a href="">Мой FilmLand</a></li>
                        <li><router-link :to="{name:'genres',params:{genre:'movie'}}">Фильмы</router-link></li>
                        <li><router-link :to="{name:'genres',params:{genre:'tv'}}">Сериалы</router-link></li>
                        <li><router-link :to="{name:'genres',params:{genre:16}}">Мультфильмы</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="right">
            <button class="free">Смотреть 30 дней бесплатно</button>
            <router-link to="/search">
                <label for="search"><img src="https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/search_16.svg" alt=""> Поиск</label>
            </router-link>
            
            <input type="text" id="search" placeholder="">
            <router-link to="/message">
                <img class="natification" src="https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/pull_16.svg" alt="">

            </router-link>
            <router-link to="/signIn" class="signIn">
                <img src="https://solea-parent.dfs.ivi.ru/icon/a5a1b2,a5a1b2/avatar_20.svg" alt="">
                Войти
            </router-link>
        </div>

    </div>
    
</template>
<script setup>

</script>


<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Righteous&display=swap');
    .container1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 30px;

        font-family: "Righteous", sans-serif;
        font-weight: 400;
        font-style: normal;

      
        
    }
    .left{
        display: flex;
        align-items: center;
        gap: 30px;
        

    }
    .option nav ul{
        display: flex;
        gap: 15px;
        text-decoration: none;
        list-style: none;

    
    }
    .option nav ul a{
        color: gray;
        text-decoration: none;
        font-size: 15px;
    }
    .option nav ul a:hover{
        color: white;
        
    }
    .option nav ul li:hover{
        transform: scale(1.1);
        transition: 1.4s;
    }
    .right{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .free{
        background-color: #F30745;
        height: 35px;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
    }
    .free:hover{
        transform: scale(1.1);
        transition: 1.5s;
    }
    #search{
        display: none;
    }
    label{
        display: flex;
        align-items: center;
        gap: 10px;
        color: gray;
    }
    label:hover{
        color: white;
        transition: 1.4s;
        transform: 1.1;
    }
    .signIn{
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: rgba(18, 9, 56, 0.602);
        border: 1px solid gray;
        padding: 7px 10px;
        border-radius: 10px;
        color: gray;
    }
    .signIn:hover{
        color: white;
        transform: scale(1.1);
        transition: 1.4s;
    }
    .bottomNav{
        display: none;
    }
    .router-link-active {
        color: white;
        font-weight: bold;
    }
    @media (max-width:1000px){
        .option{
            display: none;
        }
    
        .natification{
            display: none;
        }
        label[for="search"] {
        display: none;
        }
        input{
            display: none;
        }

        
    }
    @media (max-width: 460px){
        .signIn{
            display: none;
        }
        .free{
            width: 170px;
            height: 49px;
            padding: 0;
        }
    }
</style>
