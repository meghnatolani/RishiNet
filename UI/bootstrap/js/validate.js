// This file checks the input fields of the sign up form.

$(document).ready(function(){
    var x = 1
	  
		// The username field is checked.
		'usern' : function() {

			$('body').append('<div id="uname" class="valid"></div>');

			var uname = $('#uname');
			var ele = $('#username');
			var pos = ele.offset();

			uname.css({
				top: pos.top+1,
				left: pos.left+ele.outerWidth()+45
			});
            
            var patt = /^[a-zA-Z0-9]+$/i;
            var pat = /^[a-zA-Z]+./i;
            
			var xmlhttp = new XMLHttpRequest();
			var data = new FormData();
			data.append("username",ele.val());
            data.append("search","username");
			xmlhttp.open("POST","/search_element/",false);
			xmlhttp.send(data);
                if(ele.val() == 0){
                    jVal.errors = true;
                x = 1;
                        uname.removeClass('correct').addClass('error').html('&larr; Enter a username').show();
                        ele.removeClass('normal').addClass('wrong');
                } else {
                    if(!patt.test(ele.val())) {
                        jVal.errors = true;
                x = 1;
                        uname.removeClass('correct').addClass('error').html('&larr; Only alpha-numeric username without spaces allowed').show();
                        ele.removeClass('normal').addClass('wrong');
                    } else {
                        if(!pat.test(ele.val())) {
                            jVal.errors = true;
                x = 1;
                            uname.removeClass('correct').addClass('error').html('&larr; Start with alphabet').show();
                            ele.removeClass('normal').addClass('wrong');
                        } else {
                            if(xmlhttp.responseText=="1") {
                                jVal.errors = true;
                x = 1;
                                uname.removeClass('correct').addClass('error').html('&larr; already taken').show();
                                ele.removeClass('normal').addClass('wrong');
                            } else {
                                uname.removeClass('error').addClass('correct').html('&radic; available').show();
                                ele.removeClass('wrong').addClass('normal');
                            }
                        }
                    }
                }
		},
		
		// The myname field is checked.
		'firstn' : function() {

			$('body').append('<div id="fname" class="valid"></div>');

			var fname = $('#fname');
			var ele = $('#myname');
			var pos = ele.offset();

			fname.css({
				top: pos.top+1,
				left: pos.left+ele.outerWidth()-315
			});
            
            var space = /(^\s|\s{2,}|\s$)/i;

			if(ele.val().length == 0) {
				jVal.errors = true;
                x = 1;
					fname.removeClass('correct').addClass('error').html('Input Something &rarr;').show();
					ele.removeClass('normal').addClass('wrong');
			} else {
                if(space.test(ele.val())){
                    jVal.errors = true;
                x = 1;
                    fname.removeClass('correct').addClass('error').html('No spaces allowed &rarr;').show();
                    ele.removeClass('normal').addClass('wrong');
                } else {
					fname.hide();
					ele.removeClass('wrong').addClass('normal');
                }
            }
		},
		
		

   
		
		// The email field is checked.
		'email' : function() {

			$('body').append('<div id="emailInfo" class="valid"></div>');

			var emailInfo = $('#emailInfo');
			var ele = $('#email');
			var pos = ele.offset();

			emailInfo.css({
				top: pos.top+1,
				left: pos.left+ele.outerWidth()+40
			});

			var patt = /^.+@.+[.].{2,}$/i;
            var space = /\s/g;
            
            var xmlhttp = new XMLHttpRequest();
            var data = new FormData();
            data.append("email",ele.val());
            data.append("search","email");
            xmlhttp.open("POST","/search_element/",false);
            xmlhttp.send(data);
			if(!patt.test(ele.val())) {
				jVal.errors = true;
                x = 1;
					emailInfo.removeClass('correct').addClass('error').html('&larr; Wrong format').show();
					ele.removeClass('normal').addClass('wrong');
			} else {
                if(space.test(ele.val())) {
                    jVal.errors = true;
                x = 1;
                    emailInfo.removeClass('correct').addClass('error').html('&larr; wrong use of spaces').show();
                    ele.removeClass('normal').addClass('wrong');
                } else {
                if(xmlhttp.responseText=="1") {
                    jVal.errors = true;
                x = 1;
                        emailInfo.removeClass('correct').addClass('error').html('&larr; already registered').show();
                        ele.removeClass('normal').addClass('wrong');
                    } else{
                        emailInfo.removeClass('error').addClass('correct').html('&radic; Alright!').hide();
                        ele.removeClass('wrong').addClass('normal');
                    }
                }
            }
		},
		
		// The pincode field is checked.
		'pincode' : function() {

			$('body').append('<div id="pincodeInfo" class="valid"></div>');

			var pincodeInfo = $('#pincodeInfo');
			var ele = $('#pincode');
			var pos = ele.offset();

			pincodeInfo.css({
				top: pos.top+1,
				left: pos.left+ele.outerWidth()+40
			});
            
            var patt = /\D/g;
            
            var xmlhttp = new XMLHttpRequest();
            var data = new FormData();
            data.append("pincode",ele.val());
            data.append("search","pincode");
            xmlhttp.open("POST","/search_element/",false);
            xmlhttp.send(data);
                if(ele.val().length != 6 || patt.test(ele.val())) {
                    jVal.errors = true;
                x = 1;
					pincodeInfo.removeClass('correct').addClass('error').html('&larr; pincode Number').show();
					ele.removeClass('normal').addClass('wrong');
                } else {
                    if(xmlhttp.responseText=="1") {
                        jVal.errors = true;
                x = 1;
                        emailInfo.removeClass('correct').addClass('error').html('&larr; already registered').show();
                        ele.removeClass('normal').addClass('wrong');
                    } else {
                        pincodeInfo.hide();
                        ele.removeClass('wrong').addClass('normal');
                    }
                }
		},
        
		// The car_number field is checked.

		// If no errors in form, the form is submitted.
        'sendIt' : function (){
            if(!jVal.errors) {
                $('#share').submit();
            }
        }
	};
    
// ====================================================== //

	// the function executes when sign up button is clicked and checks for all errors.
    $('#share').click(function (){
            if (x==0)
                return;
            x = 0;
            jVal.errors = false;            
            jVal.firstn();

            jVal.email();
            jVal.pincode();

            jVal.sendIt();
    });
            jVal.car_type_wrapper = false;

	// bind jVal.value function to corresponding form field

	$('#myname').change(jVal.firstn);
	$('#email').change(jVal.email);
	$('#pincode').change(jVal.pincode);
});