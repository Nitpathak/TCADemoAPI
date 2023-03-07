function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {

    //apiUrl: 'http://localhost:4000',
    token: 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ4dGtfY29kZSI6InJvYWRzdGVyXzIwMjMtMDItMjciLCJleHAiOjE2NzgxNTk4NzgsImlhdCI6MTY3ODE1OTI3OH0.jyINi6BU_-zkOnUkpyw2PlqG8a3pPZ8a7wx4bGYioKAFfDsM0RftUlMdfY0sxv8WZx_Vw6bUyGjBvurxlgzM9A'
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }
  return config;
}