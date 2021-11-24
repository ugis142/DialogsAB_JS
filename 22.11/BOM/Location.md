#### Location
- The Location object represents the current URL of a page. It can be accessed via window.location or document.location.
- The Location object has a number of properties that represent the URL such as protocol, host, pathname, and search.
- To manipulate the location, you set its properties new values or use assign(), replace(), and reload() methods.

#### Get Query String
- The URLSearchParams provides an interface to work with query string parameters
- The URLSearchParams is an iterable so you can use the for...of construct to iterate over query string parameters.
- The has() method of the URLSearchParams determines if a parameter with a specified name exists.

#### Redirect to a new URL
- To redirect to a new URL or page, you assign the new URL to the location.href property or use the location.assign() method.
- The location.replace() method does redirect to a new URL but does not create an entry in the history stack of the browser.