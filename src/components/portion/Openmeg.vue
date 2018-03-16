<template>
	<open>
		<div :class="{ Boxopen }">
			<div :class="{ opens }">
				<span class="openTitle">{{ title }}</span>
			</div>
			<div :class="{ openList }" v-for="list in lists">
				<span class="openMonth">{{list.month}}</span>
				<span class="openTime">{{list.year}}</span>
				<span class="openSolid"></span>
				<span class="openName">{{ list.name }}</span>
			</div>
			
		</div>
	</open>	
</template>

<script>
	export default{
		name: 'app-openmeg',
		proto:{
			title:{
				type:String
			}
		},
		data(){
			return{
				Boxopen:true,
				opens:true,
				openList:true,
				title:'通知公告',

				lists:[
					{
						month:"01-17",
						year:".2018",
						name: "   学习贯彻十九大精神工作计划 伍专项资金支出明细"
					},
					{
						month:"01-17",
						year:".2018",
						name: " 2016年师资队伍专项资金支出明细"
					},
					{
						month:"01-17",
						year:".2018",
						name:"    华夏院财字〔2017〕2号关于印发 "
					}
					
				],
				
			}
		}
	}
</script>

<style>
	.Boxopen{width: 90%;margin-left: 0.3rem;}
	.opens{margin-top: 0.6rem; border-bottom:0.05rem solid red;  padding-bottom: 0.1rem;}
	.openTitle{ margin-bottom: 0.2rem; font-size: 0.3rem; }
	.openList{ margin-top: 0.2rem; padding-bottom: 0.1rem; height:0.9rem;}
	.openMonth{font-size: 0.4rem;color: red;}
	.openTime{font-size: 0.3rem; color: red;}
	.openSolid{border:0.03rem solid #ccc; display: inline-block; height: 0.6rem; position: relative;top: 0.15rem; }
	.openName{width: 3.7rem;display: inline-block; }

</style>

