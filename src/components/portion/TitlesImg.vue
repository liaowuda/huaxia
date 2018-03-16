<template>
	<titlesImg>
		
		<div class="survey_title">
			<div class="survey_head">{{ titleimg }}</div>
		</div>

	</titlesImg>
</template>

<script>
	export default{
		name:'app-titlesImg',
		porps:{
			title:{
				type:String
			}
		},
		props:['titleimg'],
		data(){
			return{
				
			}
		},
		mounted(){

		}
	}
</script>

<style scoped>
.survey_title{ background:url(../../assets/survey.jpg)no-repeat -6.4rem; height:1.8rem; padding-top: 0.5rem;}
	.survey_head{ font-size: 0.5rem; background-color: blue; display: inline-block; padding:0.02rem 0.2rem ;  }
</style>