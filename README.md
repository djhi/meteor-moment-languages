# Moment v2.9.0 languages for Meteor

[Moment.js](http://momentjs.com/), a JavaScript date library for parsing, validating, manipulating, and formatting dates, packaged for Meteor.

I needed a package with only the locale files because many other packages depends on the moment package wihtout locales.

This package **only install languages files** on both sides.

Installation
-------------

```
meteor add gildaspk:moment-languages
```

Once installed, just set your language as per Moment documentation, inside a `lib/moment-config.js` file for example:
```
moment.locale('fr');
```
