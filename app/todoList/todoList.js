System.register(['angular2/core', '../util/pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pipe_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pipe_1_1) {
                pipe_1 = pipe_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList() {
                }
                TodoList.prototype.raisePriority = function (todo) {
                    todo.priority--;
                };
                TodoList.prototype.lowerPriority = function (todo) {
                    todo.priority++;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TodoList.prototype, "todos", void 0);
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        pipes: [pipe_1.PrioritySortPipe],
                        styleUrls: ['app/todoList/todoList.css'],
                        templateUrl: 'app/todoList/todoList.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoList);
                return TodoList;
            })();
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todoList.js.map