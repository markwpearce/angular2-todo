System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PrioritySortPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PrioritySortPipe = (function () {
                function PrioritySortPipe() {
                }
                PrioritySortPipe.prototype.transform = function (array, args) {
                    console.log(array);
                    if (typeof args[0] === "undefined") {
                        return array;
                    }
                    var direction = args[0];
                    array = array.sort(function (a, b) {
                        var left = a.priority;
                        var right = b.priority;
                        return (direction === "desc") ? right - left : left - right;
                    });
                    return array;
                };
                PrioritySortPipe = __decorate([
                    core_1.Pipe({
                        name: "prioritySort",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], PrioritySortPipe);
                return PrioritySortPipe;
            })();
            exports_1("PrioritySortPipe", PrioritySortPipe);
        }
    }
});
//# sourceMappingURL=pipe.js.map