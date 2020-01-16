let clouser = () => {
	let counter = ''
	return (clouser) => {
		if (counter.length) {
			counter += + counter.length
			return counter
		}
		counter += clouser
		return counter;
	}
}

let counter = clouser()
console.log(counter(3)) // 3
console.log(counter(5)) // 31
console.log(counter(228)) // 312



/////////////////////22222222222222/////////////

function letArr() {
    let arr = [];
    return (counter) => {
        if (counter == undefined) {
            return arr = [];
        }
        arr.push(counter)
        return arr
    }
}

let getUpdatedArr = letArr();
console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr('jojo'));
console.log(getUpdatedArr({ age: 98 }));
console.log(getUpdatedArr());
console.log(getUpdatedArr(10));
console.log(getUpdatedArr(20));




///////////////////33333333////////

let kidsNewarr = []



