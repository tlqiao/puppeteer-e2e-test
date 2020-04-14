function getParentElements(elem, selector){
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {
                }
                return i > -1;
            };
    }
    let parents = [];
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (selector) {
            if (elem.matches(selector)) {
                parents.push(elem);
            }
            continue;
        }
        parents.push(elem);
    }
    return parents;

};
module.exports = {getParentElements:getParentElements};