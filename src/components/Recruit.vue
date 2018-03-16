<template>
	<div class="recruit">
		<app-head></app-head>
		<app-titlesImg :titleimg="titleimg"></app-titlesImg>
		<div :class="{ headTop }" >
			<div :class="{ three_wire }" @click="showToggle"></div>
		</div>
		<div :class="{ nav }" class="clearfix" v-show="isShow">
			<div  v-for=" title in titles">
				<div :class="{ nav_title }">
					<router-link :to="title.url">{{title.meags}}</router-link>
				</div>
			</div>
		</div>
		
		<app-titles v-bind:titlemag="titlemag"></app-titles>


		<div class="recruit_box">
			<div class="recruit_img">
				<img src="src/assets/recruit.jpg">
			</div>
			<div class="recruitList">
				<span class="recruitList_color">招生计划</span>
				<span>简要介绍各个专业代码,招生人数,收费标准...</span>
			</div>

		</div>
		<div class="recruit_box">
			<div class="recruit_img">
				<img src="src/assets/recruit.jpg">
			</div>
			<div class="recruitList">
				<span class="recruitList_color">自主招生专业</span>
				<span>简要介绍各个专业代码,招生人数,收费标准...</span>
			</div>

		</div>
		<div class="recruit_box">
			<div class="recruit_img">
				<img src="src/assets/recruit.jpg">
			</div>
			<div class="recruitList">
				<span class="recruitList_color">学考招生</span>
				<span>简要介绍各个专业代码,招生人数,收费标准...</span>
			</div>

		</div>
	</div>
</template>

<script>
import Head from './portion/Head'
import TitlesImg from './portion/TitlesImg'
import Titles from './portion/Titles'
	export default{
		name:'recruit',
		proto:{
			title:{
				type:String
			}
		},
		data(){
			return{
				titleimg:'招生在线',
				titlemag:'招生计划',
				isShow:false,
				headTop:true,
				three_wire: true,
				nav:true,
				nav_title:true,
				titles:[
					{	
						meags:'招生计划',
						url:'/recruit'
					},
					{	meags:'专业介绍', 
						url:'/jj'
					},
					{
						meags:'招生简章',
						url:'/11'
					},
					{
						meags:'720校园',
						url:'/11'
					},
					{
						meags:'自主招生',
						url:'/11'
					},
					{
						meags:'学考招生',
						url:'/11'
					},
					{
						meags:'录取查询',
						url:'/11'
					}
				],

			}
		},
		components:{
			"app-head":Head,
			"app-titles":Titles,
			"app-titlesImg":TitlesImg
		},
		methods:{
			showToggle:function(){
				this.isShow = !this.isShow  
                
			}
		}
	}
</script>

<style scoped>
	.headTop{height: 0.7rem; background: #ededed;padding: 0.1rem;border-bottom: 0.03rem solid #cccccc;}
	.three_wire{ width: 0.6rem; height: 0.5rem; border-top: 0.3rem double; border-bottom: 0.1rem solid; color: #ccc; }
	.nav_title{display: block; border-bottom: 0.03rem #cccccc solid; padding: 0.05rem; }
	.recruit_box{padding: 0.5rem;}
	.recruitList{ background-color: #ccc; height: 1.3rem; padding-left: 0.5rem; padding-top: 0.3rem;  }
		.recruitList_color{ font-weight: bold; display: block; margin-bottom: 0.2rem; }
</style>