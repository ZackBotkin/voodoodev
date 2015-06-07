var app = angular.module('courseInput', 
	[
		'MainCtrl',
		'userHomePageCtrl',
		'ScheduleCtrl',
		'TimerCtrl',
		'BreatherCtrl',
		'TaskCtrl',
		'TaskHomeCtrl',
		'CourseCtrl',
		'AuthCtrl',
		'NavCtrl',
		'SearchCtrl',

		'ui.router',
		'angularMoment',

		'courseService',
		'authService',
		'taskService',
		'userService',
		'scheduleService',
		'breatherService',
		'sessionService',

		'courseRouting',

		'taskDirective',
		'youtubeDirective',
		'scheduleItemDirective'

	]
);
