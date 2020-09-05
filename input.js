var op1 = "";
var op2 ="";
let op = "na";
var result;

$(document).ready( function() {
  $(".biop").prop('disabled', true);
  $(".eq").prop('disabled', true);


$("#neg").click( function() {
  if(op == "na")
   {
      op1 = op1+"-";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"-");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="-";
      $("#input").text($("#input").text()+"-");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="-";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"-");
  }
})

$("#one").click( function() {
  if(op == "na")
   {
      op1 = op1+"1";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"1");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="1";
      $("#input").text($("#input").text()+"1");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="1";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"1");
  }
})

$("#two").click( function() {
  if(op=="na")
   {
      op1=op1+"2";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"2");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="2";
      $("#input").text($("#input").text()+"2");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="2";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"2");
  }
})

$("#three").click( function() {
  if(op=="na")
   {
      op1=op1+"3";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"3");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="3";
      $("#input").text($("#input").text()+"3");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="3";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"3");
  }
})

$("#four").click( function() {
  if(op=="na")
   {
      op1=op1+"4";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"4");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="4";
      $("#input").text($("#input").text()+"4");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="4";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"4");
  }
})

$("#five").click( function() {
  if(op=="na")
   {
      op1=op1+"5";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"5");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="5";
      $("#input").text($("#input").text()+"5");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="5";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"5");
  }
})

$("#six").click( function() {
  if(op=="na")
   {
      op1=op1+"6";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"6");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="6";
      $("#input").text($("#input").text()+"6");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="6";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"6");
  }
})

$("#seven").click( function() {
  if(op=="na")
   {
      op1=op1+"7";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"7");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="7";
      $("#input").text($("#input").text()+"7");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="7";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"7");
  }
})

$("#eight").click( function() {
  if(op=="na")
   {
      op1=op1+"8";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"8");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="8";
      $("#input").text($("#input").text()+"8");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="8";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"8");
  }
})

$("#nine").click( function() {
  if(op=="na")
   {
      op1=op1+"9";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"9");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="9";
      $("#input").text($("#input").text()+"9");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="9";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"9");
  }
})

$("#zero").click( function() {
  if(op=="na")
   {
      op1=op1+"0";
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"0");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+="0";
      $("#input").text($("#input").text()+"0");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+="0";      
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+"0");
  }
})

$("#dot").click( function() {
  if(op=="na")
   {
      op1=op1+".";
      $("#dot").prop('disabled',true);
      $(".uniop").prop('disabled',true);
      $(".biop").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+".");
   }
  else if(op=="sqrt"||op=="abs")
  {
      op1+=".";
      $("#dot").prop('disabled',true);
      $("#input").text($("#input").text()+".");
      $("#neg").prop('disabled',true);
      $(".eq").prop('disabled',false);      
  }
  else {
      op2+=".";  
      $("#dot").prop('disabled',true);    
      $(".biop").prop('disabled',true);
      $(".eq").prop('disabled',false);
      $("#neg").prop('disabled',true);
      $("#input").text($("#input").text()+".");
  }
})

$("#sqrt").click( function() {
    op="sqrt";
    $(".uniop").prop('disabled',true);
    $("#input").text($("#input").text()+"sqrt("); 
      $("#neg").prop('disabled',true);
    $("#dot").prop('disabled',false);   
})

$("#abs").click( function() {
    op="abs";
    $(".uniop").prop('disabled',true);
    $("#input").text($("#input").text()+"abs(");  
      $("#neg").prop('disabled',false);
    $("#dot").prop('disabled',false);  
})

$("#plus").click( function() {
    op="plus";
    $(".biop").prop('disabled',true);
    $("#input").text($("#input").text()+"+"); 
      $("#neg").prop('disabled',false); 
    $("#dot").prop('disabled',false);  
})

$("#minus").click( function() {
    op="minus";
    $(".biop").prop('disabled',true);
    $("#input").text($("#input").text()+"-");
      $("#neg").prop('disabled',false);
    $("#dot").prop('disabled',false);    
})

$("#div").click( function() {
    op="div";
    $(".biop").prop('disabled',true);
    $("#input").text($("#input").text()+"/");  
      $("#neg").prop('disabled',false);
    $("#dot").prop('disabled',false);  
})

$("#mult").click( function() {
    op="mult";
    $(".biop").prop('disabled',true);
    $("#input").text($("#input").text()+"*");
      $("#neg").prop('disabled',false);  
    $("#dot").prop('disabled',false);  
})

$("#perc").click( function() {
    op="perc";
    $(".biop").prop('disabled',true);
    $("#input").text($("#input").text()+"%");
      $("#neg").prop('disabled',false);  
    $("#dot").prop('disabled',false);  
})

$("#equal").click( function() {
    switch (op) {
        case "plus" :
           result=plus(op1,op2);
           break;
        case "minus" :
           result=minus(op1,op2);
           break;
        case "div" :
           result=div(op1,op2);
           break;
        case "mult" :
           result=mult(op1,op2);
           break;
        case "perc" :
           result=perc(op1,op2);
           break;
        case "abs" :
           result=abs(op1);
           break;
        case "sqrt" :
           result=sqrt(op1);
           break;
  } 
           $("#output").text(result);
           $("#input").text("");
           $(".biop").prop('disabled', true);
           $(".eq").prop('disabled', true); 
           $("#dot").prop('disabled',false);
           $(".uniop").prop('disabled',false);
           $("#neg").prop('disabled',false);
           op1="";
           op2="";
           op="na";  
})

})

