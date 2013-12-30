TESTS = test/node/*.js
REPORTER = dot

test:
	mocha --harmony

.PHONY: test