import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
})

test('PET TYPES menu', async ({page}) => {

  await page.getByRole('link').getByText('PET TYPES').click()//1
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible()//2
  await page.getByRole('button', { name: 'Edit' }).first().click()//3
  //4
 await page.getByRole('textbox').clear()
 await page.waitForTimeout(500)
  await page.getByRole('textbox').fill('rabbit')
  await page.getByRole('button', { name: 'Update' }).click()//5
  //6

  await page.getByRole('button', { name: 'Edit' }).first().click()
  await page.getByRole('textbox').clear()
  await page.waitForTimeout(500)
  await page.getByRole('textbox').fill('cat')
  await page.getByRole('button', { name: 'Update' }).click()
  






  
});