function plus(op1,op2)
  {
    return (parseFloat(op1) + parseFloat(op2));
}
function minus(op1,op2)
  {
    return (parseFloat(op1) - parseFloat(op2));
}
function mult(op1,op2)
  {
    return (parseFloat(op1) * parseFloat(op2));
}
function div(op1,op2)
  {
    return (parseFloat(op1) / parseFloat(op2));
}
function perc(op1,op2)
  {
    return ((parseFloat(op1)/100)*parseFloat(op2));
}
function abs(op1)
  {
    return (Math.abs(parseFloat(op1)));
}
function sqrt(op1)
  {
    var rs=Math.sqrt(parseFloat(op1));
    if (Math.round(rs)==rs)
      { return rs;}
    else
    return (rs.toFixed(3));
}

function validateform(){
   $(".invalidname").hide();
   $(".invalidphone").hide();
   $(".invalidemail").hide();
   var name=$("#name").val();
   var phone=$("#phone").val();
   var email=$("#email").val();
   var invalid=0,hasat=0,hasdot=0;
   if( name[0].toUpperCase() == name[0].toLowerCase() )
      {
          $(".invalidname").show();
          invalid=1;
        }
   if( phone.length != 10 )
      {
          $(".invalidphone").show();
          invalid=1;
        }
   for(i=0;i<email.length;i++)
     {
         if(hasat==0)
            {  if(email[i]=='@')
                  {hasat=1;}     
              }
         else
            {
               if(email[i]=='.')
                  {hasdot=1;}
               }
       }
     if(hasat==0 || hasdot ==0) 
       {
          $(".invalidemail").show();
          invalid=1;  
         } 
   if(invalid==1)
      {
          return false;
         }
    else{
          alert("form submitted");
      }
}
function palindrom()
{
   $("#notpal").hide();
   $("#ispal").hide();
   var word=$("#palindrome").val();
   var pal=true;
   for(var i=0;i<=(word.length/2);i++)
   {
       if(word[i]!=word[word.length-i-1])
        {
           pal=false;
           break;
           }
    }
    if(pal==true)
       {
          $("#ispal").show();
          }
    else
       {
          $("#notpal").show();
           }
   return pal;
}
function anagram(){
   $("#notana").hide();
   $("#isana").hide();
   var word1=$("#anagram_1").val();
   var word2=$("#anagram_2").val();
   var word1contains2=1;
   var word2contains1=1;
   word1=word1.replace(/\s+/g, '');
   word2=word2.replace(/\s+/g, '');
   var word1copy=word1.toLowerCase();
   var word2copy=word2.toLowerCase();
   var rem;
   for(var i=0;i<word1copy.length;i++)
     {
         rem=0;
          for(var j=0;j<word2copy.length;j++)
          {
               if(word1copy[i]==word2copy[j])
                {
                   word2copy=remove_character(word2copy, j);
                   j--;
                   rem=1;
                   break;
                    }
           }
          if(rem==0)
           {
              word2contains1=0;
              break;
              }
     }
    word1copy=word1.toLowerCase();
    word2copy=word2.toLowerCase();
   for(var i=0;i<word2copy.length;i++)
     {
         rem=0;
          for(var j=0;j<word1copy.length;j++)
          {
               if(word2copy[i]==word1copy[j])
                {
                   word1copy=remove_character(word1copy, j);
                   j--;
                   rem=1;
                   break;
                    }
           }
          if(rem==0)
           {
              word1contains2=0;
              break;
              }
     }
    if(word1contains2==1 && word2contains1==1)
    {
        $("#isana").show();
        return true;
     }
    else{
        $("#notana").show();
        return false;
    }
}
function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
var rnum1,num1gen=0;
var rnum2,num2gen=0;

function genRandom1(){
  rnum1=Math.round((Math.random()*1000));
  num1gen=1;
  $("#firstnum").text("First Number - "+rnum1);
  if(num1gen==1&&num2gen==1)
  {  $("#getwin").prop('disabled',false);
     }
}
function genRandom2(){
  rnum2=Math.round((Math.random()*1000));
  num2gen=1;
  $("#secondnum").text("Second Number - "+rnum2);
  if(num1gen==1&&num2gen==1)
  {  $("#getwin").prop('disabled',false);
     }
}
function getWinner(){
  var obj1=rnum1%3;
  var obj2=rnum2%3;
  if(obj1==obj2)
  {
   $("#result").text("Winner - "+"TIE"); 
   return "TIE";    
      }
   if((obj1==0&&obj2==1)||(obj2==0&&obj1==1))
  {
   $("#result").text("Winner - "+"HUMAN"); 
   return "HUMAN";    
      }
   if((obj1==1&&obj2==2)||(obj2==1&&obj1==2))
  {
   $("#result").text("Winner - "+"COCKROACH"); 
   return "COCKROACH";    
      }
   if((obj1==0&&obj2==2)||(obj2==0&&obj1==2))
  {
   $("#result").text("Winner - "+"NUCLEAR BOMB"); 
   return "NUCLEAR BOMB";    
      }
}