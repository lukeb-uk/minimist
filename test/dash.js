var parse = require('../');
var test = require('tape');

test('-', function (t) {
    t.plan(5);
    t.deepEqual(parse([ '-n', '-' ]), { n: '-', _: [] });
    t.deepEqual(parse([ '-' ]), { _: [ '-' ] });
    t.deepEqual(parse([ '-f-' ]), { f: '-', _: [] });
    t.deepEqual(
        parse([ '-b', '-' ], { boolean: 'b' }),
        { b: true, _: [ '-' ] }
    );
    t.deepEqual(
        parse([ '-s', '-' ], { string: 's' }),
        { s: '-', _: [] }
    );
});
