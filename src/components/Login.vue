<template>
  <div id="login">
  	<div :class="{ login_logo }">
  		<img src="src/assets/huaxiaLogo.png">
  	</div>
  	<form :class="{ login_form }">
  		<div class="user">
  			<input type="text" placeholder="学号/职工号/华夏邮箱">
  		</div>
  		<div class="user">
  			<input type="password" name="" placeholder="密码">
  		</div>
  		
  		<div :class="{ login_box }">
  			<div class="remember" >
  				<div class="radio"></div>
  				<span>{{ radioTitle }}</span>
  			</div>
  			<div class="password">{{ pasTitle }}</div>
  		</div>
  		<div><input type="submit" name="" class="enter" value="登录"></div>
  	</form>
  	<div>
  		<img src="src/assets/login.jpg" class="login_img">
  	</div>

  	<div class="loginList">
  		<div v-for="loginList in loginLists" >
  			<span>{{ loginList.name }}</span>
  			<span>{{ loginList.last }}</span>
  		</div>
  		
  	</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return{
    	login_logo:true,
    	login_form:true,
    	login_box:true,
    	radioTitle:"记住账号",
    	pasTitle:'忘记密码',
    	loginLists:[
    		{ name:'开发单位:', last:'菜鸟工程队' },
    		{ name:'Email:',last:'Acmen@cn.com'}
    	]
    }
  }
}
</script>

<style>
.login_logo{padding: 0.1rem; text-align: center; }
input{ margin-bottom: 0.05rem; padding: 0.07rem;}
.login_form{ }
.user{border-bottom: 0.03rem #cccccc solid; width: 5.5rem; margin-left: 0.3rem;}
.login_box{margin-top: 0.08rem; height: 0.26rem; line-height: 0.26rem;}
.remember{ float: left; margin-left:0.2rem;  }
	.radio{ width: 0.25rem;height: 0.25rem; border: 0.05rem solid #ccc; float: left; margin-right: 0.05rem;}
.password{float: left; margin-left: 1rem;}
.enter{ margin-top: 0.4rem; width: 5.5rem; margin-left: 0.3rem; background-color: red;color: #FFFFFF; height: 0.5rem;}

.login_img{ width: 4.5rem;display: inline-block;margin-left: 0.8rem; margin-top: 0.3rem;}
.loginList{ text-align: center; margin-top: 0.2rem; }
.loginList div{ margin-bottom: 0.1rem; font-size: 0.2rem;  }
.loginList div span{ margin-left: 0.05rem; }
</style>
