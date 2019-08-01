$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/todos",
        beforeSend:function(){
            
            $("#loader").show();
        },
        success:function(data){
            $("#loader").hide();
            var output = "";
            for(var i in data){                        
                var cid = data[i].id;
                var ctitle = data[i].title;  
                var prestatus = data[i].completed;                                               
                output += "<li class='list-group-item'><div class='custom-control custom-checkbox'> <input type='checkbox' class='custom-control-input' id='";
                output += i +"' ";
                if(prestatus){                            
                    output += "  checked disabled ";
                }
                output += "><label class='custom-control-label' for='";
                output += i +"'>"+ cid +". " +ctitle+ "</label> </div>   </li>";
            }
            $("#thelist").html(output);                  
        }
    });
    function getCheckedCount(){                
        var count = 0;
        for(var i=0;; i++ ){         
            var ifDisabled = $("#"+i).prop("disabled");                                                    
            var cstatus = $("#"+i).prop("checked");                   
             
            if(cstatus == undefined){                            
                   break;
            }                  
            if(!ifDisabled && cstatus ){
               count++;
            }
            }                    
            return count;
    }
    $("#chkpromise").click(function(){
   
        var myPro = new Promise((resolve,reject)=>{
            var count = getCheckedCount();
            if(count>=5){                        
                resolve("Promise resolved");
            }else{
                reject("Promise is rejected");
            }
        });
        myPro.then(()=>{
            alert(" Congrats. 5 Tasks have been Successfully Completed");
        }).catch(()=>{
            console.log("Not enough");
        });
    });

});