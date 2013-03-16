/**
 * @author yj
 */

function Phone (name, snippet){
	
	this.name = name;
	this.snippet = snippet;
}

function PhoneListCtrl($scope) {
  $scope.phones = [
    new Phone('Nexus1' ,'Fast just got faster with Nexus S.'),
    new Phone('Nexus2' ,'Fast just got faster with Nexus S.'),
    new Phone('Nexus3' ,'Fast just got faster with Nexus S.')
  ];
}