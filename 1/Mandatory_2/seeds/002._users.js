exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'admin', password: '$2b$12$9pGnXZ/s8Ls/vQyhRUBFEu93sJjQKgcXHwgBQqD.VupKEcyT8S7u.', role_id: 1 },
  ]);
}