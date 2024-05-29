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
    const valueArr = Object.values(count);
    if (Object.keys(count).length == 1 || Math.min(...valueArr) == Math.max(...valueArr))
    {
        return null;
    }
    for (let letter in count)
    {
        if (count[letter] == 1)
        {
            return letter;
        }
    }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
