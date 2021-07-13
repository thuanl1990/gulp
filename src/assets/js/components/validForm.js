const _$ = require('./selector'); // document.querySelector()
const _$All = require('./selectorAll'); // document.querySelector()
const addClass = require('./addClass')
const removeClass = require('./removeClass')
const _btnSubmit = _$('.btn-submit');
const _radio = _$All('[type="radio"]')
const _input = _$All('.required')

let inputData = {
	job: '',
	currentJob: '',
	timeJoin: '',
	fname1: '',
	lname1: '',
	fname2: '',
	lname2: '',
	email: '',
	phone: '',
	application: [],
	request: ''
}


function radioCheck() {
	let radioChecked = false
	_radio.forEach(function(el) {
		el.addEventListener('click', () => {
			removeClass(_radio, 'error', '.form-check')
			removeClass(_$All('.group-radio'), 'error', false)
			radioChecked = true
		})
		if (el.checked == true) {
			radioChecked = true
		}
	})
	return radioChecked
}

function inputValid() {
	let values = [];
	let hasNull
	_input.forEach(function(el) {
		values.push(el.value)
		el.value == '' 
			? el.closest('.form-group').classList.add('error')
			: el.closest('.form-group').classList.remove('error')
	})
	values.forEach(function(value) {
		value == ''
			? hasNull = true
			: values
	})

	return (hasNull ? false : true)
}

function changeInput() {
	_input.forEach(function(el) {
		el.addEventListener('change', function() {
			this.value != ''
				? this.closest('.form-group').classList.remove('error')
				: ''
		})
	})
}

function validEmail() {
	let emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	let email = _$All('input[type="email"]')
	let emailStr = email[0].value
	if(emailPattern.test(emailStr)) {
		removeClass(email, 'error', '.form-group')
		return true
	} else {
		if (emailStr == '') {
			_$('.email-error').innerHTML = '必須項目ですので入力ください。'
			return false
		}
		//console.log(email)
		//console.log(email)
		_$('.email-error').innerHTML = '正しいメールアドレスの形式を入力してください'
		email[0].closest('.form-group').classList.add('error')
		return false
	}
}

function checkSubmit() {
	if(!radioCheck()) {
		addClass(_radio, 'error', '.form-check');
		addClass(_$All('.group-radio'), 'error', false);
	}
	inputValid();
	validEmail();
	radioCheck() && inputValid() && validEmail()
		? letDoIt()	
		: false
}

function letDoIt() {
	//alert('OK')
	_$('.wpcf7-form').submit();
}

_btnSubmit.addEventListener('click', function() {
	checkSubmit()
})

window.addEventListener("DOMContentLoaded", function() {
	changeInput()
})
