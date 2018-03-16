<template>
	<foonts>
		<div :class="{foot}">
			<span :class="{ footList }" v-for="foot in foots"> {{ foot.name }}</span>
		</div>
	</foonts>
</template>
 <script>
 	export default{
 		name:"foots",
 		proto:{
 			title:{
 				type:String
 			}
 		},
 		data(){
 			return{
 				foot:true,
 				footList:true,
 				foots:[
 					{name:"地址:广东省广州市从化城鳌大道东772号"},
 					{name:" 邮编:510935"},
 					{name:"电话:020-87868991(校办)"},
 					{name:"Copyright © 2010 www.gzhxtc.cn All Rights Reserved"},
 					{name:" 版权所有:广州华夏职业学院"},
 					{name:"ICP备案号:粤ICP备12042111号"}
 				]
 			};
 		}
 	}
 </script>
 <style type="text/css">
 	.foot{  background: #000000; margin-top: 0.3rem; color: white;}
 	.footList{ display: block; text-align: center;margin-top: 0.1rem; }
 </style>