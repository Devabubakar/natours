const express = require('express');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// run server
const PORT = process.env.NODE_PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App running on PORT : ${PORT}`);
  console.log(`Environment : ${process.env.NODE_ENV}`);
});

// uncaught exception
process.on('uncaughtException', (err) => {
  console.log(`UNcaught Exception ...shutting down`, err);

  server.close(() => {
    process.exit(1);
  });
});

// sigterm
process.on('SIGTERM', (err) => {
  console.log('Sigterm received ...shutting down gracefully', err);
  server.close(() => {
    process.exit(1);
  });
});

// unhandled rejection

process.on('unhandledRejection', (err) => {
  console.log(`UNhandled Rejection `, err.name, err.message);
  process.exit(1);
});
