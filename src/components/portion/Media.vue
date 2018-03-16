<template>
		<media>
			<div :class="{ Boxopen }">
				<div :class="{ medias }">
					<span class="mediaTitle">{{ title }}</span>
				</div>
				<div :class="{ mediaList }" v-for="list in lists">
					<span class="mediatitle">{{ list.title }}</span>
					<span class="mediamatter">{{ list.matter }}</span>
					
				</div>
			
			</div>
		</media>
</template>

<script>
	export default{
		name:"app-media",
		proto:{
			title:{
				tyle:String
			}
		},
		data(){
			return{
				Boxopen:true,
				medias:true,
				mediaList:true,
				title:'媒体华夏',

				lists:[
					{		
						title: "   学出明细",
						matter:" 广东电视台报道我院在莲麻村建设大学生艺术旅馆"
					},
					{
					
						title: " 资金明细",
						matter:" 广东电视台报道我院在莲麻村建设大学生艺术旅馆"
					}
					
				],
			}
		}
	}
</script>
<style>
	.Boxmedia{width: 90%;margin-left: 0.3rem;}
	.medias{margin-top: 0.6rem; border-bottom:0.05rem solid red; padding-bottom: 0.1rem;}

	.mediaTitle{ margin-bottom: 0.2rem; font-size: 0.3rem }
	.mediaList{margin-top: 0.2rem; padding-bottom: 0.1rem; height:0.9rem;}
	.mediaMonth{font-size: 0.4rem;color: red;}
	.mediaTime{font-size: 0.3rem; color: red;}
	.mediaSolid{border:0.03rem solid #ccc; display: inline-block; height: 0.6rem; position: relative;top: 0.15rem; }
	.mediatitle{display: inline-block;  height: 0.6rem;	background-color: #ccc; padding: 0.15rem; margin-right: 0.1rem;}
	.mediamatter{display: inline-block; width: 4.2rem;}
</style>