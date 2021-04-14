let arr = [1,2,3]

// 使用reduce来实现累加器
arr = arr.reduce((previousValue, currentValue)=> {
	return previousValue += currentValue
}, 20)

console.log('arr',arr)
