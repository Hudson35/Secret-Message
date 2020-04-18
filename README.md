# Secret-Message
## Base64 Encoding. How it works.
- First start out with a regular ASCII Character string, say: "sec"
- The string "sec" is then taken and converted into it's ASCII Character Code values which are the following:

		- "sec" string ASCII values: s = 115, e = 101, c = 99 

- Then each Code is taken down into it's 8 bit binary representation of character code, so 
115 = 01110011
101 = 01100101
99 = 01100011

- Then all 24 digits are joined together: 011100110110010101100011

- And then split up into groups of six: 011100 , 110110 , 010101, 100011

- Then we convert each group of 6 into a character from the Base64 Encoding chart and 
		- get: "c2Vj"

- Now there is a built-in Javascript function that will do all the conversion for me automatically. The function is called btoa() "Binary to ASCCII". btoa(): creates a base-64 encoded ASCII string from a "string" of binary data ("btoa" should be read as "binary to ASCII"). The btoa() method encodes a string in base-64. Try this in chrome console: btoa('sec') -> 'c2Vj' and then back again use: atob('c2Vj') -> 'sec' . Use the atob() method to decode a base-64 encoded string. atob(): decodes a base64 encoded string("atob" should be read as "ASCII to binary").
## How this app works
- So this app takes a string in say: "sec", the user then hits the create button. "sec" then gets encoded btoa("sec") -> "c2Vj"
and sent through the url, then the user shares the link, when someone opens the link "c2vJ" will be decoded using the atob("c2Vj") -> "sec" and the person will be able to see the message. 

- Example: 
		- const encodedData = window.btoa('Hello, world'); // encode a string, output: "SGVsbG8sIHdvcmxk"
		- const decodedData = window.atob(encodedData); // decode the string, output: "Hello, world"