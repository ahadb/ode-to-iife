# Ode to IIFE!

JavaScript has seriously evolved over the past 10 years and JavaScript developers love their new tooling, transpilers, bundlers and features. If you're ever curious and look under the hood of
of your bundled code you'll see that your code is encapsulated within the humble old IIFE (Immediately invoked functional expression) in ES5.

This repo is just a tribute to one of the most powerful patterns that rules them all - behind our bundles, transpilers lies the humble IIFE. No matter how modern our approach is we use
this pattern, and *many* use it without even knowing it. 

Let's acknowledge it's greatness as these modules are capable of working everywhere (AMD, CommonJS and global), be it the client, on the server or elsewhere.

## What You'll Find

It all starts with this humble code:

```javascript
(function(castSpell) {
  // ...lots more magic here 
})(this);
```

You'll find more in the templates library such as:

1. Your humble anonymous IIFE
2. Your humble named IIFE
3. Your very humble UMD style IIFE
4. Your very humble UMD style IIFE with multiple deps and exposed methods

Other variations can be [found here](https://github.com/umdjs/umd/tree/master/templates) 

## Notes

Using modules the modern way is fantastic and you can do a lot, it certainly is the wave of the future - but it comes at the cost of generating a lot of extra code and fluff. 
You can create a library with the humble IIFE for many use cases with a much smaller footprint and yes you can even module-ify and add dependencies to it if you're clever.


