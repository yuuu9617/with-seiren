import { test, expect } from '@playwright/test';

test('user can create weight loss commitment', async ({ page }) => {
  await page.goto('/commitment/weight-loss/create');

  await expect(page.getByLabel('今の体重')).toBeVisible();
  await expect(page.getByLabel('今の身長')).toBeVisible();
  await expect(page.getByLabel('目標体重', { exact: true })).toBeVisible();

  await expect(page.getByLabel('目標体重に達するまでの期間')).toBeVisible();
  await expect(page.getByLabel('開始日')).toBeVisible();

  await expect(page.getByRole('button', { name: '次へ' })).toBeVisible();
});
