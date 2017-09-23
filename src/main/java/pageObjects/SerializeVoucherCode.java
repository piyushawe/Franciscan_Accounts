package pageObjects;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class SerializeVoucherCode {
  WebDriver dr;
  Utility u= new Utility();
  String r="SerializeVoucherCode";
  
  @FindBy(id="ContentPlaceHolder1_ddlEntryType")WebElement vouchertype;
  @FindBy(name="ctl00$ContentPlaceHolder1$btnGenerate$ctl00")WebElement generate;
  @FindBy(name="ctl00$ContentPlaceHolder1$btnHistory$ctl00")WebElement history;
  
  public SerializeVoucherCode(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openSerializeVoucherCode()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Serialize Voucher Code")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Account/RptCodeSerialize.aspx']")));
  }
  public void selectVoucherType(String vtype)
  {
	  new Select(vouchertype).selectByVisibleText(vtype);
  }
  public void clickGenerate(String str, Collection<String>sc ) throws InterruptedException, IOException
  {
	 generate.click();
	 Thread.sleep(5000);
	 u.captureScreenshot(dr, str, r,sc);
  }
  public void clickHistory(String str, Collection<String>sc ) throws InterruptedException, IOException
  {
	 history.click();
     u.verifyShow(dr, str, r, sc);
	 Thread.sleep(5000);
	 u.captureScreenshot(dr, str, r,sc);
  }
}
