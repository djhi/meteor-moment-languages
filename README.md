# Moment v2.8.3 languages for Meteor

[Moment.js](http://momentjs.com/), a JavaScript date library for parsing, validating, manipulating, and formatting dates, packaged for Meteor.

I needed a package with only the locale files because many other packages depends on the moment package wihtout locales.

This package **only install languages files** on both sides and does not depends on any moment package.

**Make sure you have a moment package loaded**

Installation
-------------

For Meteor v0.9.0 and above:
`meteor add gildaspk:moment-languages`

For Meteor versions below v0.9.0 using Meteorite/AtmosphereJS:
`mrt add moment-languages`

Once installed, just set your language as per Moment documentation, inside a `moment-config.js` file for example:
`moment.locale('fr');`


Notes
-------------

Version should have been the same as moment but is 2.8.5 because I had to republish it and meteor does not allow the same version to published twice.
