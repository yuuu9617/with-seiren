import { test, expect } from '@playwright/test';

test.skip('user can create weight loss commitment', async ({ page }) => {
  await page.goto('/commitment/weight-loss/create');

  const currentWeightInput = page.getByLabel('今の体重');
  await expect(currentWeightInput).toBeVisible();

  const currentHeightInput = page.getByLabel('今の身長');
  await expect(currentHeightInput).toBeVisible();

  const targetWeightInput = page.getByLabel('目標体重', { exact: true });
  await expect(targetWeightInput).toBeVisible();

  const periodInput = page.getByLabel('目標体重に達するまでの期間');
  await expect(periodInput).toBeVisible();

  const startDateInput = page.getByLabel('開始日');
  await expect(startDateInput).toBeVisible();

  // 各フィールドにテストデータを入力
  await currentWeightInput.fill('70');
  await currentHeightInput.fill('170');
  await targetWeightInput.fill('65');
  await periodInput.fill('4');
  await startDateInput.fill('2023-11-01');

  const createCommitmentButton = page.getByRole('button', { name: 'コミットメントを作成' });
  await expect(createCommitmentButton).toBeVisible();
  await new Promise(resolve => setTimeout(resolve, 1000));
  await createCommitmentButton.click();

  await expect(page).toHaveURL(/\/commitment\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/);
  await expect(page.getByRole('heading', { name: '減量プロジェクト' })).toBeVisible();
});
