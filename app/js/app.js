var angular  = require("angular");
var angularBootstrap = require("angular-ui-bootstrap");
require("./vendor/angular-google-plus.js");
var app = angular.module('PhotoContest', [
	'googleplus',
	'ui.router',
	'ui.bootstrap'
]);


//Load Config file
app.config(require("./config.js"));
//load Run file
app.run(require("./run.js"));

//Load Controllers
app.controller('rootController', require('./controllers/root.js'));
app.controller('loginController', require('./controllers/login.js'));
app.controller('contestController', require('./controllers/contest.js'));
app.controller('uploadController', require('./controllers/upload.js'));
app.controller('submissionsController', require('./controllers/submissions.js'));
app.controller('submissionController', require('./controllers/submission.js'));
app.controller('popupController', require('./controllers/popup.js'));
app.controller('photoLargeController', require('./controllers/photoLarge.js'));

//Load Services and Factories
app.factory('apiService', require('./services/api.js'));
app.factory('authService', require('./services/auth.js'));
app.factory('restService', require('./services/rest.js'));
app.factory('cookieService', require('./services/cookie.js'));
app.factory('popupService', require('./services/popup.js'));
app.factory('submissionsService', require('./services/submissions.js'));

//app.service('service', require('./service'));


//Load Directives
