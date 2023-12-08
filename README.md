# fibonacci

1.Download Node and install
2. Install prompt-sync
      npm install prompt-sync
3. To run:
  In terminal:
    node index
4. Give position to find fibonacci value in a series



Work flow:

**const result = fibonacci(limit)**
 ->this will call function of Fibonacci with argument of position to find fibonacci value

const series={}
const fibonacci =(pos )=>{
	if(pos<=1) return pos; 

	if(series[pos]) return series[pos];  // checking value in series position 
	series[pos]=fibonacci(pos-1)+fibonacci(pos-2)   // setting the positon of fibonacci position
	return series[pos]   //return a postion value

}
