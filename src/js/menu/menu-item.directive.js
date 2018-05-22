export default class MenuItemDirective {

    constructor() {
        this.scope = {
            items: '='
        };

        this.templateUrl = 'menu/templates/menu-item.html';
    }
}