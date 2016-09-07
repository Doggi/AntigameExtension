// PLUGINS //
Number.decPoint = ',';
Number.thousand_sep = '.';

Number.prototype.format = function (k, fixLength) {
    if (!k) k = 0;
    var neu = '';
    var sign = this < 0 ? '-' : '';

    // Runden
    var f = Math.pow(10, k);
    var zahl = Math.abs(this);
    zahl = '' + parseInt(zahl * f + .5) / f;

    // Komma ermittlen
    var idx = zahl.indexOf('.');
    // fehlende Nullen einfügen
    if (fixLength && k) {
        zahl += (idx == -1 ? '.' : '' )
            + f.toString().substring(1);
    }

    // Nachkommastellen ermittlen
    idx = zahl.indexOf('.');
    if (idx == -1) idx = zahl.length;
    else neu = Number.decPoint + zahl.substr(idx + 1, k);

    // Tausendertrennzeichen
    while (idx > 0) {
        if (idx - 3 > 0)
            neu = Number.thousand_sep + zahl.substring(idx - 3, idx) + neu;
        else
            neu = zahl.substring(0, idx) + neu;
        idx -= 3;
    }
    return sign + neu;
};