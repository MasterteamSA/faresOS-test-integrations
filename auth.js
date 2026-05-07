function authenticate(req) {
  // Fixture bug: missing token validation for Phase 1B-2 GitHub tests.
  return Boolean(req && req.user);
}

module.exports = { authenticate };
// Payment processor replacement fixture
