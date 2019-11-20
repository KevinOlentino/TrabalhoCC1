var appJPH = angular.module('appJPH', ['ngRoute', 'jphControllers', 'ui.bootstrap']);

var jphControllers = angular.module("jphControllers", []);

appJPH.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/posts', { templateUrl: 'posts.html', controller: 'postsController' }).
        when('/post/:id', { templateUrl: 'post.html', controller: 'postController' }).
        when('/comments', { templateUrl: 'comments.html', controller: 'commentsController' }).
        when('/commentsbypost/:id', { templateUrl: 'commentsbypost.html', controller: 'commentsByPostController' }).
        when('/albums', { templateUrl: 'albums.html', controller: 'albumsController' }).
        when('/album/:id', { templateUrl: 'album.html', controller: 'albumController' }).
        when('/photos', { templateUrl: 'photos.html', controller: 'photosController' }).
        when('/todos', { templateUrl: 'todos.html', controller: 'todosController' }).
        when('/users', { templateUrl: 'users.html', controller: 'usersController' }).
        when('/user/:id', { templateUrl: 'user.html', controller: 'userController' }).
        when('/root', { templateUrl: 'root.html' }).
        otherwise({ redirectTo: '/root' });
}]);

jphControllers.controller('postsController', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        console.log('POSTS');

        var uriPosts = 'https://jsonplaceholder.typicode.com/posts';

        $scope.getPosts = function () {
            $http.get(uriPosts).then(function (retorno) {
                console.log(retorno);
                console.log(retorno.data);
                $scope.posts = retorno.data;
            });
        };
    }]);

jphControllers.controller('postController', ['$routeParams', '$scope', '$http', '$location',
    function ($routeParams, $scope, $http, $location) {
        console.log('POST - ' + $routeParams.id);

        var uriPost = 'https://jsonplaceholder.typicode.com/posts/' + $routeParams.id;

        $http.get(uriPost).then(function (retorno) {
            console.log(retorno);
            console.log(retorno.data);
            $scope.post = retorno.data;
        });

        var uriComments = 'https://jsonplaceholder.typicode.com/posts/' + $routeParams.id + '/comments?postId=' + $routeParams.id;

        $http.get(uriComments).then(function (retorno) {
            console.log(retorno);
            console.log(retorno.data);
            $scope.comments = retorno.data;
        });

    }]);

jphControllers.controller('commentsController', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        console.log('COMMENTS');

        var uriComments = 'https://jsonplaceholder.typicode.com/comments';

        $scope.getComments = function () {
            $http.get(uriComments).then(function (retorno) {
                console.log(retorno);
                console.log(retorno.data);
                $scope.comments = retorno.data;
            });
        };
    }]);

jphControllers.controller('commentsByPostController', ['$routeParams', '$scope', '$http', '$location',
    function ($routeParams, $scope, $http, $location) {
        console.log('COMMENTSBYPOST');
        console.log($routeParams.id);
        $scope.postId = $routeParams.id;
        var uriCommentsByPost = 'https://jsonplaceholder.typicode.com/comments?postId=' + $routeParams.id;
        console.log(uriCommentsByPost);
        $scope.getCommentsByPost = function () {
            $http.get(uriCommentsByPost).then(function (retorno) {
                console.log(retorno);
                console.log(retorno.data);
                $scope.posts = retorno.data;
            });
        };
    }]);

jphControllers.controller('usersController', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        console.log('USERS');

        var uriUsers = 'https://jsonplaceholder.typicode.com/users';

        $scope.getUsers = function () {
            $http.get(uriUsers).then(function (retorno) {
                console.log(retorno);
                console.log(retorno.data);
                $scope.users = retorno.data;
            });
        };
    }]);
jphControllers.controller('usersController', ['$rootScope', '$scope', '$http', '$location',
    function ($rootScope, $scope, $http, $location) {
        console.log('USERS');

        var uriUsers = 'https://jsonplaceholder.typicode.com/users';

        $scope.getUsers = function () {
            $http.get(uriUsers).then(function (retorno) {
                console.log(retorno);
                console.log(retorno.data);
                $scope.users = retorno.data;
            });
        };
    }]);

jphControllers.controller('userController', ['$routeParams', '$scope', '$http', '$location',
    function ($routeParams, $scope, $http, $location) {
        console.log('USER: ' + $routeParams.id);

        var uriUser = 'https://jsonplaceholder.typicode.com/users/' + $routeParams.id;
        $http.get(uriUser).then(function (retorno) {
            console.log(retorno);
            console.log(retorno.data);
            $scope.user = retorno.data;
        });

        var uriTodos = 'https://jsonplaceholder.typicode.com/users/' + $routeParams.id + '/todos?userId=' + $routeParams.id;

        $http.get(uriTodos).then(function (retorno) {          
            console.log(retorno);
            console.log(retorno.data);
            $scope.todos = retorno.data;

        });
    }]);

jphControllers.controller('todosController', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
        console.log('Todo');

        var uriTodo = 'https://jsonplaceholder.typicode.com/todos';

        $scope.getTodo = function () {
            $http.get(uriTodo).then(function (retorno) {
                console.log(retorno);
                console.log(retorno.data);
                $scope.todos = retorno.data;
            });
        };
    }]);

jphControllers.controller('albumsController', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
        console.log('Albums');

        var uriAlbums = 'https://jsonplaceholder.typicode.com/albums';

            $http.get(uriAlbums).then(function (retorno) {
                console.log(retorno);
                console.log(retorno.data);
                $scope.albums = retorno.data;
            });
    }]);

jphControllers.controller('albumController', ['$routeParams','$scope', '$http', '$location',
    function ($routeParams,$scope, $http, $location) {
        console.log('Album');

        var uriAlbum = 'https://jsonplaceholder.typicode.com/albums';

        $http.get(uriAlbum).then(function (retorno) {
            console.log(retorno);
            console.log(retorno.data);
            $scope.album = retorno.data;
        });        
        var uriPhotos = 'https://jsonplaceholder.typicode.com/albums/' + $routeParams.id + '/photos?albumId=' + $routeParams.id;

        $http.get(uriPhotos).then(function (retorno) {
            console.log(retorno);
            console.log(retorno.data);
            $scope.photos = retorno.data;

        });

        var uriPhoto = 'https://jsonplaceholder.typicode.com/albums/' + $routeParams.id + '/photos?albumId=' + $routeParams.id + '&id=' + $routeParams.id;

        $http.get(uriPhoto).then(function (retorno) {
            console.log(retorno);
            console.log(retorno.data);
            $scope.photo = retorno.data;

        });
    }]);

jphControllers.controller('photosController', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {
        console.log('Photos');

        var uriPhotos = 'https://jsonplaceholder.typicode.com/photos';

        $http.get(uriPhotos).then(function (retorno) {
            console.log(retorno);
            console.log(retorno.data);
            $scope.photos = retorno.data;
        });
    }]);