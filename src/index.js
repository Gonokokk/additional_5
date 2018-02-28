module.exports = function check(str, bracketsConfig) {
 
 var paramF = str.length;
 
  if (paramF % 2 !== 0)
  return false;

    var paramS = bracketsConfig.length;
        openBr =[];
        closeBr = [];
        bracketsConfig.forEach(function(x) {
            openBr.push(x[0]); closeBr.push(x[1])
        })
            for (i = 0; i < paramF; i++) {
                for (j =0; j < paramS; j++) {
                    if(str[i] === openBr[j] && str[i+1] === closeBr[j]) {
                        str = str.substring(0, i) + str.substring(i+2);
                        i = -1;
          }
        } 
    }
    if (str.length === 0) {
       return true; 
    }
    if (str.length > 0) {
       return false;
    }
}

