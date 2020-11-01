module.exports = function main() 
{
    //console.log("Debug Info");

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



        let quantityObject = {};
        
        let unitObject = {};
        let priceObject = {};
        let totalPrice = {};
 
        for(let i =0; i < input.length; i++)
        { 
         
 
            if (quantityObject[input[i].Name])
            {
                quantityObject[input[i].Name] += 1;
                
                totalPrice[input[i].Name]+= priceObject[input[i].Name];                
            } 
            else 
            {
                quantityObject[input[i].Name] = 1;  
                unitObject[input[i].Name] = input[i].Unit;
                priceObject[input[i].Name] = input[i].Price;  
                totalPrice[input[i].Name] = priceObject[input[i].Name];

            }
        }


      //  console.log(quantityObject);
       
       // console.log(unitObject);
      
        //console.log(priceObject);

      



    let output = '***<store earning no money>Receipt *** \n';
    var total=0; 
    for (let goods in quantityObject)
    {
        if (quantityObject[goods]>=2)
        {
           
            unitObject[goods] += 's';

        }
        total += totalPrice[goods];
        
        output += 
                        'Name: '+ goods + ', Quantity: '+ quantityObject[goods]
                        + ' '+ unitObject[goods]+ ', Unit price: ' + priceObject[goods].toFixed(2) + ' (yuan),'
                        +' Subtotal: ' + totalPrice[goods].toFixed(2) + ' (yuan) \n';          
           
                        //console.log(output);
           //console.log('----------------------------------');

        
    }
    output +=   '-----------------------\n' + 'Total: ' + total.toFixed(2)+' (yuan)'

    //printReceipt(quantityObject);

console.log(output);
return output;
   
}  


    /*function count_duplicate(inputArray)
    {
        let quantityObject = {};
        
        let unitObject = {};
        let priceObject = {};
 
        for(let i =0; i < inputArray.length; i++)
        { 
         
 
            if (quantityObject[inputArray[i].Name])
            {
                quantityObject[inputArray[i].Name] += 1;
                //quantityArray[3]=quantityObject[inputArray[i].Name];
            } else 
            {
                quantityObject[inputArray[i].Name] = 1;  
                unitObject[inputArray[i].Name]=inputArray[i].Unit;
                priceObject[inputArray[i].Name]=inputArray[i].Price;

               // quantityArray[0]=inputArray[i].Name;
              //  quantityArray[1]=inputArray[i].Unit;
               // quantityArray[2]=inputArray[i].Price;        
            }
            //quantityObject[inputArray[i].Name].push(inputArray[i].Unit);



           
            //counts[a[i].Unit] = a[i].Unit;
           // counts[a[i].Price] = a[i].Price;
            //nameArray.push(a[i].Name);
           // unitArray.push(a[i].Unit);
           // priceArray.push(a[i].Price);

        }  
       // for (let j =0; j < counts.length; j++)
           
       //    {
         //    var productInstance= new Product(counts[j]);
        //     productArray.push(productInstance);
       //    }
       // console.log(productArray)
        return quantityObject;
        //return counts;
    }*/

    
    /*function findUnitAndPrice(quantityObject,inputArray)
    {
        let returnObject={};
        for(let i =0; i < quantityObject.length; i++)
        {
            
            for(let j =0; j < inputArray.length; j++)
            {
                if (quantityObject[i]==inputArray[j].Name)
              {
                returnObject[inputArray[j].Name][0] = inputArray[j].Unit;
                returnObject[inputArray[j].Name][1] = inputArray[j].Price;
                break;
              }
            }
        }

        return returnObject;
    }*/
   
    

  



    
    
   /*
   if (input.Length==0)
    {
      alert('give some input');

    }
   var productArray;
   for(let i =0; i < input.length; i++)
        { 



        }
        
          function Product(name, unit, price,quantity) {
        this.quantity = quantity + ' ' +unit ;
        //total.toFixed(2)
        this.price = price.toFixed(2);
        this.subTotal = (quantity * price).toFixed(2);
        
      }

     function listProduct(input)
     {
       let 
     } 
        
        
        
        
        
    


    console.log(var output = '***<store earning no money>Receipt ***');
    
    var inputObject = count_duplicate(input);
    console.log(inputObject);
    console.log(unitObject);
    console.log(priceObject);

    //findUnitAndPrice(inputObject,input);

    
        for (let goods in inputObject)
        {
            
              // var output = 1;
                            //'Name: '+ goods + ',Quantity: '+ inputObject[goods];
                           // + input[goods].Unit + ', Unit price: ' + input[goods].Price + 'yuan';
               
        // console.log(output);
         

            
        }
        
        

    }
    
    */