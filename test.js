'use strict';

const {optimize} = require('regexp-tree');
const test = require('tape');
const exifOffsetTimeRegex = require('.');

test('exifOffsetTimeRegex', t => {
	t.deepEqual(
		[...exifOffsetTimeRegex.exec('+05:45')],
		[
			'+05:45',
			'+',
			'05',
			'45'
		],
		'should match an Exif zone offset value.'
	);

	/*
	t.deepEqual(
		exifOffsetTimeRegex.exec('-12:00').groups,
		{
			sign: '-',
			hours: '12',
			minutes: '00'
		},
		'should make use of a named capture group.'
	);
	*/

	t.equal(
		exifOffsetTimeRegex.exec('+15:00'),
		null,
		'should the positive offset range (+14:00) into consideration.'
	);

	t.equal(
		exifOffsetTimeRegex.exec('-12:01'),
		null,
		'should the negative offset range (-12:00) into consideration.'
	);

	t.equal(
		optimize(exifOffsetTimeRegex).toRegExp().source,
		exifOffsetTimeRegex.source,
		'should be fully optimized.'
	);

	t.end();
});
