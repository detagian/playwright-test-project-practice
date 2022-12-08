import XLSX from "xlsx";
let wb = XLSX.readFile("./messages_data_SC_Customs.xlsx");
const ws = wb.Sheets[wb.SheetNames[0]];
let data = XLSX.utils.sheet_to_json(ws);
let MessageArea = "";
let tempAwbstart = 0;
let FHLtoSend = 2
for (let i =data[0].AwbNoStart;i<=data[0].AwbNoEnd;i++) {
    MessageArea = MessageArea.concat(data[0].MsgtypeFWB)
    MessageArea = MessageArea.concat(data[0].AwbNo_Prefix)
    MessageArea = MessageArea.concat(i)
    MessageArea = MessageArea.concat(data[0].FWBinfo)
    //console.log("FWB : ",MessageArea)
    tempAwbstart = (i - data[0].AwbNoStart)
    MessageArea = ""
    if (tempAwbstart<FHLtoSend){
        for (let j = data[0].FHLNoStart; j<=data[0].FHLNoEnd; j++){
            MessageArea = MessageArea.concat(data[0].MsgtypeFHL)
            MessageArea = MessageArea.concat(data[0].FHLAwbNo_Prefix)
            MessageArea = MessageArea.concat(i)
            MessageArea = MessageArea.concat(data[0].FHLinfo)
            MessageArea = MessageArea.concat(j)
            MessageArea = MessageArea.concat(data[0].FHL)
            //console.log("\n FHL :\n ",MessageArea)
        }
    }
}
/// SEND FFM
MessageArea = ""
MessageArea = data[0].MsgtypeFFM+data[0].FltNo+data[0].FltInfo
for (let i =data[0].AwbNoStart;i<=data[0].AwbNoEnd;i++) {
    MessageArea = MessageArea.concat(data[0].AwbNo_Prefix)
    MessageArea = MessageArea.concat(i)
    MessageArea = MessageArea.concat(data[0].ShipmentDetail)
    MessageArea = MessageArea.concat(data[0].NatureofGoods)
    data[0].NatureofGoods = data[0].NatureofGoods+1
}
MessageArea = MessageArea.concat(data[0].EndofFFM)
console.log("\n FFM :\n ",MessageArea)

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://configurator2.dev.ccn/Pages/Login/Login.aspx
  await page.goto('http://configurator2.dev.ccn/Pages/Login/Login.aspx');

  // Fill input[name="ctl00\$MainContent\$txtUserID"]
  await page.locator('input[name="ctl00\\$MainContent\\$txtUserID"]').fill('ccn\\m.deta');


  // Fill input[name="ctl00\$MainContent\$txtPassword"]
  await page.locator('input[name="ctl00\\$MainContent\\$txtPassword"]').fill('a25bmJ8@');

  // Click text=Submit
  await page.locator('text=Submit').click();
  await expect(page).toHaveURL('http://configurator2.dev.ccn/Pages/Query/QueryPage.aspx');

  // Click text=Send Message
  await page.locator('text=Send Message').click();
  await expect(page).toHaveURL('http://configurator2.dev.ccn/Pages/SendMessage/SendMessage.aspx');


  // Fill textarea[name="ctl00\$ctl00\$MainContent\$PageContent\$txtMessageToSend"]
  await page.locator('textarea[name="ctl00\\$ctl00\\$MainContent\\$PageContent\\$txtMessageToSend"]').fill(MessageArea);

  // Click text=Submit
  await page.locator('text=Submit').click();
  await expect(page).toHaveURL('http://configurator2.dev.ccn/Pages/SendMessage/SendMessage.aspx');
});


