 export function queryString(json) {
        var tmps = [];
        for (var key in json) {
            tmps.push(key + '=' + json[key]);
        }
        return tmps.join('&');
}
