
const getValues = fn => {
    return {
        'second':   fn(1000000),
        'minute':   fn(1000000 * 60),
        'hour':     fn(1000000 * 60 * 60),
        'day':      fn(1000000 * 60 * 60 * 24),
        'mouth':    fn(1000000 * 60 * 60 * 24 * 30),
        'year':     fn(1000000 * 60 * 60 * 24 * 30 * 12),
        'century':  fn(1000000 * 60 * 60 * 24 * 30 * 12 * 100)
    }
}


const table = {
    'lg n':     getValues( f => 2**f),
    '√n':       getValues( f => f**2),
    'n':        getValues( f => f ),
    'nlg(n)':   getValues( f => 'null' ),
    'n^2':      getValues( f => f**(1/2)),
    'n^3':      getValues( f => f**(1/3)),
    '2^n':      getValues( f => Math.log2(f)),
    'n!':       getValues( f => 'null' )
}

console.table(table);