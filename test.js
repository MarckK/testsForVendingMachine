test('testing the testing environment', function(assert) {
  var actual = 1;
  var expected = 1;
  assert.equal(actual, expected, 'test environment is set up correctly!')
});

test('getChange should return and empty array when change is 0', function(assert) {
  var actual = getChange('£1', '£1');
  var expected = [];
  assert.deepEqual(actual, expected, 'we returned an empty array!')
});

test('if cash paid is less than the price, it should return "You do not have enough money to buy"', function(assert) {
  var actual = getChange('£5', '£1');
  var expected = 'You do not have enough money to buy';
  assert.deepEqual(actual, expected, 'Not enough cash paid!');
})

test('if cashPaid is £1 more than price, it should return [100]', function(assert) {
  var actual = getChange('£1', '£2');
  var expected = [100];
  assert.deepEqual(actual, expected, 'Passed!');
})

test('general change test', function(assert) {
  var actual = getChange('£1.00', '£5.00');
  var expected = [200, 200];
  assert.deepEqual(actual, expected, 'Passed');
})

test('general change test', function(assert) {
  var actual = getChange('£1.67', '£2.00');
  var expected = [20, 10, 2, 1];
  assert.deepEqual(actual, expected, 'Passed');
})

test('if cashPaid does not have a pound sign', function(assert) {
  var actual = getChange('£2', '4');
  var expected = [200];
  assert.deepEqual(actual, expected, 'Passed!');
})

test('if cashPaid is large number', function(assert) {
  var actual = getChange('£2', '£23.57');
  var expected = [200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  200,
  100,
  50,
  5,
  2];
  assert.deepEqual(actual, expected, 'Passed!');
})
