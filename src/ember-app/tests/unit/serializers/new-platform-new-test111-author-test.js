import { moduleForModel, test } from 'ember-qunit';

moduleForModel('new-platform-new-test111-author', 'Unit | Serializer | new-platform-new-test111-author', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:new-platform-new-test111-author',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
