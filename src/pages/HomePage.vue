<template>
    <div class="home">
        <div class="content">
            <div class="text">
                <div class="home_h_text">
                    <h2>Home page</h2>
                </div>
                <div class="home_text">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/> consequat sunt nostrud amet.</p>
                    <router-link to="/login">
                        <div class="home_button">
                          <button>Authorization</button>
                        </div>                      
                    </router-link>  
                </div>
            </div>
            <div class="home_img">
                <img src="../image/photo_2024-02-13_19-35-39.jpg"/>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
    import {RouterView, RouterLink} from 'vue-router'
</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .text{
        display: flex;
        flex-direction: column;
        margin-right: 200px;
    }
    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .home_img > img {
        width: 301px;
        height: 290px;
    }
    .home_h_text > h2{
        font-size: 40px;
    }
    .home_text > p {
        font-size: 20px;
        margin-bottom: 40px;
    }
    .home_button > button{
        width: 208px;
        height: 43px;
        background-color: red;
        border: none;
        color: white;
        font-size: 18px;
    }
    
</style>