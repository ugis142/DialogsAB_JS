#### History
- When you launch the web browser and open a new webpage, the web browser creates a new entry in its history stack.

If you navigate to another webpage, the web browser also creates a new entry in the history stack.

The history stack stores the current page and previous pages that you visited.

To manipulate the history stack, you use the history object which is a property of the window object:

window.history

- The history object provides three methods for navigating between pages in the history stack:

 back()
 forward()
 go()

 history.back();
 history.forward();

For example, to move backward you use:
history.go(-1);

To move forward a page, you just call:
history.go(1)

To refresh the current page, you either pass 0 or no argument to the go() method:
history.go(0);
history.go();

To determine the number of URLs in the history stack, you use the length property:
history.length

- The window.history object allows you to access the history stack of the browser.
- To navigate to a URL in the history, you use the back(), forward(), and go() methods.
- The history.length returns the number of URLs in the history stack.