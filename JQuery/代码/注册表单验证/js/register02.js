$(function(){
	var error_name = false;
	var error_password = false;
	var error_check_password = false;
	var error_email = false;
	var error_check = false;

	// 检查用户名输入框的信息
	$('#user_name').blur(function(){
		check_username();
	});
	$('#user_name').focus(function(){
		$(this).next().hide();
	});

	// 检查密码的输入框信息
	$('#pwd').blur(function(){
		check_pwd();
	});
	$('#pwd').focus(function(){
		$(this).next().hide();
	});

	// 检查两次密码的一致性
	$('#cpwd').blur(function(){
		check_cpwd();
	});
	$('#cpwd').focus(function(){
		$(this).next().hide();
	});

	// 检查邮箱的正确性
	$('#email').blur(function(){
		check_email();
	});
	$('#email').focus(function(){
		$(this).next().hide();
	});

	$('#allow').click(function(){
		if($(this).is(':checked')){
			error_check = false;
			$(this).siblings('span').hide();
		}
		else{
			error_check = true;
			$(this).siblings('span').html('请勾选同意此协议！')
			$(this).siblings('span').show();
		}
	})

	function check_username(){
		var uVal = $('#user_name').val();
		var reUser = /^\w{6,20}$/;
		//alert(oVal);

		if(uVal=='')
		{
			$('#user_name').next().html('用户名不能为空！');
			$('#user_name').next().show();
			error_name=true;
			return;
		}

		if(reUser.test(uVal))
		{
			$('#user_name').next().hide();
			error_name=false;
		}
		else
		{
			$('#user_name').next().html('用户名是由6-20位字母、数字、下划线组成的');
			$('#user_name').next().show();
			error_name=true;
		}

	}

	function check_pwd(){
		var pVal = $('#pwd').val();
		var rePwd = /^[\w!@#$%^&*]{6,20}$/;

		if(pVal==''){
			$('#pwd').next().html('密码输入不能为空！')
			$('#pwd').next().show();
			error_password=true;
			return;
		}

		if(rePwd.test(pVal)){
			$('#pwd').next().hide();
			error_password=false;
		}
		else{
			$('#pwd').next().html('密码输入格式有误！');
			$('#pwd').next().show();
			error_password=true;
		}
	}

	function check_cpwd(){
		var pass = $('#pwd').val();
		var cpass = $('#cpwd').val();
		if(pass!=cpass){
			$('#cpwd').next().html('两次密码输入不一致！')
			$('#cpwd').next().show();
			error_check_password=true;
		}
		else{
			$('#cpwd').next().hide();
			error_check_password=false;
		}
	}

	function check_email(){
		var vEmail = $('#email').val();
		var reMail = /^[a-z0-9][\w.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i;
		if(vEmail==''){
			$('#email').next().html('邮箱不能为空！');
			$('#email').next().show();
			error_email=true;
			return;
		}

		if(reMail.test(vEmail)){
			$('#email').next.hide();
			error_email=false;
		}
		else{
			$('#email').next().html('邮箱格式不正确！')
			$('#email').next().show();
			error_email=true;
		}
	}

	$('.reg_sub').submit(function(){
		check_username();
		check_pwd();
		check_cpwd();
		check_email();
		if(error_name==false && error_password==false && error_check_password==false && error_email==false && error_check==false)
		{
			return true;
		}
		else
		{
			return false;
		}
	})

})