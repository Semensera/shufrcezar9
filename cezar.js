function cezar(str, shift) {
    const lower = 'abcdefghijklmnopqrstuvwxyz'; 
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
    let result = ''; 

    for (let i = 0; i < str.length; i++) {
        let char = str[i];  
        let newChar = char;

        
        for (let j = 0; j < lower.length; j++) {
            if (char === lower[j]) {
                let newIndex = (j + shift) % 26; 
                newChar = lower[newIndex];  
                break; 
            }
        }

        
        for (let j = 0; j < upper.length; j++) {
            if (char === upper[j]) {
                let newIndex = (j + shift) % 26;  
                newChar = upper[newIndex]; 
                break; 
            }
        }

       
        result += newChar; 
    }

    return result;
}

let message = "Mishass";
let shift = 11;

let cezarmessage = cezar(message, shift);
console.log(cezarmessage);