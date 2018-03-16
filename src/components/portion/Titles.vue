<template>
	<titles>
		
		<div class="intro_box">
			<span class="intro">
				<span>{{ titlemag }}</span>
			</span>
		</div>

	</titles>
</template>

<script>
	export default{
		name:'app-titles',
		porps:{
			title:{
				type:String
			}
		},
		props:['titlemag'],
		data(){
			return{
				
			}
		},
		mounted(){

		}
	}
</script>

<style scoped>
.intro_box{margin-top: 0.3rem;margin-top: 0.3rem; text-align: center;  }
	.intro{   font-size: 0.4rem;  border-bottom: 0.05rem solid red; padding-bottom: 0.2rem; display: inline-block;}
</style>