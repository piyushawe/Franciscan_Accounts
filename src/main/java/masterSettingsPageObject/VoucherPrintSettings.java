package masterSettingsPageObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class VoucherPrintSettings {
  WebDriver dr;
  String pg="VoucherPrintSettings";
  Utility u= new Utility();
													  
  public VoucherPrintSettings(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openVoucherPrintSettings()
  {
	  ArrayList<String> tabs2 = new ArrayList<String> (dr.getWindowHandles());
	  dr.switchTo().window(tabs2.get(1));
      WebElement menu= dr.findElement(By.xpath("//a[contains(text(),'Master Settings')]"));
 	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Voucher Print Settings")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/AccountManager/VoucherPrintSetting.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
      u.captureScreenshot(dr,schl,pg,sc);
      verifyVoucherPrintSetting();
  }
  public void verifyVoucherPrintSetting()
  {
	  List<WebElement>settingtype= dr.findElements(By.name("ctl00$ContentPlaceHolder1$rbtnLst"));
	  boolean flag= true;
	  int i=0;
	  for(WebElement stype:settingtype)
	  {
		  if(settingtype.get(i).isSelected())
			  flag=true;
		  i++;
	  }
	  if(flag)
		  System.out.println("Voucher Print Setting is selected");
	  else
		  System.out.println("Voucher Print Setting is not selected");
  }
}
