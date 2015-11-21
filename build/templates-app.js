angular.module('templates-app', ['header.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html']);

angular.module("header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header.tpl.html",
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <a class=\"navbar-brand\" ui-sref=\"#\">Project</a>\n" +
    "    </div>\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "        <!-- Dashboard -->\n" +
    "        <li ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"messages\" ui-sref-opts=\"{reload: true}\">\n" +
    "                <i class=\"fa fa-comment-o fa-fw\"></i>\n" +
    "                Dashboard\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div id=\"home\" class=\"row-fluid\">\n" +
    "    <div class=\"leftPanel\">\n" +
    "        <div id=\"bubbles\" class=\"bubbleChart\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"rightPanel\">\n" +
    "        <div id=\"details\" ng-if=\"showDetails\">\n" +
    "            <span style=\"font-weight: bold;\">{{selectedNode.deviceKey}}</span>\n" +
    "            <!-- Carousel -->\n" +
    "            <div class=\"carousel-height\">\n" +
    "                <div class=\"carousel-inner\">\n" +
    "                    <ul rn-carousel rn-carousel-index=\"carouselIndex3\" rn-carousel-transition=\"hexagon\"\n" +
    "                        rn-carousel-buffered class=\"carousel3\">\n" +
    "                        <li ng-repeat=\"item in carouselItems track by $index\">\n" +
    "                            <div class=\"carousel-height\" id=\"carousel_{{$index}}\">\n" +
    "                                <div ng-include src='getCarouselView($index, item)'></div>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Comments -->\n" +
    "            <div style=\"width: 99%;\">\n" +
    "                <div class=\"panel panel-primary\" style=\"height: 330px; overflow: auto;\">\n" +
    "                    <div class=\"panel-heading\">\n" +
    "                        <i class=\"fa fa-comments\"></i>&nbsp; Comments\n" +
    "                    </div>\n" +
    "                    <div ng-repeat=\"comment in userComments\">\n" +
    "                        <ul class=\"chat\">\n" +
    "                            <li class=\"left clearfix\">\n" +
    "                                <span class=\"chat-img pull-left\" style=\"margin-left: 2px;\">\n" +
    "                            <i class=\"fa fa-user\"></i>\n" +
    "                        </span>\n" +
    "\n" +
    "                                <div class=\"chat-body clearfix\">\n" +
    "                                    <div class=\"header\">\n" +
    "                                        <strong class=\"primary-font\">{{comment.userName}}</strong>\n" +
    "                                    </div>\n" +
    "                                    <p>{{comment.comments}}</p>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div id=\"login\" class=\"login-container col-md-6 col-md-offset-3\">\n" +
    "    <div class=\"panel panel-info\">\n" +
    "        <div class=\"panel-heading\">\n" +
    "            <div class=\"panel-title\">Sign In</div>\n" +
    "        </div>\n" +
    "        <div class=\"panel-body padding-top-30\">\n" +
    "            <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" ng-submit=\"attemptLogin()\" name=\"loginform\">\n" +
    "                <div class=\"row\">\n" +
    "                    <span class=\"CustomValidationError\" ng-show=\"authenticationFailure\">Authentication failure,. Please try again...</span>\n" +
    "                </div>\n" +
    "                <div class=\"input-group margin-bottom-25\">\n" +
    "                    <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n" +
    "                    <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\"\n" +
    "                           placeholder=\"Username or Email Address\" ng-model=\"credentials.username\" required autofocus>\n" +
    "                </div>\n" +
    "                <div class=\"input-group margin-bottom-25\">\n" +
    "                    <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n" +
    "                    <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\"\n" +
    "                           placeholder=\"Password\" ng-model=\"credentials.password\" required>\n" +
    "                </div>\n" +
    "                <div class=\"form-group margin-top-10\">\n" +
    "                    <!-- Log In Button -->\n" +
    "                    <div class=\"col-sm-12 controls\">\n" +
    "                        <button class=\"btn btn-primary\" type=\"submit\">Log In</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
