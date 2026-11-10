/* DOM convenience methods shipped after Chromium 53. */
(function () {
  function fragment(args) {
    var f = document.createDocumentFragment();
    for (var i = 0; i < args.length; i++) { f.appendChild(args[i] instanceof Node ? args[i] : document.createTextNode(String(args[i]))); }
    return f;
  }
  var prototypes = [Element.prototype, Document.prototype, DocumentFragment.prototype];
  for (var i = 0; i < prototypes.length; i++) {
    if (!prototypes[i].append) { prototypes[i].append = function () { this.appendChild(fragment(arguments)); }; }
    if (!prototypes[i].prepend) { prototypes[i].prepend = function () { this.insertBefore(fragment(arguments), this.firstChild); }; }
    if (!prototypes[i].replaceChildren) { prototypes[i].replaceChildren = function () { var f = fragment(arguments); while (this.firstChild) { this.removeChild(this.firstChild); } this.appendChild(f); }; }
  }
  if (!Element.prototype.replaceWith) { Element.prototype.replaceWith = function () { if (this.parentNode) { this.parentNode.replaceChild(fragment(arguments), this); } }; }
}());
