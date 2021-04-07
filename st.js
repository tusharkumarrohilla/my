
    $(document).ready(function () {
         var state = 0;

        var vech=[100,200,110,150];
        var x;
        //key:value
        var array = [
  {name: 1, age: vech[0]},
  {name: 2, age: vech[1]},
  {name: 3, age: vech[2]},
  {name: 4, age: vech[3]}
];
array.sort(function(a, b) {
  return  b.age-a.age ;
});
var arr=[];
for(var i=0;i<4;i++){
  arr[i]=array[i].name;
}
        //var x=vech.map(i=>vech.indexOf(i));
        console.log(arr);


//  for(state=1;state<5;state++){
         setInterval(function () {
            // state 0 > STOP
            // state 1 > READY
            // state default > GO

            switch (arr[state]) {
                case 1:
                    //state = 2;
                    $('#div1').css({ 'background-color': 'green' });
                    $('#div2').css({ 'background-color': 'red' });
                    $('#div3').css({ 'background-color': 'red' });
                    $('#div4').css({ 'background-color': 'red' });
                    break;
                case 2:
                  //  state = 3;
                    $('#div1').css({ 'background-color': 'red' });
                    $('#div2').css({ 'background-color': 'green' });
                    $('#div3').css({ 'background-color': 'red' });
                    $('#div4').css({ 'background-color': 'red' });
                    break;
               case 3:
                  //  state = 4;
                    $('#div1').css({ 'background-color': 'red' });
                    $('#div2').css({ 'background-color': 'red' });
                    $('#div3').css({ 'background-color': 'green' });
                    $('#div4').css({ 'background-color': 'red' });
                    break;

                case 4:
                  //  state = 4;
                    $('#div1').css({ 'background-color': 'red' });
                    $('#div2').css({ 'background-color': 'red' });
                    $('#div3').css({ 'background-color': 'red' });
                    $('#div4').css({ 'background-color': 'green' });
                    break;
            }

        state++;
        },2000);
      //}
    });
