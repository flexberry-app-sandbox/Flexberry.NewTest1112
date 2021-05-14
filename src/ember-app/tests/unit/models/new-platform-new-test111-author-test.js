import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-new-test111-author', 'Unit | Model | new-platform-new-test111-author', {
  // Specify the other units that are required for this test.
  needs: [
    'model:new-platform-new-test111-author',
    'model:new-platform-new-test111-book',
    'model:new-platform-new-test111-country',
    'model:new-platform-new-test111-language',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
