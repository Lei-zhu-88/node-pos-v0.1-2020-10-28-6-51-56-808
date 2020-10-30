const main = require('./main/main');

main();

var input = [
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
    
        },
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000000',
            Name: 'Coca-Cola',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000001',
            Name: 'Sprite',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000001',
            Name: 'Sprite',
            Unit: 'bottle',
            Price: 3.00
        },
        {
            Barcode: 'ITEM000004',
            Name: 'battery',
            Unit: 'a',
            Price: 2.00
        }
    ];

   // var unitArray = [];
  //  var nameArray = [];
   // var priceArray = [];

 printReceipt(input );
 //console.log(count_duplicate(input));
 //console.log(unitArray);

 


    function count_duplicate(a)
    {
        let counts = {};
       
       
       
        for(let i =0; i < a.length; i++)
        { 
         
 
            if (counts[a[i].Name])
            {
              counts[a[i].Name] += 1;
            } else 
            {
              counts[a[i].Name] = 1;     
            }
            //counts[a[i].Unit] = a[i].Unit;
            //nameArray.push(a[i].Name);
           // unitArray.push(a[i].Unit);
           // priceArray.push(a[i].Price);

        }  

        return counts;
    }


function printReceipt(input )
{
    
    if (input.Length=0)
    {
      alert('give some input');

    }
    console.log('***<store earning no money>Receipt ***');
    
    var inputObject = count_duplicate(input);

    
        for (let goods in inputObject)
        {
            
               var output = 'Name: '+ goods + ',Quantity: '+ inputObject[goods];
               // + input[goods].Unit + ', Unit price: ' + input[goods].Price + 'yuan')
               
         console.log(output);

            
        }
        

    }