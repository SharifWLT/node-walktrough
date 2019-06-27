const removeWhitespace = input => {
    let result = input.trim();
    result = result.replace(/\s+/g, ' ');
    console.log("1: "+result)

    return result
}

console.log("2: "+removeWhitespace('   sao    tome'))


const capitalizeInitial = input => {
    let lowerCases = input.toLowerCase().slice(1);
    let firstLetter = input.charAt(0).toUpperCase();
   // console.log(firstLetter + lowerCases)
   return firstLetter + lowerCases
}

capitalizeInitial("berlin");


const prepareString = input => {
    let result = removeWhitespace(input).replace(/\s+/g, '_').split('_');
    result = result.map(
        word => capitalizeInitial(word)
    ).join("_")
    console.log(result)
}

prepareString("berlin lichtenberg")