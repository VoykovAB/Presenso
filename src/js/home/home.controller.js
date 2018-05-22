export default class HomeCtrl {

    constructor(AppConstants, $scope) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._$scope = $scope;

        this.menu = [
            {
                title: "Root level",
                showNodes: 0,
                nodes: [
                    {
                        title: "Second level",
                        showNodes: 0,
                        nodes: [
                            {
                                title: "Third level",
                                showNodes: 0,
                                nodes: []
                            },
                            {
                                title: "Third level",
                                showNodes: 0,
                                nodes: []
                            },
                            {
                                title: "Third level",
                                showNodes: 0,
                                nodes: []
                            }
                        ]
                    },
                    {
                        title: "Second level",
                        showNodes: 0,
                        nodes: [
                            {
                                title: "Third level",
                                showNodes: 0,
                                nodes: []
                            }
                        ]
                    }

                ],

            },
            {
                title: "Root level",
                showNodes: 0,
                nodes: [
                    {
                        title: "Second level",
                        showNodes: 0,
                        nodes: [
                            {
                                title: "Third level",
                                showNodes: 0,
                                nodes: []
                            }
                        ]
                    }
                ],

            }
        ]
    }


}
