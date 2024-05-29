function firstNonRepeatedChar(str)
{
    // Write your code here
    if (str == '')
    {
        return null;
    }
    const count = {};
    for (let c of str)
    {
        count[c] = count[c] ? count[c] + 1 : 1;
    }
    console.log(count);
    if (Object.keys(count).length == 1)
    {
        return null;
    }
    const valueArr = Object.values(count);
    for (let letter in count)
    {
        if (count[letter] == Math.min(...valueArr))
        {
            return letter;
        }
    }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
