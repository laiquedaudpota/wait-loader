const LOADER_EFFECT = [
	/*'img', */'ios', 'win8', 'none', 'orbit', 
	'pulse', 'timer', 'bounce', 'stretch', 
	'rotation', 'win8_linear', 'roundBounce', 
	'rotateplane', 'progressBar', 'bouncePulse'	
];
	
function init() {
	setEffects();
	dynamicDivCreator();
	
	$('#effect').change(function() {
		loaderShow(this.value);
	});
	
	$('#stop').click(function(){
		loaderHide();
	});
}

function loaderShow(effect) {
	$('.loader-div').waitMe({
		effect: effect,
		text: 'Please wait',
		bg: 'rgba(255,255,255,0.9)',
		color: '#6495ed',
		maxSize: '',
		waitTime: -1,
		source: '',
		textPos: 'vertical',
		fontSize: '',
		onClose: function() {
		}
	});
}

function loaderHide() {
	$('.loader-div').waitMe("hide");
}

function dynamicDivCreator() {
	$('.loader-div').html('');
	let div = '<div class="sub-div"></div>';
	for (let i = 1; i < 50; i++) {		
		$('.loader-div').append(div);
	}
}

function setEffects() {
	$('#effect').find('option').remove().end();
	$.each(LOADER_EFFECT, function(i, item) {
		$('#effect').append($('<option>', {
			text: item,
			value: item
		}));
	});
}