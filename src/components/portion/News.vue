<template>
	<news >
		<div :class="{ Boxnew }">
			<div :class="{ news }">
				<span class="newTitle">{{ title }}</span>
			</div>
			<div :class="{ newList }" v-for="list in lists">
				<span>{{ list.name }}</span>
			</div>
			<div>
				<span class="newNum">今天有{{ number }}条新通知</span>
				<span class="newNet">{{ newNet }}</span>
			</div>
		</div>
	</news>

</template>

<script>
	export default{
		name:'app-news',
		porto:{
			title:{
				type:String
			}
		},
		data(){
			return{
				Boxnew:true,
				news:true,
				newList:true,
				title:'学院要闻',

				lists:[
					{
						name: "加油充电：广州华夏职业学院组织中层干部集中学"
					},
					{
						name: " 华夏职院被《南方日报》点名 "
					},
					{
						name: "从化电视台报道广州华夏职业学院非物质文化遗产.."
					},
					{
						name:" 南方都市报报道我校创新创业——自制无人机《犀... "
					},
					{
						name:" 从化电视台报道我校第二届“双代会”胜利召开 "
					},
					{
						name:" 信息时报报道我校房车营地《房车进驻校园 夜听... "
					},
					{
						name:"广州华夏职业学院平安校园 "
					},
					{
						name:"  广州华夏职业学院平安校园 "
					}
					
				],
				number:'0',
				newNet:"进入新闻网>"
			}
		}
	}
</script>

<style>
.Boxnew{width: 90%;margin-left: 0.3rem;}
	.news{margin-top: 0.3rem; border-bottom:0.05rem solid red;  padding-bottom: 0.1rem;}
	.newTitle{ margin-bottom: 0.2rem; font-size: 0.3rem; }
	.newList{ border-bottom: 0.01rem solid #ccc;margin-top: 0.3rem; padding-bottom: 0.1rem; }
	.newNum{color: red;}
	.newNet{float: right;}
</style>