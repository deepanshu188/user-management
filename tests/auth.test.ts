import { expect, test } from 'vitest';
import { login } from '../services/auth';

test('authenticate user on login', async () => {
  const testPayload = { email: 'testemail', password: 'testpass' };

  await login(testPayload);

  expect(useApi).toHaveBeenCalledWith('/api/login', {
    method: 'POST',
    body: testPayload,
  });
});
