Borders = [0,10,20,30,40,50,60,70,80,90,1,2,3,4,5,6,7,8,9,19,29,39,49,59,69,79,89,91,92,93,94,95,96,97,98,99]
let topleft = [];
let topright = [];
let bottomleft = [];
let bottomright = [];

//add color after mousehover
function fn(element){
   rows(element.innerHTML);
}

//remove color after mouseout
function fn1(element){
 const coloredList = document.querySelectorAll('.my-class');
 const coloredArray = Array.from(coloredList);
 coloredArray.forEach((a)=>{
   a.classList.remove('my-class');
 })
 topleft=[];
 topright=[];
 bottomleft=[];
 bottomright=[];

}

function rows(value){

    let val1 = value;
    console.log(val1);
    let ind = parseInt(val1);
    while(ind>=11 && ind<=88){
         let i1 =  parseInt(val1[0]);
         let i2 =  parseInt(val1[1]);
         ind = (i1-1)*10 + (i2-1);
         if(i1>0 && i2>0 && Borders.includes(ind)== false){
         let newIndex = (i1-1).toString() + (i2-1).toString();
         topleft.push(newIndex);
         val1 = newIndex.toString();   
         }
         else{
            break;
         }
   }

   let val2 = value;
   ind = parseInt(val2);
   while(ind>=11 && ind<=88){
      let i1 =  parseInt(val2[0]);  
      let i2 =  parseInt(val2[1]);
      ind = (i1-1)*10 + (i2+1);
      if(i1>0 && i2>0 && Borders.includes(ind)== false){
      let newIndex = (i1-1).toString() + (i2+1).toString();
      topright.push(newIndex);
      val2 = newIndex.toString();   
      }
      else{
         break;
      }
}

let val3 = value;
ind = parseInt(val3);
while(ind>=11 && ind<=88){
   let i1 =  parseInt(val3[0]);  
   let i2 =  parseInt(val3[1]);
   ind = (i1+1)*10 + (i2+1);
   if(Borders.includes(ind)== false){
      let newIndex = (i1+1).toString() + (i2+1).toString();
      bottomright.push(newIndex);
      val3 = newIndex.toString();   
}
else{
   break;
}
}


let val4 = value;
ind = parseInt(val4);
while(ind>=11 && ind<=88){
   let i1 =  parseInt(val4[0]);  
   let i2 =  parseInt(val4[1]);
   ind = (i1+1)*10 + (i2-1);
   if(i1>0 && i2>0 && Borders.includes(ind)== false){
   let newIndex = (i1+1).toString() + (i2-1).toString();
   bottomleft.push(newIndex);
   val4 = newIndex.toString(); 
   }
   else{
      break;
   }

     
}

colorit(topleft,1);
colorit(topright,1);
colorit(bottomleft,1);
colorit(bottomright,1);
}

function colorit(fill,flag){
   for(let i=0;i<fill.length;i++){
      let ids =  fill[i];
      let pos = document.getElementById(ids);
      console.log(pos);
      if(isNaN(pos) && flag==1){
         pos.classList.add("my-class");
      }
     
   }
   
}