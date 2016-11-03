var mymodule = angular.module('myApp', []);

mymodule.controller('signUpController', function($scope) {

		$scope.userData = {};

		$scope.submitForm = function() {
			if ($scope.signUpForm.$invalid) {
				alert('输入有问题');
			} else {
				alert('创建成功');
			}
		};
		$scope.getFormData = function() {
			console.log($scope.userData);
		};

		$scope.setFormData = function() {
			$scope.userData = {};
		}
	})
	.directive('compare', function() {

		var o = {};
		o.restrict = 'AE';
		o.scope = {
			orgText: '=compare'
		};

		/*依赖ngModel*/
		o.require = 'ngModel';
		o.link = function(scope, element, attrs, ctrl) {
			// 创建自定义验证器
			ctrl.$validators.compare = function(v) {
				return v == scope.orgText;
			};
			scope.$watch('orgText', function() {
				ctrl.$validate();
			});
		};
		return o;
	});