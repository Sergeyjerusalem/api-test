module.exports = {
    reporter: 'spec',
    color: true,
    retries: 1,
    spec: ['src/tests/**/*.js'], // the positional arguments!
    timeout: '10000', // same as "timeout: '2s'"
    ui: 'bdd',
  };