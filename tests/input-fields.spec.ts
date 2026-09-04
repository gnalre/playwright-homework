import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
})

test('PET TYPES menu', async ({page}) => {
// 1. Select the PET TYPES menu item in the navigation bar
  await page.getByRole('link').getByText('PET TYPES').click()

// 2. Add assertion of the "Pet Types" text displayed above the table with the list of pet types
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible()

// 3. Click on "Edit" button for the "cat" pet type  
  await page.getByRole('button', { name: 'Edit' }).first().click()//3

// 4. Add assertion of the "Edit Pet Type" text displayed

// 5. Change the pet type name from "cat" to "rabbit" and click "Update" button
  await page.getByRole('textbox').clear()
  await page.waitForTimeout(500)
  await page.getByRole('textbox').fill('rabbit')
  await page.getByRole('button', { name: 'Update' }).click()

// 6. Add the assertion that the first pet type in the list of types has a value "rabbit"  

  

// 7. Click on "Edit" button for the same "rabbit" pet type
  await page.getByRole('button', { name: 'Edit' }).first().click()

// 8. Change the pet type name back from "rabbit" to "cat" and click "Update" button 
  await page.getByRole('textbox').clear()
  await page.waitForTimeout(500)
  await page.getByRole('textbox').fill('cat')
  await page.getByRole('button', { name: 'Update' }).click()

// 9. Add the assertion that the first pet type in the list of names has a value "cat" 
 
  






  
});
