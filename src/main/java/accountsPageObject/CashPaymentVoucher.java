package accountsPageObject;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class CashPaymentVoucher {
  WebDriver dr;
  String pg="CashPaymentVoucher";
  Utility u= new Utility();
																  
  public CashPaymentVoucher(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openCashPaymentVoucher()
  {
      WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Accounts.png']"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Cash Payment Voucher")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/AccountManager/CashPaymentVoucher.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.name("ctl00$ContentPlaceHolder1$BtnControls1$ctl01")).click();
	  Thread.sleep(1000);
      u.captureScreenshot(dr,schl,pg,sc);
  }
}
