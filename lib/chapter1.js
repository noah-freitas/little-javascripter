var car = function(list) {
	'use strict';
	
	return list[0];
};

var cdr = function(list) {
	'use strict';
	
	return list.slice(1);
};

var cons = function (atom, list) {
	'use strict';
	
	if (!Array.isArray(list)) {
		throw {
			name: 'TypeError',
			message: 'The second argument to cons must be an array.'
		};
	}
	
	return list.unshift(atom);
};

var isNull = function(list) {
	'use strict';
	
	if (!Array.isArray(list)) {
		return undefined;
	}
	
	return list.length === 0;	
};

var isAtom = function(atom) {
	'use strict';
	
	return typeof atom === 'string' 
		|| typeof atom === 'number' 
		|| typeof atom === 'boolean';
};

var isEq = function(atom1, atom2) {
	'use strict';
	
	if (!isAtom(atom1) 
		|| !isAtom(atom2) 
		|| typeof atom1 === 'number' 
		|| typeof atom2 === 'number') {
			throw {
				name: 'TypeError',
				message: 'Both arguments to isEq must be atoms.'
			};
	}
	
	return atom1 === atom2;
};
