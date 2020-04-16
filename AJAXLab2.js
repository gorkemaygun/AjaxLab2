const number = num => {
	return new Promise ((resolve,reject) =>{
		if(num>50){
			resolve(num + ' is greater than 50');
		}else{
			reject(num + ' is less than 50')
		}
	});
};

number(20)
.then(result => console.log(result))
.catch(error => console.log(error)); 

number(60)
.then(result => console.log(result))
.catch(error => console.log(error)); 