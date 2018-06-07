/**
 * Number.prototype.format(n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function(n, x, s, c) {
    if (arguments.length === 0) { n = 2; x = 3; s = ','; c = '.'; }
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, Math.floor(n)));
    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
$.extend($.fn.dataTableExt.oStdClasses, {
    "sSortAsc"  : "header headerSortDown",
    "sSortDesc" : "header headerSortUp",
    "sSortable" : "header"
});
