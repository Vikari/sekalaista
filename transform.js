function transform(text) {
  const a = 'åqwertyuiopåqäasdfghjklöäamzxcvbnmzÅQWERTYUIOPÅQÄASDFGHJKLÖÄAMZXCVBNMZ012345678901';
  return text.split('').map(b => a.includes(b) ? a.charAt(a.indexOf(b) + 1) : b)
          .map(b => a.includes(b) ? a.charAt(a.lastIndexOf(b) - 1) : b).join('');
}
console.log(transform('testiä'));
