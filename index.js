const prompt= require('prompt-sync')();
const limit = prompt("enter limit range ")
console.log('The range of limit ' ,limit)
const series={}
const fibonacci =(pos )=>{
	if(pos<=1) return pos;
	if(series[pos]) return series[pos];
	series[pos]=fibonacci(pos-1)+fibonacci(pos-2)
	return series[pos]

}
const result = fibonacci(limit)
console.log(`The fibonacci series position ${limit}`,result)

