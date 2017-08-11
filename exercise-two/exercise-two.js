function remoteMathService(cb) {
	var one, two;
	callOneService(function(err, num) {
		one = num;
		return cb(undefined, one);
	});
	callTwoService(function(err, num) {
		two = num;
		return cb(undefined, two);
	});
	setTimeout(function() {
		return cb(undefined, one + two);
	}, 2000);
}
function callOneService(cb) {
	setTimeout(function() {
		return cb(undefined, 1);
	}, 1000);
}
function callTwoService(cb) {
	setTimeout(function() {
		return cb(undefined, 2);
	}, 1500);
}
remoteMathService(function(err, answer) {
	if (err) console.log("error ", err);
	if (answer !== 3) {
		console.log("wrong answer", answer);
	} else {
		console.log("correct");
	}
});