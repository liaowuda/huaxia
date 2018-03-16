<template>
	<special class="clearfix">
		<div :class="{ specials }">
			<div class="special-left">{{ special }}</div>
			<div class="special-right" >
				<span :class="{ siteList }" v-for="site in sites">{{ site.name }}</span>

			</div>
		</div>
	</special>
</template>
<script>
	export default{
		name:"app-special",
		proto:{
			title:{
				type:String
			}
		},
		data(){
			return{
				specials:true,
				special:"专题网站",
				siteList:true,
				sites:[
					{ name:"教育教学成果奖申报专栏"},
					{ name:"精品在线开放课程申报专题网站"},
					{ name:" 720全景校园"},
					{name:" 工程造价省重点专业验收"},
					{name:"文化素质教育基地专题网站"}
				]
			}
		}
	}
</script>

<style>
	.specials{ border: 0.03rem #ccc solid; width: 5.5rem; height: 2.5rem; margin-left: 0.3rem; margin-top: 0.3rem; }
	.siteList{ display: block; margin-top: 0.15rem; }
	.special-left{ float: left; width: 1.5rem;height: 2.5rem; line-height: 2.5rem; text-align: center;  border-right: 0.03rem #ccc solid; background: #cccccc;}
	.special-right{height: 2.5rem; text-align: center;}
</style>