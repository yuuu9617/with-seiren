import { test, expect } from '@playwright/test';

test.skip('user can go to the top page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('ダイエット成功のための計画を立てる')).toBeVisible();
});
