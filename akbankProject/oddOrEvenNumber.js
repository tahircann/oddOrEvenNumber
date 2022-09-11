const oddishOrEvenish = (number)=> {
    var myArr = String(number).split("").map((num)=>{
       return Number(num)
    }); 
    let total = 0;
    for (let i = 0; i < myArr.length; i++) {
      const item = myArr[i];
      total += item;
    }
    if(total % 2 === 0){
      return "Even"
    }else{
      return "Odd"
    }
  }