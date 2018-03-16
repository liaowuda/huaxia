<template>
	<div class="survey">
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
		<div class="intro_content">
			<div class="introList" v-for="introList in introLists">
				{{ introList.content }}
			</div>
		</div>
	</div>
</template>

<script>
import Head from './portion/Head'
import TitlesImg from './portion/TitlesImg'
import Titles from './portion/Titles' 
	export default{
		name:'survey',
		proto:{
			title:{
				type:String
			}
		},
		data(){
			return{
				titleimg:'学校概况',
				titlemag:'学校简介',
				isShow:false,
				headTop:true,
				three_wire: true,
				nav:true,
				nav_title:true,
				titles:[
					{	
						meags:'学校概况',
						url:'/11'
					},
					{	meags:'现任领导', 
						url:'/jj'
					},
					{
						meags:'组织机构',
						url:'/11'
					},
					{
						meags:'信息公开',
						url:'/11'
					},
					{
						meags:'绿色校园',
						url:'/11'
					}
				],
				introLists:[
					{ 
						content:' 广州华夏职业学院是经广东省人民政府批准成立、教育部备案的全日制普通高等学校。目前，有一万五千余学子在这所优美的高校中学习和成长。在这里，他们与广东最优秀的专家、教授们有最直接的接触，包括享受国务院特殊津贴者、省部级重点学科带头人、省级高校教学名师及一大批具有工程实践和创新创业背景的名师、名家。'},
					{
						content:' 学校地处广州市，毗邻京港澳，大广高速公路、国道、省道纵横交错，区位优势得天独厚。'
					},
					{
						content:' 学校环境优雅，四季如画。校园建筑吸取岭南建筑之精华和神韵，银墙绿瓦搭配和谐，亭台楼榭错落有致，湖光山色处处皆景，以及完善的生活和教学设施等，让每一个亲临者流连忘返，赞誉有加。遵“厚德、重能、敬业、善事”的校训、重“承华夏文明、育职业英才”的教育理念，循“诚信、勤奋和感恩”的树人标准、扬“一日华夏学、终身华夏情”的校园文化，让学生家长们放心、开心！'
					},
					{
						content:'学校所属财政经济学院、管理学院、车辆与自动化学院、信息工程学院、建筑工程学院、艺术传媒学院等6个学院，目前开设有38个专业，几乎涵盖了当今社会上所有热门专业，让学生们有目标，有追求，能充分发挥学用一致，活学活用的积极性和潜能。此前，华夏学子参与一系列省级和国家级赛事，并取得了众多荣誉；在华夏师生的共同努力下，还把“全国职业教育先进单位”、广东省民办教育“最具竞争力提升院校”、“广东省民办非企业5A级单位”、“中国民办教育百强”等一系列荣誉奖牌迎进了华夏校园。学校不仅已为社会培养了大批高素质人才，而且办学质量得到了社会的充分肯定。'
					},
					{
						content:' 学校坚持以促进就业为导向，毕业生一次性就业率连续多年稳定在98％以上，就业率稳居广东省民办高校前列，达到99.54％。2015年、2016年连续两届毕业生就业满意度居全省第二、民办高校第一。'
					},
					{
						content:'学校还与华南理工大学、暨南大学等省内名校建立了长期稳定的“专升本”合作关系，为学子们深造创造了通道；并且还积极开拓了国际交流与合作，与美、澳、加、日、韩等国及台湾地区的高校开展了交流生与游学项目，为拓宽学子们视野创造了良好的条件。'
					}
				]

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
.intro_content{ margin-top: 0.3rem; }
.introList{ text-indent: 0.4rem; padding:0 0.3rem; margin-bottom: 0.3rem; font-size: 0.3rem}
</style>