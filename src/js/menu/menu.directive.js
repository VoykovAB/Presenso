export default class MenuDirective {

    constructor() {
        this.scope = {
            items: '='
        };

        this.templateUrl = 'menu/templates/menu.html';
    }

    link(scope) {
        scope.consoleItem = function (item) {
            console.log(item.title);
        };
        scope.toggleChild = function (item) {
            item.showNodes = !item.showNodes;
        }
    }
}