<template>
  <div id="home">
    <app-head></app-head>
    <app-slide></app-slide>
    <app-news></app-news>
    <app-openmeg></app-openmeg>
    <app-media></app-media>
    <app-special></app-special>
    <div class="boxMag" >
      <div v-for="boxMag in boxMags">
        <div class="magOpen">
          <router-link :to="boxMag.url">{{ boxMag.boxMaglist}}</router-link></div>
      </div>
     
      
    </div>
    <div  :class="{QRcodeImg}">
      <div :class="{ QRcode }">
        <div><img src="src/assets/weixin.jpg"></div>
        
      </div>
      <div :class="{ QRcode }">
        <div><img src="src/assets/weixin.jpg"></div>
      </div>
      <div :class="{ QRcode }">
        <div><img src="src/assets/weixin.jpg"></div>
      </div>
    </div>
    <foots></foots>
  </div>
</template>

<script>
import Head from './portion/Head'
import Slide from './portion/Slide'
import News from './portion/News'
import Openmeg from './portion/Openmeg'
import Media from './portion/Media'
import Special from './portion/Special'
import Foots from './portion/Foots'
export default {
  name: 'Home',
  proto:{
    title:{
      type:String
    }
  },
  data(){
    return{
      QRcode:true,
      QRcodeImg:true,
      boxMags:[
        {boxMaglist:'信息公开',url:'/jj'},
        {boxMaglist:'信息公开',url:'/jj'},
        {boxMaglist:'信息公开',url:'/jj'},
        {boxMaglist:'信息公开',url:'/jj'}
      ]
    }
  },
  components:{
    "app-head":Head,
    "app-slide":Slide,
    "app-news":News,
    "app-openmeg":Openmeg,
    "app-media":Media,
    "app-special":Special,
    "foots":Foots
  }
}
</script>

<style>
.boxMag{padding: 0.3rem;}
.magOpen{
  height: 0.8rem; background-color: #026ba2; font-size: 0.3rem;color:#000000; padding: 0.2rem; margin-top: 0.3rem;
}
.QRcodeImg{  height: 2rem;}
.QRcode{width: 2rem; padding: 0.2rem;float: left; }


</style>
