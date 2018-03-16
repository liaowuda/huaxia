<template>
	<div id="student">
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
		<div class="studentMore" v-for="studentMore in studentMores">
			<div class="moreBox">
				<span>{{ studentMore.name }}</span>
				<span class="SDTmore">
					<router-link :to="studentMore.url">更多</router-link>
				</span>
			</div>
			<div class="studentNews">
				<div>
					<span>{{ studentMore.one }}</span>
				</div>
				<div>
					<span>{{ studentMore.two }}</span>
				</div>
				<div>
					<span>{{ studentMore.three }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Head from './portion/Head' 
import Titles from './portion/Titles' 
import TitlesImg from './portion/TitlesImg'
	export default{
		name:'student',
		proto:{
			title:{
				type:String
			}
		},
		data(){
			return{
				titleimg:'学生服务',
				titlemag:'学生处',
				isShow:false,
				headTop:true,
				three_wire: true,
				nav:true,
				nav_title:true,
				titles:[
					{	
						meags:'新闻动态',
						url:'/11'
					},
					{	meags:'通知公告', 
						url:'/jj'
					},
					{
						meags:'团委动态',
						url:'/11'
					},
					{
						meags:'学生资助',
						url:'/11'
					},
					{
						meags:'辅导员之家',
						url:'/11'
					},
					{
						meags:'校务公开',
						url:'/11'
					},
					{
						meags:'心理健康',
						url:'/11'
					},
					{
						meags:'社团风采',
						url:'/11'
					}
				],
				studentMores:[
					{ name:'新闻动态',
					  url:'/11',
					  one:'召之即来，来之能战，战之能胜 —',
					  two:'团结一心谋发展，众志成城谋佳绩',
					  three:'满怀欣喜共学习,砥砺奋进谱新篇 —'
					},
					{ name:'通知公告',
					  url:'/11',
					  one:'学生处12月工作总结与2017年1月',
					  two:'学生处11月工作总结与12月计划表',
					  three:'学生处10月工作总结与11月计划表'
					},
					{ name:'团委动态',
					  url:'/11',
					  one:'学生处12月工作总结与2017年1月',
					  two:'学生处11月工作总结与12月计划表',
					  three:'学生处10月工作总结与11月计划表'
					},
					{ name:'学生资助',
					  url:'/11',
					  one:'学生处12月工作总结与2017年1月',
					  two:'学生处11月工作总结与12月计划表',
					  three:'学生处10月工作总结与11月计划表'
					},
					{ name:'辅导员之家',
					  url:'/11',
					  one:'学生处12月工作总结与2017年1月',
					  two:'学生处11月工作总结与12月计划表',
					  three:'学生处10月工作总结与11月计划表'
					},
					{ name:'校务公开',
					  url:'/11',
					  one:'学生处12月工作总结与2017年1月',
					  two:'学生处11月工作总结与12月计划表',
					  three:'学生处10月工作总结与11月计划表'
					},
					{ name:'心理健康',
					  url:'/11',
					  one:'学生处12月工作总结与2017年1月',
					  two:'学生处11月工作总结与12月计划表',
					  three:'学生处10月工作总结与11月计划表'
					}
				]
			}
	},
	components:{
		"app-head":Head,
		"app-titlesImg":TitlesImg,
		"app-titles":Titles
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

.studentMore{ margin:0 0.5rem; background-color: #ccc; margin-bottom: 0.5rem; margin-top: 0.3rem; padding: 0.3rem;}
		.moreBox{margin-bottom: 0.2rem;}
.SDTmore{ display: inline-block;float: right; }
.studentNews div{ border-bottom: 0.05rem #FFFFFF solid;padding: 0.1rem 0; }
</style>