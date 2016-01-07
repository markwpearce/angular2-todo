System.register(['angular2/core', './todoList/todoList', './todoForm/todoForm'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todoList_1, todoForm_1;
    var TodoListApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todoList_1_1) {
                todoList_1 = todoList_1_1;
            },
            function (todoForm_1_1) {
                todoForm_1 = todoForm_1_1;
            }],
        execute: function() {
            TodoListApp = (function () {
                function TodoListApp() {
                    this.todos = [
                        { text: 'Learn Angular2', done: true, priority: 0 },
                        { text: 'Build an Angular2 app', done: false, priority: 1 }
                    ];
                }
                Object.defineProperty(TodoListApp.prototype, "remaining", {
                    get: function () {
                        return this.todos.reduce(function (count, todo) { return count + todo.done; }, 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoListApp.prototype.archive = function () {
                    var _this = this;
                    var oldTodos = this.todos;
                    this.todos = [];
                    oldTodos.forEach(function (todo) {
                        if (!todo.done)
                            _this.todos.push(todo);
                    });
                };
                TodoListApp.prototype.addTask = function (task) {
                    this.todos.push(task);
                };
                TodoListApp = __decorate([
                    core_1.Component({
                        selector: 'todolist-app',
                        templateUrl: 'app/app.html',
                        directives: [todoList_1.TodoList, todoForm_1.TodoForm]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListApp);
                return TodoListApp;
            })();
            exports_1("TodoListApp", TodoListApp);
        }
    }
});
//# sourceMappingURL=app.js.map