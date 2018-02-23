var addNum = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof (a) === 'number' && typeof (b) === 'number') {
				resolve(a + b);
			} else {
				reject("not a number");
			}
		}, 2500);
	})
}

//addNum(4, 5).then((res) => {
//		console.log(res);
//		return addNum(res, 33);
//	}, (errorMessage) => {
//		console.log(errorMessage);
//	}).then((res) => {
//			console.log(res);
//		}, (errorMessage) => {
//			console.log(errorMessage);
//		});

addNum(4, 'a').then((res) => {
		console.log(res);
		return addNum(res, 33);
	}).then((res) => {
		console.log(res);
	}).catch((errorMessage) =>{
		console.log(errorMessage);
});