package masterSettingsPageObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class AccountMasterSetting {
  WebDriver dr;
  String pg="AccountMasterSetting";
  Utility u= new Utility();
											  
  public AccountMasterSetting(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }

  public void openAccountMasterSetting()
  {
      //WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Master-Settings.png']"));
     // WebElement menu = dr.findElement(By.xpath("//img[@src='/Images/layout/Master-Settings.png']"));
      ArrayList<String> tabs2 = new ArrayList<String> (dr.getWindowHandles());
      dr.switchTo().window(tabs2.get(1));
      WebElement menu= dr.findElement(By.xpath("//a[contains(text(),'Master Settings')]"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.xpath("//a[contains(text(), 'Account Master Setting')]")).click();
	  //dr.findElement(By.linkText("Account Master Setting")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/AccountManager/AccountMasterSetting.aspx']")));
  }

  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
      u.captureScreenshot(dr,schl,pg,sc);
  }
}
