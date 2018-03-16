<template>
	<header>
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


		<div :class="{ logo }">
			<img src="src/assets/huaxiaLogo.png">
			
		</div>

		
    </div>
		  
	</header>
</template>

<script>


	export default{
		name: 'app-head',
		props: {
			title:{
				type: String
			}
		},
		data(){
			return{
				isShow:false,
				headTop:true,
				three_wire: true,
				
				nav:true,
				nav_title:true,
				titles:[
					{	
						meags:'学校概况',
						url:'/survey'
					},
					{	meags:'教务系统', 
						url:'/login'
					},
					{	
						meags:'学生',
						url:'/student'
					},
					{	
						meags:'招生在线',
						url:'/recruit'

					},
					{	
						meags:'就业指导',
						url:'/33'
					},
					{	
						meags:'人才招聘',
						url:'/33'
					},
					{	
						meags:'学生服务',
						url:'/33'
					},
					{	
						meags:'质量工程',
						url:'/33'
					},
					{	
						meags:'学部与院系',
						url:'/33'
					},
					{	
						meags:'继续教育',
						url:'/33'
					},
					{	
						meags:'校内链接',
						url:'/Schoollink'
					},
					{	
						meags:'学生信息',
						url:'/33'
					},
				],
				logo: true,
	
			}

		},
		methods:{
			showToggle:function(){
				this.isShow = !this.isShow  
                
			}
		}
	}
</script>

<style scoped>
	.headTop{height: 0.8rem; background: red;padding: 0.2rem;}
	.three_wire{ width: 0.6rem; height: 0.5rem; border-top: 0.3rem double; border-bottom: 0.1rem solid; color: white; }

	.nav{ margin-bottom: 0.2rem; }
	.nav_title{ float: left; width: 1.5rem;  margin-left: 0.6rem;margin-top: 0.15rem}
	.logo{ height:2rem; }

</style>