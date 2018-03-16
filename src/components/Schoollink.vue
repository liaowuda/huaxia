<template>
	<div id="schoollink">
		<app-head></app-head>
		<app-titlesImg :titleimg="titleimg"></app-titlesImg>
		<app-titles v-bind:titlemag="titlemag"></app-titles>
		<div>
			财政经济学院
		</div>
	</div>
</template>


<script>
import Head from './portion/Head'
import TitlesImg from './portion/TitlesImg'
import Titles from './portion/Titles'
	export default{
		name:'schoollink',
		proto:{
			title:{
	  			type:String
			}
		},
		data(){
		    return{
		    	titleimg:'学院与专业',
		    	titlemag:'学院与专业'
			}
		},
		components:{
			"app-head":Head,
			"app-titlesImg":TitlesImg,
			"app-titles":Titles
		}
}
</script>











<style></style>