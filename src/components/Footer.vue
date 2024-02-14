<template>
    <div class="footer">
        <div class="img_footer">
            <img src="../image/facebook.jpg"/>
            <img src="../image/instagremm.jpg"/>
            <img src="../image/twiter.jpg"/>
            <img src="../image/in.jpg"/>
        </div>
        <div class="text_footer">
            <p>Copyright ©2020 All rights reserved </p>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 300px;
    }
    .img_footer {
        display: flex;
        gap: 40px;
    }
    .img_footer > img {
        width: 30px;
        height: 30px;
    }
    .text_footer > p{
        color: #21243D;
    }
</style>