var Info = (function () {
    function Info(info) {
        this.info = info;
    }
    Info.prototype.getInfo = function () {
        return this.info;
    };
    return Info;
})();
;
var info = new Info("System ready!");
console.log(info.getInfo());
